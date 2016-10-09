class BrosController < ApplicationController
	def index
		@bros = Bro.all
	end

	def show
		@bro = Bro.find(params[:id])
	end

	def new
		@bro = Bro.new
	end

	def create
		@bro = Bro.create(bro_params)
		redirect_to bro_path(@bro)
	end

	def edit
		@bro = Bro.find(params[:id])
	end

	def update
		binding.pry
		@bro = Bro.find(params[:id])
		@bro.update(bro_params)
		redirect_to @bro, notice: 'Bro was successfully updated.'
	end

	def destroy
		@bro = Bro.find(params[:id])
		@bro.destroy
		redirect_to bros_path
	end

	private
		def bro_params
		  params.require(:bro).permit(:name, :bro_name, :age, :daily_protein_intake, :likes_limp_bizkit, :lifts)
		end
end