function! s:callback(ch, msg)
    let s:wether = json_decode(a:msg)
    let s:end = line("$")
    call append(s:end, '')

    call append(s:end + 1, '" 実行結果')
    call append(s:end + 2, join(['"', s:wether[0].timeSeries[0].areas[0].weathers]))
endfunction

const s:url = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json"

const s:cmd = join(["curl -s", s:url])
echom s:cmd

let s:job = job_start(s:cmd,  { "callback" : "s:callback"})

" 実行結果
" ['晴れ', '晴れ', '晴れ　時々　くもり']
