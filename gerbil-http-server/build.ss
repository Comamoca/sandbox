#!/usr/bin/env gxi
;;; -*- Gerbil -*-
(import :std/build-script)

(defbuild-script
  '("gerbil-http-server/lib"
    (exe: "gerbil-http-server/main" bin: "gerbil-http-server")))
