class PaintingsController < ApplicationController

	def index
		@paintings = Painting.all
	end

	def show
		@painting = Painting.find(params[:id])
	end

	def new
		@painting = Painting.new
		@artists = Artist.all
	end

	def create
		@painting = Painting.new(painting_params)
		if @painting.save
			redirect_to painting_path(@painting)
		else
			redirect_to new_painting_path
		end
	end

	def edit
		@painting = Painting.find(params[:id])
		@artists = Artist.all
	end

	def update
		@painting = Painting.find(params[:id])
		@painting.update(painting_params)
		redirect_to painting_path(@painting)
	end

	def destroy
		@painting = Painting.find(params[:id])
		@painting.destroy
		redirect_to paintings_path
	end

	private

	def painting_params
		params.require(:painting).permit(:title, :img_url, :year_made, :artist_id)
	end

end