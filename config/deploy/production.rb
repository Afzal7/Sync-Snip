server '13.59.154.241', roles: [:web, :app, :db], primary: true
set :stage,  :production
set :branch, :master