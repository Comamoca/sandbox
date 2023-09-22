use reqwest::get;

#[tokio::main]
async fn main() {
    let resp = get("https://www.rust-lang.org/ja")
        .await
        .unwrap()
        .text()
        .await
        .unwrap();

    println!("{}", resp);
}
