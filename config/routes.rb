Rails.application.routes.draw do
  get 'questions/index'
  root 'questions#index'
  resources :questions, only: [:show] 
end
