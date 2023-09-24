use rand::seq::SliceRandom;
use uuid::Uuid;

fn main() {
    let idol_list: Vec<String> = vec![
        "橘ありす",
        "櫻井桃華",
        "赤城みりあ",
        "的場梨沙",
        "結城晴",
        "佐々木千枝",
        "龍崎薫",
        "市原仁奈",
        "古賀小春",
    ]
    .iter()
    .map(|item| item.to_string())
    .collect();

    // idを生成
    let id = Uuid::new_v4();

    let key = id.to_string();
    let val = choice(idol_list);

    let db = sled::open("db").unwrap();

    // 値の設定
    set(&db, &key, &val);

    // 値の取得
    let result = get(&db, &key);
    println!("Key: {}\nValue: {}", key, result.to_string());

    // 値の削除
    // remove(&db, &key);

    println!("--------- show_all ---------");

    show_all(&db);
}

fn choice(idol_list: Vec<String>) -> String {
    let item = idol_list.choose(&mut rand::thread_rng()).unwrap();
    return item.to_owned();
}

fn set(db: &sled::Db, key: &str, value: &str) {
    db.insert(key.as_bytes(), value.as_bytes()).unwrap();
}

fn get(db: &sled::Db, key: &str) -> String {
    let result = db.get(key).unwrap();
    let ivec = result.unwrap();

    return String::from_utf8(ivec.to_vec()).unwrap();
}

fn remove(db: &sled::Db, key: &str) {
    db.remove(key).unwrap();
}

fn show_all(db: &sled::Db) {
    db.iter().for_each(|v| {
        let (key, value) = v.unwrap();

        let key_str = String::from_utf8(key.to_vec()).unwrap();
        let value_str = String::from_utf8(value.to_vec()).unwrap();

        println!("Key: {}\nValue: {}", key_str, value_str);
    });
}
