;;; -*- Gerbil -*-
(import :std/error
        :std/sugar
        :std/cli/getopt
        ./lib)
(export main)

;; build manifest; generated during the build
;; defines version-manifest which you can use for exact versioning
(include "../manifest.ss")

(def (main . args)
  (call-with-getopt nix-gerbil-main args
    program: "nix-gerbil"
    help: "A one line description of your program"
    ;; commands/options/flags for your program; see :std/cli/getopt
    ;; ...
    ))

(def* nix-gerbil-main
  ((opt)
   (nix-gerbil-main/options opt))
  ((cmd opt)
   (nix-gerbil-main/command cmd opt)))

;;; Implement this if your CLI doesn't have commands
(def (nix-gerbil-main/options opt)
  (error "Implement me!"))

;;; Implement this if your CLI has commands
(def (nix-gerbil-main/command cmd opt)
  (error "Implement me!"))
