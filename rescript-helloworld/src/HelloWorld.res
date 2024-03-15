let fizzbuzz = (n) => {
	switch n {
		| n when mod(n, 15) == 0 => "FizzBuzz"
		| n when mod(n, 3) == 0 => "Fizz"
		| n when mod(n, 5) == 0 => "Buzz"
		| _ => Belt.Int.toString(n)
	}
}

Belt.Array.range(0, 30)
-> Belt.Array.map((n) => fizzbuzz(n))
-> Belt.Array.joinWith("\n", (s) => s)
-> Console.log

