(ns clojure-hello.clojure-hello-test
  (:require [clojure.test :refer :all]
            [clojure-hello.clojure-hello :refer :all]))

((deftest fizzbuzz-match-1-test
      (testing "testing fizzbuzz-match"
        (is (= (clojure-hello.clojure-hello/fizzbuzz-match 1) "1")))) )

((deftest fizzbuzz-match-2-test
      (testing "testing fizzbuzz-match"
        (is (= (clojure-hello.clojure-hello/fizzbuzz-match 3) "Fizz")))) )

((deftest fizzbuzz-match-3-test
      (testing "testing fizzbuzz-match"
        (is (= (clojure-hello.clojure-hello/fizzbuzz-match 10) "Buzz")))) )

((deftest fizzbuzz-match-4-test
      (testing "testing fizzbuzz-match"
        (is (= (clojure-hello.clojure-hello/fizzbuzz-match 15) "FizzBuzz")))) )

((deftest fizzbuzz-test
      (testing "Context of the test assertions"
        (is (= (clojure-hello.clojure-hello/fizzbuzz 15) '("1" "2" "Fizz" "4" "Buzz" "Fizz" "7" "8" "Fizz" "Buzz" "11" "Fizz" "13" "14" "FizzBuzz"))))) )
