#include <stdio.h>
#include <string.h>
#include "lib.h"

int main(int argc, char** argv[]) {
	// Call functin in other file.
	int result = add(1, 2);
	printf("result: %i\n", result);
	printf("argc: %i\n", argc);

	// Connect string
	char buf[100];
	sprintf(buf, "%s %s", argv[1], argv[2]);
	printf("buf: %s\n", buf);
}
