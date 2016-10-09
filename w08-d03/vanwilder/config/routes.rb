Rails.application.routes.draw do
  #resources :bros

  get '/', to: 'bros#index'

  get '/bros', to: 'bros#index', as: :bros

  get '/bros/new', to: 'bros#new', as: :new_bro

  get '/bros/:id', to: 'bros#show', as: :bro
  post '/bros', to: 'bros#create'

  get '/bros/:id/edit', to: 'bros#edit', as: :edit_bro
  put '/bros/:id', to: 'bros#update'
  patch '/bros/:id', to: 'bros#update'
  delete '/bros/:id', to: 'bros#destroy'

  resources :pads 
end




'



'
