class ApplicationController < ActionController::Base
	# before_action :authenticate_user!
  protect_from_forgery with: :exception
  layout 'bs_layout'

  protected
    def after_sign_in_path_for(resource)
      '/home'
    end
  
end
