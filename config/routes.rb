Rails.application.routes.draw do
  root 'hub#index', as: 'hub'

  post "/add" => "hub#add", as: "add_build"
  post "/add-feature" => "hub#add_feature", as: "add_feature"
  post "/update-feature" => "hub#update_feature", as: "update_feature"
end
