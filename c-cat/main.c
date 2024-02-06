#include <stdio.h>

int show(const char * restrict path);


int main(int argc, char** argv[]) {
	for (int i = 1; i < argc; i++) {
		show((const char * restrict)argv[i]);
	}
}

int show(const char * restrict path) {
	FILE * fp = NULL;
	char line[128];

	fp = fopen(path, "r");

	while (fgets(line, 128, fp) != NULL) {
		printf("%s", line);
	}

	fclose(fp);
}
