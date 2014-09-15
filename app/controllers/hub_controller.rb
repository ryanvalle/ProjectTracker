class HubController < ApplicationController
	def index
		@new_build = Build.new
		@builds = Build.order("created_at DESC")
	end

	def add
		@new_build = Build.new(build_params)
		if @new_build.save
			render json: @new_build, status: "200"
		else 
			render json: "Error saving", status: "500"
		end
	end

	private
		def build_params
			params.require(:build).permit(:name)
		end
end
