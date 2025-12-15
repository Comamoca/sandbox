if exists('g:loaded_hono_vim_plugin')
  finish
endif
let g:loaded_hono_vim_plugin = 1

augroup hono-vim-plugin
  autocmd!
  autocmd User DenopsPluginPost:hono-vim-plugin call denops#notify('hono-vim-plugin', 'init', [])
augroup END
