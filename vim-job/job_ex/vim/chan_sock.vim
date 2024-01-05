let s:chan = ch_open(s:url, #{callback: 's:callback', mode: "json"})
let s:job = job_start(s:cmd, #{callback: "s:job_start_handler", mode: "json"})

let s:chan = job_getchannel(s:job)

echom ch_status(s:chan)

call ch_sendexpr(s:chan, #{vim: "Hello"}, {'callback': 's:handler'})

call job_stop(s:job)
