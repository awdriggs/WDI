class TweedsController < ApplicationController
	
	def index
		@tweeds = Tweed.all
	end

	def edit
		@tweed = Tweed.find(params[:id])
	end

	def update
		@tweed = Tweed.find(params[:id])
		@tweed.update(tweed_params)
		redirect_to tweeds_path
	end

	def show
		@tweed = Tweed.find(params[:id])
	end

	def destroy
		@tweed = Tweed.find(params[:id])
		@tweed.destroy
		redirect_to tweeds_path
	end

	private 

	def tweed_params
		params.require(:tweed).permit(:author, :image_url, :content)
	end

end
