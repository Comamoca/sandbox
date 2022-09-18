include karax/prelude

proc createDom(): VNode =
  return buildHtml(tdiv):
    section(class = "section"):
      tdiv(class = "container"):
        h1(class = "title"):
          text "Hello World"
          h1(class = "title"):
            p(class = "subtitle"):
              text "My first website with"
            strong:
              text "Bulma"
            strong:
              text "!"

setRenderer createDom
