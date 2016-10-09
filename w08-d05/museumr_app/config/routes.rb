Rails.application.routes.draw do

  resources :artists

  resources :paintings

  resources :museums do
  	member do
  		put 'add_artist'
  		put 'remove_artist'
  	end
  end

  root :to => 'application#index', as: 'home'
  
end
