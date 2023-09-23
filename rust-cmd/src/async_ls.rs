use tokio::process::Command;

pub async fn async_ls() {
    let output = Command::new("ls")
        .args(&["-l", "-a"])
        .output()
        .await
        .expect("failed to start `ls`");

    println!("{}", String::from_utf8_lossy(&output.stdout));
}
