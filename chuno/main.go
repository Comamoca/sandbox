package main

import (
	"fmt"
	"log"

	"github.com/Comamoca/chuno"
)

func main() {
	html, err := chuno.Build("./test.md")
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(string(html))
}
