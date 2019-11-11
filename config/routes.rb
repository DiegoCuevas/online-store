Rails.application.routes.draw do
  root to: "home#index"
  get "/login", to: "login#index"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  get "*path", to: "home#index", constraints: { format: "html" }
end
