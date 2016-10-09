class CreateJoinTableArtistMuseum < ActiveRecord::Migration
  def change
    create_join_table :artists, :museums do |t|
    	
    end
  end
end
