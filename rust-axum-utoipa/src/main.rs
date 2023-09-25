use axum::{routing::get, routing::post, Router, extract::Query};
use serde::{Deserialize, Deserializer, de};
use std::{fmt, str::FromStr};
use utoipa::{OpenApi, IntoParams};
use utoipa_swagger_ui::SwaggerUi;
use uuid::Uuid;

#[derive(Deserialize, Debug, IntoParams)]
pub struct Person {
    #[serde(default, deserialize_with = "empty_string_as_none")]
    name: Option<String>,
    age: Option<u8>,
    key: Option<String>,
}

#[derive(OpenApi)]
#[openapi(
    paths(show, register),
    tags(
        (name = "rust-axum-utoipa", description = "axum & utipa exsample API")
    )
    )]
struct ApiDoc;

#[tokio::main]
async fn main() {
    let app = Router::new()
        .merge(SwaggerUi::new("/swagger-ui").url("/api-docs/openapi.json", ApiDoc::openapi()))
        .route("/", get(show))
        .route("/", post(register));

    axum::Server::bind(&"0.0.0.0:3000".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap()
}

fn empty_string_as_none<'de, D, T>(de: D) -> Result<Option<T>, D::Error>
where
    D: Deserializer<'de>,
    T: FromStr,
    T::Err: fmt::Display,
{
    // 欠落した値を`None`に置換する
    let opt = Option::<String>::deserialize(de)?;
    match opt.as_deref() {
        None | Some("") => Ok(None),
        Some(s) => FromStr::from_str(s).map_err(de::Error::custom).map(Some),
    }
}


#[utoipa::path(get, path = "/", responses((status = 200, description = "show api")), params(Person))]
async fn show(params: Query<Person>) -> String {
    if let (Some(name), None) = (&params.name, &params.age) {
        return format!("Hi! {}! How old are you?", name);
    } else if let (Some(name), Some(age)) = (&params.name, &params.age) {
        return format!("Grete, your name is {}.\nyour Age is {}.", name, age);
    } else {
        return format!("Howdy! Please tell me your name or age.")
    }
}

#[utoipa::path(post, path = "/", responses((status = 200, description = "show api")), params(Person))]
async fn register(params: Query<Person>) -> String {
    let db = sled::open("db").unwrap();

    if let (Some(name), Some(age)) = (&params.name, &params.age) {
        let key = Uuid::new_v4().to_string();
        let value = format!("Name: {}\nAge: {}", name, age);

        if let Err(err) = db.insert(&key, value.as_bytes()) {
            return format!("Error: in register data.\n{}", err)
        }

        return key
    } else if let Some(key) = &params.key {
        if let Ok(data) = db.get(key) {
            let ivec = data.unwrap();
            return String::from_utf8(ivec.to_vec()).unwrap()
        } else {
            return "Sorry! Notthing data.".to_string()
        }
    }else {
       return "Notthing data.".to_string()
    };
}
