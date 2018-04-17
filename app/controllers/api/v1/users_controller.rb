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

  def sync_snippets
    snippets_already_present = JSON.parse(params[:snippets_already_present])
    p snippets_already_present
    @snippets = @user.snippets.where.not(id: snippets_already_present)

    p @snippets

  	render json: {
  		success: true,
  		data: @snippets
  	}
  end

  def add_snippet
    @snippet = @user.snippets.new(name: params[:name], content: params[:content])
  	if @snippet.save
  		render json: {
  			success: true,
        data: @snippet.as_json({
          only: [:id, :name]
        })
  		}
  	else
  		render json: {
  			success: false,
        data: @snippet.errors.full_messages.join(', ')
  		}
  	end
  end

	private

		def set_user
			@user = current_user || User.find_by_access_key(params[:access_key])
			unless @user
				render json: {
					success: false,
					message: 'Please sign in or use a valid syncrow key.'
				}
			end
		end

		def user_params
			params.require(:user).permit(:id, snippets_attributes: [:id, :name, :content, :_destroy])
		end

end