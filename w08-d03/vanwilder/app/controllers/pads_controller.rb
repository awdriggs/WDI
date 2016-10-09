class PadsController < ApplicationController
	def index
		@pads = Pad.all
	end

	def show
		@pad = Pad.find(params[:id])
	end

	def new
		@pad = Pad.new
	end

	def create
		@pad = Pad.create(pad_params)
		redirect_to pad_path(@pad)
	end

	def edit
		@pad = Pad.find(params[:id])
		@bros = Bro.all
	end

	def update
		@pad = Pad.find(params[:id])
		@pad.update(pad_params)
		redirect_to @pad, notice: 'Pad was successfully updated.'
	end

	def destroy
		@pad = Pad.find(params[:id])
		@pad.destroy
		redirect_to pads_path
	end

	private
		def pad_params
		  params.require(:pad).permit(:name, :bro_id)
		end
end