package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"log"
	"os"
	// "reflect"
	"strings"
	// "github.com/tidwall/gjson"
)

type Tokens struct {
	token []Token
}

type Token struct {
	token []string
}

type Lexer struct {
	Tokens struct {
		Token [][]string `json:"token"`
	} `json:"tokens"`
}

var tokens Lexer

func main() {
	filePath := "./sample/test.py"
	outPath := "out.js"

	data, err := os.Open(filePath)
	if err != nil {
		log.Fatal(err)
	}

	defer data.Close()
	scanner := bufio.NewScanner(data)

	var tmp []string
	for scanner.Scan() {
		tmp = append(tmp, tokenize(scanner.Text())...)
		// fmt.Println("tmp", tmp)
		tokens.Tokens.Token = append(tokens.Tokens.Token, tmp)
		tmp = nil
	}

	// fmt.Printf("main: %v\n", tokens)

	fmt.Println("Lexs: ", convert(tokens))

	saveFile(outPath, transpile(convert(tokens)))
}

func tokenize(line string) []string {
	words := strings.Fields(line)
	// token := Token{token: words}
	// fmt.Printf("tokenize: %v\n", token)
	return words
}

func convert(lex Lexer) string {
	jsonStr, err := json.Marshal(lex)
	if err != err {
		log.Fatal(err)
	}
	// fmt.Printf("tokens: %v\n", tokens)

	return string(jsonStr)
}

func transpile(jsn string) string {
	fmt.Println("Tokenized Json: ", jsn)
	token := loadJson(jsn)

	// Tokens.Token[0][0] [行番号][左からの単語数]
	var results []string

	fmt.Println("Target token: ", token.Tokens.Token)

	for _, line := range token.Tokens.Token {
		fmt.Printf("%v\n", line)
		results = append(results, PyRule(line))
	}
	return strings.Join(results, "\n")
}

func loadJson(jsn string) Lexer {
	var lex Lexer

	if err := json.Unmarshal([]byte(jsn), &lex); err != nil {
		log.Fatal(err)
	}

	return lex
}
