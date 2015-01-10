require "require_all"
require_all "../directv"

dvr = Dvr.new
dvr.make_call "info/getVersion"