Rails.application.routes.draw do
  
  resources :lion_tamers do
    member do
      put 'add_lion'
      put 'remove_lion'
    end
  end

  resources :lions do
    member do
      put 'add_lion_tamer'
      put 'remove_lion_tamer'
    end
  end
  
  resources :panthers
  resources :cat_toys
  
end
