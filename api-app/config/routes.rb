Rails.application.routes.draw do
  namespace :api do
    resources :books, except: [:new, :edit]
  end
end
