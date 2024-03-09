import gleam/io
import gleam/httpc
import gleam/http/request
import gleam/dynamic
import gleam/result
import gleam/string
import gleam/list
import gleam/pair
import gleam/uri

pub type HeadlineItem {
  Headline(title: String, url: List(uri.Uri))
}

@external(erlang, "Elixir.Kernel", "elem")
pub fn elem(tup: dynamic.Dynamic, index: Int) -> dynamic.Dynamic

@external(erlang, "Elixir.Floki", "parse_document")
fn floki_parse_document(html: String) -> dynamic.Dynamic

@external(erlang, "Elixir.Floki", "find")
fn floki_find(html: dynamic.Dynamic, query: String) -> dynamic.Dynamic

@external(erlang, "Elixir.Floki", "attribute")
fn floki_attribute(html: dynamic.Dynamic, attribute: String) -> dynamic.Dynamic

@external(erlang, "Elixir.Floki", "text")
fn floki_text(html: dynamic.Dynamic) -> dynamic.Dynamic

pub fn get_html(url: String) -> dynamic.Dynamic {
  // pub fn main() {

  let assert Ok(request) = request.to(url)
  let assert Ok(resp) = httpc.send(request)
  let doc = resp.body

  let html = floki_parse_document(doc)

  html
}

pub fn ok(result_tuple: dynamic.Dynamic) -> dynamic.Dynamic {
  result_tuple
  |> elem(1)
}

pub fn get_hn_headline() {
  let url = "https://news.ycombinator.com"
  get_html(url)
  |> ok()
  |> floki_find(".athing")
  |> floki_find(".titleline")
  |> dynamic.list(of: dynamic.dynamic)
  |> result.unwrap([])
  |> list.map(fn(item) {
    floki_find(item, "a")
    |> dynamic.list(of: dynamic.dynamic)
    |> result.unwrap([])
    |> list.first()
    |> result.unwrap(dynamic.from([]))
  })
  |> list.map(fn(item) {
    item
    let url =
      floki_attribute(item, "href")
      |> dynamic.list(of: dynamic.string)
      // |> pair.first()
      |> result.unwrap(["Can't get url."])

    let title =
      floki_text(item)
      |> dynamic.string()
      |> result.unwrap("Can't get title.")

    #(title, url)
  })
  |> list.map(fn(item) {
    let url =
      pair.second(item)
      |> list.map(fn(item) { uri.parse(item) })
      |> list.filter_map(fn(item) { item })

    Headline(title: pair.first(item), url: url)
  })
}

pub fn main() {
  get_hn_headline()
  |> list.each(fn(headline) {
    let url_string_list = list.map(headline.url, fn(uri) { uri.to_string(uri) })

    io.println(string.join(
      ["Title: ", headline.title, "\nUrl: ", string.join(url_string_list, ", ")],
      "",
    ))
  })
}
