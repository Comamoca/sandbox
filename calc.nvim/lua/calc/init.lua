-- [nfnl] Compiled from fnl/calc/init.fnl by https://github.com/Olical/nfnl, do not edit.
local function calc(opts)
  local args = vim.split(opts.args, " ")
  local a = args[1]
  local expr = args[2]
  local b = args[3]
  local function _1_()
    if (expr == "+") then
      return (a + b)
    elseif (expr == "-") then
      return (a - b)
    elseif (expr == "*") then
      return (a * b)
    elseif (expr == "/") then
      return (a / b)
    else
      return nil
    end
  end
  return print(_1_())
end
local function setup()
  local opt = {}
  opt["nargs"] = 1
  vim.api.nvim_create_user_command("Calc", calc, opt)
  return ":ok"
end
local M = {}
M["setup"] = setup
return M
