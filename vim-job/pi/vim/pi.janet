(import spork/json)

(defn pi [n])

(def register 
  @{"pi" (fn [self]
          (def n (self 0))

          (var pi 0)
          (var sign 1)

          (for i 0 n
            (+= pi (/ sign (+ 1 (* 2 i))))
            (-= sign))

          (* pi 4)) 
          

    "greet" (fn [self]
             (print (self 0)))})
         
    
   

(def input (:read stdin :line))

(print (eval-string input))

# (print ((get register "pi") [10000]))
# ((get register "greet") ["Janet"])

(print ((get register input) [100000]))
