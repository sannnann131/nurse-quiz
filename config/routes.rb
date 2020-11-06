Rails.application.routes.draw do
  get 'quizs5/show'
  get 'quizs4/show'
  get 'quizs3/show'
  get 'quizs2/show'
  get 'quizs1/show'
  get 'questions/index'
  root to: 'questions#index'
  resources :questions,only: [:show] do
    collection do
      get 'quiz1'
      get 'quiz2'
      get 'quiz3'
      get 'quiz4'
      get 'quiz5'
    end
  end
end
