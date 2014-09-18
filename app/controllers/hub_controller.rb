class HubController < ApplicationController
	def index
		@new_build = Build.new
		@builds = Build.order(release: :desc)

		@new_feature = Feature.new
	end

	def add
		@new_build = Build.new(build_params)
		if @new_build.save
			render json: @new_build, status: "200"
		else 
			render json: "Error saving", status: "500"
		end
	end

	def add_feature
		@new_feature = Feature.new(feature_params)
		if @new_feature.save
			render json: @new_feature, status: "200"
		else
			render json: "Error saving", status: "500"
		end
	end

	def update_feature 
		@update_feature = Feature.find(params[:id])
		if @update_feature.update(status: params["status"])
			render json: @update_feature, status: "200"
		else
			render json: @update_feature, status: "500"
		end
	end

	def remove_feature
		@remove_feature = Feature.find(params[:id])
		if @remove_feature.delete
			render json: @update_feature, status: "200"
		else
			render json: "Error deleting content", status: "500"
		end
	end

	private
		def build_params
			params.require(:build).permit(:name, :release)
		end

		def feature_params
			params.require(:feature).permit(:build_id, :feature, :status, :details, :reference_link, :completed_by)
		end
end
