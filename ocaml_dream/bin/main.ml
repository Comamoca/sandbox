let successful = ref 0
let failed = ref 0

let counter inner_handler request =
        try%lwt
          let%lwt responce = inner_handler request in
          successful := !successful + 1;
          Lwt.return responce
        with exn ->
          failed := !failed + 1;
          raise exn

let () =
        Dream.run
        @@ Dream.logger
        @@ counter
        @@ Dream.router [
                Dream.get "/" 
                (fun _ ->
                        Dream.html (Printf.sprintf  "count: %i" !successful));

                Dream.get "/echo/:word"
                (fun request ->
                        Dream.html (Dream.param request "word"))

       ]
