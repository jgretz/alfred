require 'httparty'

class Dvr
	def initialize
		@address  = "192.168.11.109"
	end

	def make_call(method)
		address = "http://#{@address}:8080/#{method}"

		response = HTTParty.get(address)

		puts response.code, response.body, response.message
	end
end