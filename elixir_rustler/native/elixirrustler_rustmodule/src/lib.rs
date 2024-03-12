use rustler::Atom;
use std::thread;
use std::{i64, time::Duration};

mod atoms {
    rustler::atoms! {
        ok,
        error
    }
}

#[rustler::nif]
fn add(a: i64, b: i64) -> i64 {
    a + b
}

#[rustler::nif]
fn multi_all(vec: Vec<i64>, a: i64) -> Vec<i64> {
    return vec.iter().map(|x| x * a).collect::<Vec<i64>>();
}

#[rustler::nif]
fn div(a: i64, b: i64) -> (Atom, i64) {
    let div_result = a.checked_div(b);

    return match div_result {
        Some(n) => (atoms::ok(), n),
        None => (atoms::error(), 0),
    }
}

#[rustler::nif]
fn reverse(string: String) -> String {
    return string.chars().rev().collect();
}

#[rustler::nif]
fn sleep_3s() -> Atom {
   thread::sleep(Duration::from_secs(3));

   return atoms::ok(); 
}

rustler::init!("Elixir.ElixirRustler.RustModule", [add, div, multi_all, reverse, sleep_3s]);
