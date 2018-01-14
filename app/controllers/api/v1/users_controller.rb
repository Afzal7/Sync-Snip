class Api::V1::UsersController < Api::V1::ApplicationController

	before_action :set_user

	def me
		render json: @user
	end

	def update
    if @user.update(user_params)
      render json: {
      	success: true,
      	data: @user,
      	message: 'User updated successfully!'
      }
    else
      render json: {
        success: false,
        message: @user.errors.full_messages.join(", ")
      }
    end
  end

  def snippets
  	render json: {
  		success: true,
  		data: @user.snippets
  	}
  end

  def add_snippet
  	if @user.snippets.create(name: params[:name], content: params[:content])
  		render json: {
  			success: true
  		}
  	else
  		render json: {
  			success: false
  		}
  	end
  end

	private

		def set_user
			@user = current_user || User.find_by_access_key(params[:access_key])
			unless @user
				render json: {
					success: false,
					message: 'Wrong Place buddy!'
				}
			end
		end

		def user_params
			params.require(:user).permit(:id, snippets_attributes: [:id, :name, :content, :_destroy])
		end

end