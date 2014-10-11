class ProjectController < ApplicationController
	def index
		@projects = Project.all.order(name: :asc)
	end

	def create
		@new_project = Project.new
	end

	def add
		@new_project = Project.new(project_params)
		if @new_project.save
			flash[:notice] = "Project Successfully Created"
			redirect_to project_path
		else
			flash[:notice] = "Error creating post"
			redirect_to create_project_path
		end
	end

	def edit
		@edit_project = Project.find(params[:id])
	end

	def update
		@update_project = Project.find(params[:project][:id])
		if @update_project.update(project_params)
			flash[:notice] = "Project Successfully Updated"
			redirect_to project_path
		else
			flash[:notice] = "Error editing post"
			redirect_to edit_project_path(params[:project][:id])
		end
	end

	def delete
		@delete_project = Project.find(params[:id])
		if @delete_project.destroy
			flash[:notice] = "Project '#{@delete_project.name}' was deleted"
			redirect_to project_path
		else
			flash[:notice] = "Error deleting '#{@delete_project.name}"
			redirect_to edit_project_path(params[:id])
		end
	end

	private
		def project_params
			params.require(:project).permit(:name, :prod_url, :stage_url, :qa_url, :dev_url, :git_url)
		end
end
