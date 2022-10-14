package main

import (
	"fmt"
	"os"
	"strings"
)

func saveFile(fileName string, text string) error {
	file, err := os.Create(fileName)
	if err != nil {
		return err
	}
	defer file.Close()

	file.WriteString(text)
	return nil
}

func splitBracket(text string) []string {
	flagBr := false
	var result []string
	var bracketStart int
	var bracketEnd int

	textList := strings.Split(text, "")

	for idx, c := range textList {
		if c == "(" {
			bracketStart = idx + 1
			flagBr = true
			// (の前の文字列を格納
			result = append(result, strings.Join(textList[:idx], ""))
			continue
		}

		if flagBr == true && c == ")" {

			bracketEnd = idx + 1
			flagBr = false
			// カッコの中の文字列を追加
			result = append(result, strings.Join(textList[bracketStart:idx], ""))
		}

		// if flagBr == true {
		//   result = append(result, c)
		// }

	}
	fmt.Println(bracketStart)
	fmt.Println(bracketEnd)
	result = append(result, strings.Join(textList[bracketEnd:], ""))

	fmt.Println(result)
	return result
}
