#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char* greet(char* name) {
    char* result = malloc(strlen(name) + 5);
    sprintf(result, "Hi! %s!", name);
    return result;
}
