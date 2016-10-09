class ItemsController < ApplicationController
  def index
    @items = Item.all
  end

  def new
    @item = Item.new
  end

  def create
    @item = Item.create(item_params)
    redirect_to items_path
  end

  def edit
    @item = Item.find(params[:id])
    # form_tag(items_path, method: "put")
  end

  def update
    @item = Item.find(params[:id])
    @item.update_attributes(item_params)
    redirect_to items_path
  end

  def show
    @item = Item.find(params[:id])
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
    redirect_to items_path
  end

  private

  def item_params
    params.require(:item).permit(:description, :completed)
  end


end

