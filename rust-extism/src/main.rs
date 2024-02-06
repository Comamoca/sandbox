use extism::*;


fn main() {
    let path = "./target/wasm32-unknown-unknown/release/extism_plugin.wasm";
    let wasm = std::fs::read(path).unwrap();
    let mut config = vec![
        ("m".to_string(), "4".to_string()),
        ("n".to_string(), "1".to_string())
    ].into_iter();

    let manifest = Manifest::new([Wasm::data(wasm)]);
    manifest.clone().with_config(&mut config);
    
    let mut plugin = Plugin::new(&manifest, [], true).unwrap();

    // let res = plugin.call::<&str, &str>("port_ack", "").unwrap();
    let res = plugin.call::<&str, &str>("greet", "Extism").unwrap();

    println!("{}", res);
}
