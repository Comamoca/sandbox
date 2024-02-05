use romaji_kana_cvt_rust::cvt::RomajiCvt;

use mlua::Lua;

fn main() {
    let input = "kokodehakinomowonuidekudasai";
    let converter = RomajiCvt::new();

    let _kana = converter.from_romaji(input.to_string()).unwrap();

    let lua = Lua::new();

    let joined = lua
        .load(r#"table.concat({"a", "b", "c"}, "")"#)
        .eval::<String>()
        .unwrap();

    println!("{}", joined);
}
