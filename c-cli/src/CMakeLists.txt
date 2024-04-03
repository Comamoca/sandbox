cmake_minimum_required(VERSION 3.28)
project(c-cli C)

set(LIB_INCLUDE_DIRS lib)

cmake_path(APPEND LIB_INCLUDE_FILE "${LIB_INCLUDE_DIRS}" "lib.c") 

add_library(lib STATIC ${LIB_INCLUDE_FILE})

target_include_directories(lib
  PUBLIC ${LIB_INCLUDE_DIRS}
)

add_executable(c-cli main.c)
