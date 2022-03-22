Rails.application.routes.draw do
  root to: 'pages#home'
  get '/sites', to: 'sites#index'
  get '/infos', to: 'infos#index'
end
