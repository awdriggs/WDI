class LionsController < ApplicationController
  
  def index
    @lions = Lion.all
  end

  def show
    @lion = Lion.find(params[:id])
     @lion_tamers = LionTamer.all
    
  end

  def new
    @lion = Lion.new
  end

  def create
    @lion = Lion.create(lion_params)
    redirect_to lions_path
  end

  def edit
    @lion = Lion.find(params[:id])
    @lion_tamers = LionTamer.all
    
  end

  def update
    @lion = Lion.find(params[:id])
    @lion.update(lion_params)
    redirect_to lion_path(@lion)
  end

  def destroy
    @lion = Lion.find(params[:id])
    @lion.destroy
    redirect_to lions_path
  end

  def add_lion_tamer

    @lion = Lion.find(params[:id])
    @lion_tamer = LionTamer.find(params[:lion_tamer_id])
    @lion.add_lion_tamer(@lion_tamer)
    redirect_to lion_path(@lion)
  end

  def remove_lion_tamer
    @lion = Lion.find(params[:id])
    @lion_tamer = LionTamer.find(params[:lion_tamer_id])
    @lion.remove_lion_tamer(@lion_tamer)
    redirect_to lion_path(@lion)
  end

  private

  def lion_params
    params.require(:lion).permit(:birthdate, :name, :about, :weight, :health, :health_notes)
  end

end
