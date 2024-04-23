package main

import "core:fmt"
import "core:mem"

main :: proc() {
	fmt.println("Hi! This is example program in Odin!")
	fmt.println("If you want to try sample program, please comment out program at main function!")

	// array()
	// swizzle_operation()
	// dyn_array()
	// fizzbuzz()
	// structure()
	// maps()
	// defer_block()
	// maybe()
	// normal_error()
}

array :: proc() {
	x := [?]int{1, 2, 3, 4, 5}

	fmt.println(x) // out: [1, 2, 3, 4, 5]

	// Mult 2 to all items.
	fmt.println(x * 2) // out: [2, 4, 6, 8, 10]	

	// Slices
	fmt.println(x[2:4]) // [3, 4]

	// Short hand
	fmt.println(x[:3]) // [1, 2, 3]
	fmt.println(x[3:]) // [4, 5]
}

swizzle_operation :: proc() {
	a := [?]int{10, 20, 30}

	b := swizzle(a, 2, 1, 0) // Swap item to specifes index.

	fmt.println(a) // [10, 20, 30] 
	fmt.println(b) // [30, 20, 10]
}

dyn_array :: proc() {
	// Generate dynamic array initialized 0
	a := make([dynamic]int, 0, 16)
	defer delete(a)

	fmt.println(a)
}

fizzbuzz :: proc(times: int) {
	// FizzBuzz function
	for n in 1..=times {
		switch {
		case n % 15 == 0:
			fmt.println("FizzBuzz")
		case n % 3 == 0:
			fmt.println("Fizz")
		case n % 5 == 0:
			fmt.println("Buzz")
		case:
			fmt.println(n)
		}
	}
}

structure :: proc() {
	Person :: struct {
	name: string,
	age: int,
	}

	p := Person{"jon", 15}
	fmt.println(p) // Person{name = "jon", age = 15}

	fmt.println(p.name) // jon
	fmt.println(p.age)  // 15
}

maps :: proc() {
	m := make(map[string]int)
	defer delete(m)

	m["Bob"] = 2
	fmt.println(m["Bob"]) // 2

	color := map[string]f64{
		"R" = 1,
		"G" = 0,
		"B" = 0.5,
	}

	fmt.println(color) // map[G=0, R=1, B=0.5]

	fmt.println(color["R"]) // 1
	fmt.println(color["B"]) // 0.5
}

defer_block :: proc() {
	defer {
		fmt.println("Defer")
	}

	fmt.println("First")
}

maybe :: proc() {
	safe_div :: proc(a: int, b: int) -> Maybe(int) {
		if a == 0 || b == 0 do return nil
		return a / b
	}

	// 9 / 3 => 3
	if num, ok := safe_div(9, 3).?; ok == true {
		fmt.println(num)
	} else {
		fmt.println("Got error.")
	}

	// 1 / 0 => Got error.
	if num, ok := safe_div(1, 0).?; ok == true {
		fmt.println(num)
	} else {
		fmt.println("Got error.")
	}
}

normal_error :: proc() {
	safe_div :: proc(a: int, b: int) -> int {
		if a == 0 || b == 0 do return -1
		return a / b
	}

	// 9 / 3 => 3
	if num := safe_div(9, 3); num != -1 {
		fmt.println(num)
	} else {
		fmt.println("Got error.")
	}

	// 1 / 0 => Got error.
	if num := safe_div(1, 0); num != -1 {
		fmt.println(num)
	} else {
		fmt.println("Got error.")
	}
}
