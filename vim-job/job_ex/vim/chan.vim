const s:url = "localhost:8000"
const s:mode = "json"

function s:start(cmd)
    let l:job = job_start(a:cmd, #{mode: "json"})
    let l:chan = job_getchannel(l:job)

    return [l:job, l:chan]
endfunction

function s:stop(job)
endfunction

function! s:callback(ch, msg)
    echo "callback"
    echo a:msg
endfunction

function! s:handler(ch, msg)
    echom "handler"
    echom a:ch a:msg

    echom a:msg.server + 1

    call ch_close(s:job)
endfunction

const s:cmd = join(["deno", "run", "-A", "std_stream.ts"])

" let s:job = job_start(s:cmd, #{mode: "json"})
" let s:chan = job_getchannel(s:job)

let [s:job, s:chan] = s:start(s:cmd)

call ch_sendexpr(s:chan, #{vim: "Hello"}, {'callback': 's:handler'})
