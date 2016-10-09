class TweedsController < ApplicationController
  
  def index
    @tweeds = Tweed.all
    render json: @tweeds
  end

  def create
    binding.pry
    @tweed.create(tweed_params)
  end

  def update
    @tweed = Tweed.find(params[:id])
    @tweed.update(tweed_params)
  end

  def destroy
    @tweed = Tweed.find(params[:id])
    @tweed.destroy
  end

  private

  def tweed_params
    params.require(:tweed).permit(:content, :author, :upvote)
  end

end
