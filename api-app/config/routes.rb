Rails.application.routes.draw do
  namespace :api do
    resources :titles
  end
end
