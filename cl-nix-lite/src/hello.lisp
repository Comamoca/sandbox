(uiop:define-package :hello/hello
  (:nicknames :hello/hello)
  (:use :cl :arrow-macros :hello/sub)
  (:shadow)
  (:import-from :alexandria :proper-list-p)
  (:export :main))

(in-package :hello/hello)

(defun main (&rest args)
  (->> '(1 2 3)
       proper-list-p
       (format T "Hello from flakes: ~A~%")))
