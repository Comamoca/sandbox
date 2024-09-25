(uiop:define-package #:hello/sub
  (:use #:cl)
  (:export #:add))
(in-package #:hello/sub)

(defun add (a b)
  (+ a b))
