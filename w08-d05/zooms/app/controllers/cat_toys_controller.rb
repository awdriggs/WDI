class CatToysController < ApplicationController
  
  def index
    @cat_toys = CatToy.all
   
  end

  def show
    @cat_toy = CatToy.find(params[:id])
  end

  def new
    @cat_toy = CatToy.new
    @cats = Lion.all + Panther.all
  end

  def create
     @info = params[:toyable].split(",")

    @cat_toy = CatToy.create(toyable_type: @info[0], toyable_id: @info[1], name: params["cat_toy"]["name"])
    redirect_to cat_toys_path
  end

  def edit
    @cat_toy = CatToy.find(params[:id])
    @cats = Lion.all + Panther.all
  end

  def update
    @cat_toy = CatToy.find(params[:id])
    @info = params[:toyable].split(",")
    @cat_toy.update(toyable_type: @info[0], toyable_id: @info[1])
    redirect_to cat_toy_path(@cat_toy)
  end

  def destroy
    @cat_toy = CatToy.find(params[:id])
    @cat_toy.destroy
    redirect_to cat_toys_path
  end

  private

  def cat_toy_params
    params.require(:cat_toy).permit(:name, :toyable_id, :toyable_type )
  end

end
