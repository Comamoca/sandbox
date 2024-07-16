import utest.Runner;
import utest.Test;
import utest.Assert;
import utest.ui.Report;
import fizzbuzz.FizzBuzz;

class Main {
	public static function main() {
		var runner = new Runner();

		runner.addCase(new TestCases());

		Report.create(runner);
		runner.run();
	}
}

class TestCases extends Test {
	public function spec() {
		Assert.equals(FizzBuzz.fizzbuzz(1), "1");
		Assert.equals(FizzBuzz.fizzbuzz(3), "Fizz");
		Assert.equals(FizzBuzz.fizzbuzz(5), "Buzz");
		Assert.equals(FizzBuzz.fizzbuzz(9), "Fizz");
		Assert.equals(FizzBuzz.fizzbuzz(10), "Buzz");
		Assert.equals(FizzBuzz.fizzbuzz(15), "FizzBuzz");
	}
}
