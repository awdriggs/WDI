class MuseumsController < ApplicationController
  
  def index
  @museums = Museum.all
  end

  def show
    @museum = Museum.find(params[:id])
    binding.pry

    # @artists = Artist.where museum_id: @museum.id 
    # # this doesn't work
   
  end

  def new
    @museum = Museum.new
  end

  def create
    @museum = Museum.create(museum_params)
    redirect_to museum_path(@museum)
  end

  def edit
    @museum = Museum.find(params[:id])
  end

  def update
    @museum = Museum.find(params[:id])
    @museum.update(museum_params)
    redirect_to museum_parth(@museum)
  end

  def destroy
    @museum = Museum.find(params[:id])
    @museum.destory
    redirect_to museums_path
  end

  def add_artist(artist)
    museum = Museum.find(params[:id])
    artist = Artist.find(params[:artist_id])
    museum.add_artist(artist)
    redirect_to museum_path(museum)
  end

  def remove_artist(artist)
    museum = Museum.find(params[:id])
    artist = Artist.find(params[:artist_id])
    museum.add_artist(artist)
    redirect_to museum_path(museum)
  end

  private

  def museum_params
    params.require(:museum).permit(:name, :img_url, :description, :birth_year, :nationality)
  end

end