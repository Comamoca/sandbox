(defsystem "hello"
  :class :package-inferred-system
  :author "Comamoca"
  :depends-on("hello/hello")
  :pathname "src"
  :build-operation "program-op"
  :build-pathname "hello"
  :entry-point "hello/hello:main"
  :in-order-to ((test-op (test-op "hello/tests"))))

(defsystem "hello/tests"
  :author "Comamoca"
  :depends-on ("hello/tests/main"
               "hello"
               "rove")
  :class :package-inferred-system
  :perform (test-op (op c) (symbol-call :rove :run c)))
