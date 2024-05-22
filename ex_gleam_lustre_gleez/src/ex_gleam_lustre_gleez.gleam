import components/ui/button.{button}
import gleam/int
import lustre
import lustre/attribute.{class}
import lustre/element.{text}
import lustre/element/html.{div, p}
import lustre/event.{on_click}

pub fn main() {
  let app = lustre.simple(init, update, view)
  let assert Ok(_) = lustre.start(app, "#app", Nil)

  Nil
}

fn init(_flags) {
  0
}

type Msg {
  Incr
  Decr
}

fn update(model, msg) {
  case msg {
    Incr -> model + 1
    Decr -> model - 1
  }
}

fn view(model) {
  let count = int.to_string(model)

  div([class("flex justify-center my-auto items-center w-full h-screen")], [
    card([
      button(
        [
          class("mx-2"),
          button.flat(button.Neutral),
          button.md(),
          on_click(Incr),
        ],
        [text("+")],
      ),
      p([class("text-xl mx-2")], [text(count)]),
      button(
        [
          class("mx-2"),
          button.flat(button.Neutral),
          button.md(),
          on_click(Decr),
        ],
        [text("-")],
      ),
    ]),
  ])
}

fn card(element) {
  div(
    [class("flex shadow-lg items-center p-14 rounded-md bg-primary/20")],
    element,
  )
}
