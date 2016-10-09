Rails.application.routes.draw do
 root to: 'application#index'
 resources :posts, only: [:create, :update, :index, :destroy]
end
