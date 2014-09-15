Rails.application.routes.draw do
  root 'hub#index', as: 'hub'

  post "/add" => "hub#add", as: "add_build"
end
