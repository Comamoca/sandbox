use extism_pdk::*;

#[plugin_fn]
pub fn greet(name: String) -> FnResult<String> {
    return Ok(format!("Hello {}!", name)) 
}


#[plugin_fn]
pub fn port_ack(msg: String) -> FnResult<i32> {
    println!("{}", msg);

    let m = config::get("m").unwrap();
    let n = config::get("n").unwrap();

    let result = if let (Some(m_string), Some(n_string)) = (m, n) {
        println!("m:{} n:{}", m_string, n_string);

        let m: i32 = m_string.parse().unwrap();
        let n: i32 = n_string.parse().unwrap();

        ackermann(m, n)
    } else {
        -1
    };

    return Ok(result)
}


fn ackermann(m: i32, n: i32) -> i32  {
    if m == 0 {
        return n + 1;
    } else if n == 0 {
        return ackermann(m - 1, 1);
    } else {
        return ackermann(m - 1, ackermann(m, n - 1));
    }
}
