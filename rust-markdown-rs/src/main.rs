use axum::{ response::Html, routing::get, Router};
use markdown::{to_html, to_html_with_options, Options};

const MD: &str = "# Rust Markdown

# Lorem
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### headeing-3

**bold**

*italic*

~~cancel~~

> キラキラ夢見よう 夢を見ることに  
> 早すぎるも遅すぎるもないから  
> 自分らしい夢を！
";

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/", get(index))
        .route("/html", get(html))
        .route("/gfm", get(gfm));

    axum::Server::bind(&"0.0.0.0:5000".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}

async fn index() -> Html<String> {
    return Html(r#"<h1>Howdy!</h1>
See commonmark exsample<a href="/html">here</a><br>
See gfm exsample<a href="/gfm">here</a>
"#.to_string())
}

async fn html() -> Html<String>{
    return Html(to_html(MD));
}

async fn gfm() -> Html<String> {
    return Html(to_html_with_options(MD, &Options::gfm()).unwrap());
}
