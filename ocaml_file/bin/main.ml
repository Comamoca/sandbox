let add a b =
        a + b

(* let mkdir path = *)
(*         Unix.mkdir path 0o755 *)

let () =
        (* print_endline (Unix.getcwd());; *)

        (* print_endline (string_of_int (add 1 1)); *)
        print_endline (string_of_int (add 1 1));
        print_endline (string_of_bool (Sys.file_exists "tmp"))
        (* mkdir "tmp"; *)
