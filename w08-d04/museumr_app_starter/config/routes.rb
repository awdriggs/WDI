Rails.application.routes.draw do
  
  resources :paintings
  resources :artists
  
  resources :museums do
    member do
      put 'add_artist'
      put 'remove_artist'
    end
  end

end
