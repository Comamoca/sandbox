package;

import fizzbuzz.FizzBuzz;

class Main {
	static function main() {
		var ints = [for (i in 0...31) i];

		for (n in ints.map(n -> FizzBuzz.fizzbuzz(n))) {
			Sys.println(n);
		}
	}
}
