use std::*;

fn main() {
    let times = 3;

    println!(" === not_parallel ===");
    bench(Box::new(parallel), times);

    println!(" === parallel ===");
    bench(Box::new(not_parallel), times);
}

fn parallel(times: i64) {
    for n in 0..times {
        println!("[ OK ] {}", hevy_process(format!("job_{n}")).unwrap());
    }
}

fn not_parallel(times: i64) { 
    let mut handle_list: Vec<thread::JoinHandle<()>> = vec![];

    for n in 0..times {
        handle_list.push(thread::spawn(move || { println!("[ OK ] {}", hevy_process(format!("job_{n}")).unwrap()); }));
    }

    for handle in handle_list {
        let _ = handle.join(); 
    }
}

fn bench(func: Box<dyn Fn(i64)>, times: i64) {
    let before = time::Instant::now();
    func(times);
    let after = before.elapsed();

    println!("Times: {} ms", after.as_millis());
}

fn hevy_process(job_name: String) -> Result<String, String> {
    thread::sleep(time::Duration::from_secs(3));
    return Ok(job_name.to_string());
}
