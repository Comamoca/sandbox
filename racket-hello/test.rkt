#lang racket

(require "./fizzbuzz.rkt")

(module+ test
  (require rackunit))

(module+ test
  ;; fizzbuzz-match test
  (check-equal? (fizzbuzz-match 1) "1")
  (check-equal? (fizzbuzz-match 3) "Fizz")
  (check-equal? (fizzbuzz-match 5) "Buzz")
  (check-equal? (fizzbuzz-match 15) "FizzBuzz")

  ;; fizzbuzz test
  (check-equal? (fizzbuzz 15) '("1" "2" "Fizz" "4" "Buzz" "Fizz" "7" "8" "Fizz" "Buzz" "11" "Fizz" "13" "14" "FizzBuzz")))
