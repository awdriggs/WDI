class TweedsController < ApplicationController
  def index
    @tweeds = Tweed.all
    render json: @tweeds
  end

  def create
    @tweed = Tweed.create(tweed_params)
    render json: @tweed
  end

  def update
    @tweed = Tweed.update(tweed_params)
    render json: @tweed
  end

  def destroy
    @tweed = Tweed.find(params[:id])
    @tweed.destroy();
  end

  private

  def tweed_params
    params.require(:tweed).permit(:content, :author, )
  end

end
