class SearchController < ApplicationController
  def index
    @movies = Search.all(params[:term])
    render json: @movies
  end

  def show
    @movie = Search.show(params[:id])
    render json: @movie
  end
end
