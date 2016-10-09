class ItemsController < ApplicationController
 
  
  def index
    @items = Item.all
    render json: @items
  end

  def create
     @item = Item.create(item_params)

  end

  def update
    @item = Item.find(params[:id])
    @item.update(item_params)
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
  end

  private

  def item_params
    params.require(:item).permit(:completed, :description)
  end

end
