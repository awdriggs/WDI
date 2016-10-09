Rails.application.routes.draw do
  root to: 'application#index'

  resources :cheese_sandwiches
end
