  Rails.application.routes.draw do

  root to: 'application#index'

  resources :items, only: [:index, :update, :create, :destroy]

end
