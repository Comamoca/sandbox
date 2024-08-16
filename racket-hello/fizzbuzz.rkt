#lang racket

(provide fizzbuzz-match fizzbuzz)

(define (fizzbuzz-match n)
    (case (modulo n 15)
      [(0) "FizzBuzz"]
      [(5 10) "Buzz"]
      [(3 6 9 12) "Fizz"]
      [else (number->string n)]))

(define (fizzbuzz last)
  (let ([nums (range 1 (+ last 1))])
    (map fizzbuzz-match nums)))
