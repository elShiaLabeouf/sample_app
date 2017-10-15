Rails.application.routes.draw do

	resources :users
	resources :sessions, only: [:new, :create, :destroy]	
  
  get '/help' => 'static_pages#help'
  get '/about' => 'static_pages#about'
  get '/contact' => 'static_pages#contact'

  get '/signup' => 'users#new'
  get '/signin' => 'sessions#new'
  delete '/signout' => 'sessions#destroy'

	root 'static_pages#home'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
