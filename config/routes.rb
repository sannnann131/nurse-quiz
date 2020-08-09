Rails.application.routes.draw do
  get 'quizs5/show'
  get 'quizs4/show'
  get 'quizs3/show'
  get 'quizs2/show'
  get 'quizs1/show'
  get 'questions/index'
  root to: 'questions#index'
  resources :questions,only: [:show]
end
