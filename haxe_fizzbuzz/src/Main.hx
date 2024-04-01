import Std;
import Sys;

class Main {
  static function main() {
    for (n in 0...30) Sys.println(fizzbuzz(n));

  }

   static function fizzbuzz(n: Int): String {
	   return switch (n % 15) {
	 	  case 0: "FizzBuzz";
	 	  case 3, 6, 9, 12: "Fizz";
	 	  case 5, 10: "Buzz";
	 	  default: Std.string(n);
	   }
   }
}
