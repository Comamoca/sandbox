#!/usr/bin/env gxi
;;; -*- Gerbil -*-
(import :std/build-script)

(defbuild-script
  '("nix-gerbil/lib"
    (exe: "nix-gerbil/main" bin: "nix-gerbil")))
