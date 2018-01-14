class WelcomeController < ApplicationController
	before_action :authenticate_user!, except: [:index]

	def index
		render layout: 'layout_without_container'
	end

	def home
	end
end
