(ns clojure-hello.clojure-hello
  (:require [clojure.string :as string])
  (:gen-class))

(defn fizzbuzz-match [num]
  (case (mod num 15)
      (0) "FizzBuzz"
      (5 10) "Buzz"
      (3 6 9 12) "Fizz"
      (str num)))
  

(defn fizzbuzz [length]
  (let [last (+ length 1)]
    (map fizzbuzz-match (vec (range 1 last)))))
   
(defn fizzbuzz-string [length]
  (-> length (fizzbuzz) (#(string/join "\n" %)))) 

(defn main-m [args]
  (let [num (get args :arg)]
    (println (fizzbuzz-string num))))
  

(defn -main [& args]
  (let [arg (first args)]
    (if (not= arg nil)
      (try
        (let [num (Integer/parseInt arg)]
          (if (>= num 1)
            (fizzbuzz-string num)
            (throw (Exception. "Number is not bigger than 1."))))
        (catch NumberFormatException _
          (println "Please specify number."))
        (catch Exception _
          (println "Please specify one number bigger than 1.")))
      (println "Please specify one argument."))))
