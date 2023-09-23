use notify::{Config, PollWatcher, RecommendedWatcher, RecursiveMode, Watcher, WatcherKind};
use std::path::Path;
use std::sync::mpsc::channel;
use std::time::Duration;

fn main() {
    let (tx, rx) = channel();

    let mut watcher: Box<dyn Watcher> = if RecommendedWatcher::kind() == WatcherKind::PollWatcher {
        let config = Config::default().with_poll_interval(Duration::from_secs(1));
        Box::new(PollWatcher::new(tx, config).unwrap())
    } else {
        Box::new(RecommendedWatcher::new(tx, Config::default()).unwrap())
    };

    watcher
        .watch(Path::new("."), RecursiveMode::Recursive)
        .unwrap();

    for e in rx {
        let event = e.unwrap();
        let path = event.paths[0].to_string_lossy();
        let kind = event.kind;
        let kind_name: &str;

        match kind {
            notify::EventKind::Any => kind_name = "Any",
            notify::EventKind::Access(_) => {
                kind_name = "Access";
            }
            notify::EventKind::Create(_) => {
                kind_name = "Create";
            }
            notify::EventKind::Modify(_) => {
                kind_name = "Modify";
            }
            notify::EventKind::Remove(_) => {
                kind_name = "Remove";
            }
            notify::EventKind::Other => {
                kind_name = "Other";
            }
        }

        println!("Kind: {}\nPath: {}", kind_name, path);
    }
}
