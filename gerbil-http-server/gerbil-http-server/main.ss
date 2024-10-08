(import :std/sugar
        :std/net/httpd)

(export main)

(def (main . args)
     (run "127.0.0.1:8080"))

(def (run address)
  (let* ((mux (make-static-http-mux
               (hash ("/" root-handler))))
         (httpd (start-http-server! address mux: mux)))
    (thread-join! httpd)))

(def (default-handler req res)
  (http-response-write res 404 '(("Content-Type" . "text/plain"))
    "Not found"))

(def (root-handler req res)
  (http-response-write res 200 '(("Content-Type" . "text/plain"))
    (string-append "hello" "\n")))
