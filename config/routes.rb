Rails.application.routes.draw do
  get 'quizs2/show'
  get 'quizs1/show'
  get 'questions/index'
  root 'questions#index'
  resources :questions,only: [:show]
end
