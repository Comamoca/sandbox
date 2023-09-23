use serde::{Deserialize, Serialize};
use serde_json::Value;
use valq::query_value;
use reqwest::get;

#[derive(Deserialize, Serialize, Debug)]
struct Point {
    x: i32,
    y: i32,
}

#[tokio::main]
async fn main() {
    // let point = Point { x: 1, y: 3 };
    //
    // // 構造体を文字列にシリアライズ
    // let to_s = serde_json::to_string(&point).unwrap();
    // println!("Serialized: {}", to_s);
    //
    // // 文字列を構造体にデシリアライズ
    // let p: Point = serde_json::from_str(&to_s).unwrap();
    //
    // println!("Deserialized:\nPoint.x: {}\nPoint.y: {}", p.x, p.y);
    //
    // // Value.get()を使って構造体無しで値を引っ張ってくる
    // let p: Value = serde_json::from_str(&to_s).unwrap();
    // println!("Point.x: {}", p.get("x").unwrap());

    // fetch_wether().await
    fetch_wether_valq().await
}

async fn fetch_json() -> String {
    let resp = get("https://www.jma.go.jp/bosai/forecast/data/forecast/016000.json")
        .await
        .unwrap()
        .text()
        .await
        .unwrap();

    return resp;
}

async fn fetch_wether() {
     let resp = fetch_json().await;

    let wether: Value = serde_json::from_str(&resp).unwrap();
    let today = wether.get(0).unwrap();
    let date: Vec<String> = ["今日　", "明日　", "明後日"].iter().map(|&s| s.to_string()).collect();

    let office = today.get("publishingOffice").unwrap().to_string();
    let series = today.get("timeSeries").unwrap();

    let ishikari = series.get(0)
        .and_then(|v| v.get("areas")).and_then(|v| v.get(0)).unwrap();

    let name = ishikari.get("area").and_then(|v| v.get("name")).unwrap();
    let weathers = ishikari.get("weathers").unwrap();

    println!("気象台名: {}", office.replace(r#"""#, ""));
    println!("地域: {}", name.to_string().replace(r#"""#, ""));

    for (weather, date) in weathers.as_array()
        .unwrap()
        .iter()
        .zip(date.iter()) {
            println!("{}| {}", date, weather.to_string().replace(r#"""#, ""))
        }
}

async fn fetch_wether_valq() {
    let resp = fetch_json().await;

    let date: Vec<String> = ["今日　", "明日　", "明後日"]
        .iter()
        .map(|&s| s.to_string())
        .collect();

    let wether: Value = serde_json::from_str(&resp).unwrap();
    let office = query_value!(wether[0].publishingOffice).unwrap();
    let today = query_value!(wether[0]).unwrap();

    let series = query_value!(today.timeSeries).unwrap();
    let ishikari = query_value!(series[0].areas[0]).unwrap();
    let name = query_value!(ishikari.area.name).unwrap();
    let weathers = query_value!(ishikari.weathers).unwrap();

    println!("気象台名: {}", office.to_string().replace(r#"""#, ""));
    println!("地域: {}", name.to_string().replace(r#"""#, ""));

    for (weather, date) in weathers.as_array()
        .unwrap()
        .iter()
        .zip(date.iter()) {
            println!("{}| {}", date, weather.to_string().replace(r#"""#, ""))
        }
}
