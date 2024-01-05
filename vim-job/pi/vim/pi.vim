function s:leibniz_formula(n)
  let l:pi_approx = 0
  let l:sign = 1.0

  for i in map(range(1, a:n, 1), 'v:val')
    let l:pi_approx += l:sign / (2 * i + 1)
    let sign = -l:sign
  endfor

  let l:pi_approx *= 4

  return l:pi_approx
endfunction

" 3.140592653839794(Deno)
echo s:leibniz_formula(1000)
