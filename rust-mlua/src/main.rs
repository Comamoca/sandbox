use mlua::Lua;
use romaji_kana_cvt_rust::cvt::RomajiCvt;
use std::collections::HashMap;

fn main() {
    let input = "kokodehakinomowonuidekudasai";
    let converter = RomajiCvt::new();

    let kana = converter.from_romaji(input.to_string()).unwrap();

    let lua = Lua::new();

    lua.globals().set("kana", kana).unwrap();

    let joined = lua
        .load(
            r#"
            kana
            "#,
        )
        .eval::<String>()
        .unwrap();

    println!("{}", joined);
}

fn create_dict() -> HashMap<&'static str, &'static str> {
    let mut dict = HashMap::new();

    dict.insert("きもの", "着物");
    dict.insert("はきもの", "履物");
    dict.insert("ぬいで", "脱いで");
    dict.insert("ぬぐ", "脱ぐ");

    return dict;
}
