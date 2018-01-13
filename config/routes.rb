Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :welcome
  
  get '/snippets', to: 'welcome#snippets'
  get 'snippets/*path', to: 'welcome#snippets'

  root 'welcome#index'
end