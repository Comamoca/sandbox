use std::char;
use async_std::fs::File;
use async_std::prelude::*;

use clap::Parser;

#[derive(Parser)]
#[clap(
    name = "emoji2svg",
    author = "Comamoca",
    version = "v0.1.0",
    about = "Convert emoji to svg"
    )]

struct AppArg {
    #[clap()]
    emoji: char,
    #[clap(short = 's', long = "save")]
    is_save: bool,
    #[clap(short = 'o')]
    save_path: Option<String>
}

#[tokio::main]
async fn main() {
    let arg: AppArg = AppArg::parse();
    let emoji = arg.emoji;
    let is_save = arg.is_save;
    let save_path = arg.save_path;

    let result = to_svg(emoji).await;
    let svg = result.unwrap();

    if is_save {
        let bytes_svg = &svg.as_bytes();
        let path = save_path.clone().unwrap_or(String::from(emoji));
        let formattd_path = format!("{}.svg", &path);

        let mut file = File::create(&formattd_path).await.unwrap();
        println!("save to {}...", &formattd_path);

        _ = file.write_all(&bytes_svg).await;
    } else {
        println!("{}", &svg);
    }

}

async fn to_svg(emoji: char) -> reqwest::Result<String> {
    let mut url = String::from("https://emoji2svg.deno.dev/api/");
    let emoji_str = emoji.to_string();
    url += &emoji_str;

    let body = reqwest::get(&url)
        .await?
        .text()
        .await?;

    Ok(body)
}
