(uiop:define-package #:hello
  (:nicknames #:hello/main)
  (:use #:cl #:arrow-macros)
  (:import-from #:alexandria #:proper-list-p)
  (:export #:main))

(in-package #:hello/main)

(defun main (&rest args)
  (->> '(1 2 3)
       proper-list-p
       (format T "Hello from flakes: ~A~%")))
