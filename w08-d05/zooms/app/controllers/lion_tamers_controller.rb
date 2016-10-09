class LionTamersController < ApplicationController
  
  def index
    @lion_tamers = LionTamer.all
  end

  def show
    @lion_tamer = LionTamer.find(params[:id])
    @lions = Lion.all
  end

  def new
    @lion_tamer = LionTamer.new
  end

  def create
    @lion_tamer = LionTamer.create(lion_tamer_params)
    redirect_to lion_tamer_tamers_path
  end

  def edit
    @lion_tamer = LionTamer.find(params[:id])
  end

  def update
    @lion_tamer = LionTamer.find(params[:id])

    @lion_tamer.update(lion_tamer_params)
    redirect_to lion_tamer_path(@lion_tamer)
  end

  def destroy
    @lion_tamer = LionTamer.find(params[:id])
    @lion_tamer.destroy
    redirect_to lion_tamers_path
  end

  def add_lion
    @lion_tamer = LionTamer.find(params[:id])
    @lion = Lion.find(params[:lion_id])
    @lion_tamer.add_lion(@lion)
    redirect_to lion_tamer_path(@lion_tamer)
  end

  def remove_lion
    @lion_tamer = LionTamer.find(params[:id])
    @lion = Lion.find(params[:lion_id])
    @lion_tamer.remove_lion(@lion)
    redirect_to lion_tamer_path(@lion_tamer)
  end

  private

  def lion_tamer_params
    params.require(:lion_tamer).permit(:name, :experience, :living)
  end

end
