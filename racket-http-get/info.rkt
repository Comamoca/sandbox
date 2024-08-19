#lang info
(define collection "racket-native")
(define deps '("base"
               "http-easy"
               "threading"))
(define build-deps '("scribble-lib" "racket-doc" "rackunit-lib"))
(define scribblings '(("scribblings/racket-native.scrbl" ())))
(define pkg-desc "Description Here")
(define version "0.0")
(define pkg-authors '(coma))
(define license '(Apache-2.0 OR MIT))
