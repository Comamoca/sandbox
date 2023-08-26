open Unix

open Lwt
open Cohttp
open Cohttp_lwt_unix

let body =
  Client.get (Uri.of_string "http://localhost:8000/api/Comamoca/articles") >>= fun (resp, body) ->
  let code = resp |> Response.status |> Code.code_of_status in
  Printf.printf "Response code: %d\n" code;
  (* Printf.printf "Headers: %s\n" (resp |> Response.headers |> Header.to_string); *)
  body |> Cohttp_lwt.Body.to_string >|= fun body ->
  Printf.printf "%d\n" (String.length body);
  body

let req () =
  let body = Lwt_main.run body in
  print_endline ("Received body\n" ^ body)

let rec sleep_loop () =
  sleep 1;
  print_endline "----------------------------------------------------------------";
  req ();
  sleep_loop ()

let () =
  sleep_loop ()
