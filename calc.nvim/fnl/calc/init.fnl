(fn calc [opts]
(let [
      args (vim.split opts.args " ")
      a (. args 1)
      expr (. args 2)
      b (. args 3)
	   ]
  (print (if (= expr "+")
        (+ a b)
      (= expr "-")
        (- a b)
      (= expr "*")
        (* a b)
      (= expr "/")
        (/ a b)
      )
  ))
)

(fn setup []
  (let [opt {}] opt
    (tset opt "nargs" 1)
    opt

    (vim.api.nvim_create_user_command "Calc" calc opt)
    ":ok"
  )
)


(let [M {}]
  (tset M "setup" setup)
  (tset M "calc" calc)
  M
)
