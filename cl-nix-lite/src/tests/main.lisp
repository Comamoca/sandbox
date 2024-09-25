(defpackage #:hello/tests/main
  (:use :cl
        :rove
        :hello/sub)
  (:shadowing-import-from #:rove
                          #:*debug-on-error*))
(in-package #:hello/tests/main)

(deftest example-test
  (ok (= 1 1)))

(deftest sub-add-test
  (ok (= 2 (add 1 1))))
