class MuseumsController < ApplicationController

	def index
		@museums = Museum.all
	end

	def show
		@museum = Museum.find(params[:id])
	end

	def new
		@museum = Museum.new
	end

	def create
		@museum = Museum.new(museum_params)
		if @museum.save
			redirect_to museum_path(@museum)
		else
			redirect_to new_museum_path
		end
	end

	def edit
		@museum = Museum.find(params[:id])
		@artists = Artist.all
	end

	def update
		@museum = Museum.find(params[:id])
		@museum.update(museum_params)
		redirect_to museum_path(@museum)
	end

	def destroy
		@museum = Museum.find(params[:id])
		@museum.destroy
		redirect_to museums_path
	end

	def add_artist
		@museum = Museum.find(params[:id])
		@artist = Artist.find(params[:artist_id])
		@museum.add_artist(@artist)
		redirect_to museum_path(@museum)
	end

	def remove_artist
		@museum = Museum.find(params[:id])
		@artist = Artist.find(params[:artist_id])
		@museum.remove_artist(@artist)
		redirect_to museum_path(@museum)
	end

	private

	def museum_params
		params.require(:museum).permit(:name, :description, :address, :img_url)
	end

end