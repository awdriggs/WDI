Rails.application.routes.draw do
  
  root to: 'application#index'
  resources :tweeds, only: [:create, :update, :index, :destroy]

end
