Rails.application.routes.draw do
  root to: 'pages#home'
  get '/photos', to: 'photos#index'
  get '/texts', to: 'texts#index'
end
