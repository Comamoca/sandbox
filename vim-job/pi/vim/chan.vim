function s:start(cmd)
    let l:job = job_start(a:cmd, #{mode: "raw"})
    let l:chan = job_getchannel(l:job)

    return [l:job, l:chan]
endfunction

function s:close(job, chan)
    call job_stop(a:job)
    call ch_close(a:chan)

    return [job_status(a:job), ch_status(a:chan)]
endfunction

function s:janet_eval(chan, expr)
    const l:result = ch_evalraw(a:chan, a:expr)
    echo l:result
    return l:result
endfunction

function s:janet_call(chan, func, args)
    const l:stmt = join(["((get register ", a:func, ") ", a:args, ")"])
    echo l:stmt
    return s:janet_eval(a:chan, l:stmt)
    " s:janet_eval(a:chan, )
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

const s:cmd = join(["janet", "pi.janet"])

let [s:job, s:chan] = s:start(s:cmd)

const s:resp = ch_evalraw(s:chan, "(pi 10000)\n")

echo s:resp
echo s:janet_call(s:chan, "pi", "100000")

const [s:job_s, s:ch_s] = s:close(s:job, s:chan)

echo job_status(s:job)
echo ch_status(s:chan)
