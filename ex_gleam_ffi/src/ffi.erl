-module(ffi).
-export([now/0]).

now() ->
  erlang:time().
