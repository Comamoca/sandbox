#include <stdio.h>
#include <string.h>
#include "lib/lib.h"

int main(int argc, char** argv[]) {
	// Call functin in other file.
	int result = add(1, 2);

	printf("1 + 2 = %d\n", result);
	printf("argc: %d\n", argc);

	// Connect string
	char buf[100];
	sprintf(buf, "%s %s", argv[1], argv[2]);
	printf("buf: %s\n", buf);
}
