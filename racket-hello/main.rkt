#lang racket

(module+ main
  (require racket/cmdline)
  (require "./fizzbuzz.rkt")

  (command-line
    #:program "fizzbuzz"
    #:args (num)

    (let ([result (fizzbuzz (string->number num))])
      (displayln (string-join result "\n")))))
