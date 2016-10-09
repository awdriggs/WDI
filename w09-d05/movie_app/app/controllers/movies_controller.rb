class MoviesController < ApplicationController
  def index
    @movies = Movie.all
    render json: @movies
  end

  # def show
  #   @movie = Movie.find
  #   render json: @movie
  # end

  def create
    @movie = Movie.create(movie_params) 
  end

  def update
    @movie = Movie.find(params[:id])
    @movie.update(item_params)
  end

  def destroy
    @movie = Movie.find(params[:id])
    @movie.destroy
  end

  # custom actions
  def search
    
    @movie = Movie.find(params[:term])
    render json: @movie["Search"]
  end

  def single
    
    @movie = Movie.one(params[:id])
    render json: @movie
  end

  private

  def movie_params
    params.require(:movie).permit(:imdbID, :title, :year, :genre, :plot, :poster_url, :imdbRating)
  end

end
