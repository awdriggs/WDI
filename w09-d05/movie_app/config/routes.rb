Rails.application.routes.draw do
  root to: 'application#index'

 # get 'search/:term' => 'search#index'
 # get 'search/detail/:id' => 'search#show'
 # deprecated, you creating these when you had a separate search controller, dumby

  resources :movies do 
    collection do
      get 'search/:term' => 'movies#search'
      get '/:id' => 'movies#single'
    end
  end

end
