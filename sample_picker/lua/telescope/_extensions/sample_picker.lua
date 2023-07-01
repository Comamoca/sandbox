local pickers = require("telescope.pickers")
local finders = require("telescope.finders")
local conf = require("telescope.config").values

-- our picker function: colors
local sample_picker = function(opts)
	opts = opts or {}
	pickers
		.new(opts, {
			prompt_title = "colors",
			finder = finders.new_table({
				results = { "red", "green", "blue" },
			}),
			sorter = conf.generic_sorter(opts),
		})
		:find()
end

return require("telescope").register_extension({
	setup = function()
		-- access extension config and user config
	end,
	exports = {
		sample_picker = sample_picker,
	},
})
