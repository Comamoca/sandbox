use std::process::Command;

fn main() {
    let output = Command::new("ls")
        .args(&["-l", "-a"])
        .output()
        .expect("failed to start `ls`");

    println!("{}", String::from_utf8_lossy(&output.stdout));
}
