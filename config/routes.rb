Rails.application.routes.draw do
  root 'project#index', as: 'project'

  post "/build/add" => "hub#add", as: "add_build"
  patch "/build/update" => "hub#update", as: "update_build"
  post "/build/add-feature" => "hub#add_feature", as: "add_feature"
  post "/build/update-feature" => "hub#update_feature", as: "update_feature"
  post "/build/remove-feature" => "hub#remove_feature", as: "remove_feature"

  get '/project/create' => "project#create", as: "create_project"
  get '/project/edit/:id' => "project#edit", as: "edit_project"
  post '/project/add' => "project#add", as: "add_project"
  get '/project/delete/:id' => "project#delete", as: "delete_project"
  patch '/project/update' => "project#update", as: "update_project"

  get "/project/:id/" => "hub#index", as: "build"
  get "/build/:id" => "hub#show", as: "show_build"
end
