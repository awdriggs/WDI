class CheeseSandwichesController < ApplicationController

  def index
    render json: CheeseSandwich.all
  end

  def show
    render json: CheeseSandwich.find(params[:id])
  end

  def create
    cheese_sandwich = CheeseSandwich.create(cheese_sandwich_params)
    render json: cheese_sandwich
  end

  def update
    cheese_sandwich = CheeseSandwich.find(params[:id])
    cheese_sandwich.update(cheese_sandwich_params)
    render json: cheese_sandwich
  end

  def destroy
    cheese_sandwich = CheeseSandwich.find(params[:id])
    cheese_sandwich.destroy
    render json: cheese_sandwich
  end

  private

  def cheese_sandwich_params
    params.require(:cheese_sandwich).permit(:bread, :cheese, :mayo)
  end
end
