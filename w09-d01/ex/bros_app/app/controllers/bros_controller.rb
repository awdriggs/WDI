class BrosController < ApplicationController
  before_action :set_bro, only: [:show, :update, :destroy]
  
  def index
    render json: Bro.all
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end
  
  private
  def set_bro
    @bro = Bro.find(params[:id])
  end

  def bro_params
    params.require(:bro).permit(:name)
  end

end