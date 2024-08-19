#lang racket

(require threading)
(require net/http-easy)

(define (parse-json data)
  (hash-ref data 'text))

(define (gen-url area-code)
  (let ([code (~a area-code #:min-width 6 #:align 'right #:left-pad-string "0")])
    (format "https://www.jma.go.jp/bosai/forecast/data/overview_forecast/~a.json" code)))

(define (fetch area-code)
  (let ([url (gen-url area-code)])

    (let ([json-data (~> url get response-json)])
      (~> json-data parse-json))))

(module+ main
  (let ([args (current-command-line-arguments)])
    (let ([arg (string->number (if (>= (vector-length args) 1) (vector-ref args 0) "130000"))])
      (if (or (<= arg 11000) (>= 474000))
        (~> arg fetch displayln)
        (displayln "Invalid argument. Require bigger than 11000 and smaller than 474000.")))))

(module+ test
 (require rackunit))

(module+ test
  (check-equal? (gen-url 11000) "https://www.jma.go.jp/bosai/forecast/data/overview_forecast/011000.json")

  (let ([data #hasheq((headlineText . "")
                      (publishingOffice . "気象庁")
                      (reportDatetime . "2024-08-19T16:38:00+09:00")
                      (targetArea . "東京都")
                      (text
                       .
                       "　関東甲信地方は高気圧に覆われていますが、湿った空気や上空の寒気の影響を受けています。\n\n　東京地方は、おおむね曇りとなっています。\n\n　１９日は、湿った空気や上空の寒気の影響を受ける見込みです。このため、曇りで、夜遅くは雨となり、雷を伴って非常に激しく降る所があるでしょう。伊豆諸島では雨や雷雨となる所がある見込みです。\n\n　２０日は、高気圧に緩やかに覆われますが、湿った空気や上空の寒気の影響を受ける見込みです。このため、曇りで、昼前から昼過ぎは晴れますが、雨や雷雨となる所があり、激しく降る所もあるでしょう。伊豆諸島では雨や雷雨となる所があり、激しく降る所もある見込みです。\n\n【関東甲信地方】\n　関東甲信地方は、曇りや晴れで、雷を伴い激しい雨の降っている所があります。\n\n　１９日は、湿った空気や上空の寒気の影響を受ける見込みです。このため、曇りや雨で、雷を伴い非常に激しく降る所があるでしょう。\n\n　２０日は、高気圧に緩やかに覆われますが、湿った空気や上空の寒気の影響を受ける見込みです。このため、曇りや晴れで、雷を伴い激しい雨の降る所があるでしょう。\n\n　関東地方と伊豆諸島の海上では、１９日から２０日にかけて、うねりを伴い波がやや高い見込みです。また、所々で霧が発生しています。船舶は視程障害に注意してください。"))])
    (check-equal? (hash-ref data 'text) (parse-json data))))
