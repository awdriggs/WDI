class PanthersController < ApplicationController
  
  def index
    @panthers = Panther.all
  end

  def show
    @panther = Panther.find(params[:id])
  end

  def new
    @panther = Panther.new
  end

  def create
    @panther = Panther.create(panther_params)
    redirect_to panthers_path
  end

  def edit
    @panther = Panther.find(params[:id])
  end

  def update
    @panther = Panther.find(params[:id])
    @panther.update(panther_params)
    redirect_to panther_path(@panther)
  end

  def destroy
    @panther = Panther.find(params[:id])
    @panther.destroy
    redirect_to panthers_path
  end

  private

  def panther_params
    params.require(:panther).permit(:name, :claw_length)
  end

end
