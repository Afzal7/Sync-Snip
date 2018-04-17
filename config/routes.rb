Rails.application.routes.draw do
  devise_for :users

  namespace :api do
  	namespace :v1 do
  		resources :users do
  			collection do
	  			get :me
	  			post :sync_snippets
	  			post :add_snippet
  			end			
  		end
  	end
  end

  resources :welcome
  
  get '/home', to: 'welcome#home'
  get 'home/*path', to: 'welcome#home'

  root 'welcome#index'
end