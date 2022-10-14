package main

import (
	"fmt"
	"strings"
)

func BashRule(line []string) string {
	// Bashの置き換えルール関数
	// 文字列の探索を行い、変換後の文字列を返す関数
	// 引数lineには一行分の空白区切りの文字列が与えられる
	// 例: ["ehco", ""\Hello!!"\"]
	switch line[0] {

	case "echo":
		result := fmt.Sprintf("console.log(%s)", splitBracket(strings.Join(line, ""))[1])
		fmt.Println("Result: ", result)
		return result
	}

	return ""
}

func consoleLog(text string) string {
	// echoをconsole.log()に変換する関数
	return fmt.Sprintf("console.log(%s)", text)
}

func pyPrint(text string) string {
	// echoをprint()に置き換える関数
	// return fmt.Sprintf("print(%s)", text)
	return fmt.Sprintf("print(%s)", text)
}

func PyRule(line []string) string {
	// Pythonの置き換えルール関数
	switch line[0] {
	case "def":
		/*
		   def myfunc(text: str):
		   retunr text

		   def myfunc text :
		*/

		words := splitBracket(line[1])
		fmt.Println(words)

		result := fmt.Sprintf(`function %s(%s) {`, words[0], words[1])

		return result

	case "return":
		ret := strings.Join(line[1:], "")
		fmt.Println("return", ret)
		result := fmt.Sprintf("return %s\n}", ret)
		return result
	}

	return ""
}
