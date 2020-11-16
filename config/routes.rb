Rails.application.routes.draw do
  get 'questions/index'
  root to: 'questions#index'
  resources :questions,only: [:show] do
    collection do
      get 'quiz1'
      get 'quiz2'
      get 'quiz3'
      get 'quiz4'
      get 'quiz5'
      get 'explanation1'
      get 'explanation2'
      get 'explanation3'
      get 'explanation4'
      get 'explanation5'
    end
  end
end
