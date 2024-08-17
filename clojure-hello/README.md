# clojure-hello

A fizzbuzz example program in Clojure.
This project created by Clojure CLI, and create single binary with [clj.native-image](https://github.com/taylorwood/clj.native-image).


## Usage

```sh
clojure -X:run-m          # default argument is 25.
clojure -X:run-m :arg 10  # You can specify argument. 
clojure -A:native-image   # Create native-image can running at single binary.
clojure -A:test           # Run test
```

## Modules

- [clj.native-image](https://github.com/taylorwood/clj.native-image)
- [kaocha](https://github.com/lambdaisland/kaocha)
