Rails.application.routes.draw do
  namespace :api do
    resources :books, except: [:new, :edit ]
  end
  get 'books/completed'
  get '/api/books/completed' => 'books#completed'
end
