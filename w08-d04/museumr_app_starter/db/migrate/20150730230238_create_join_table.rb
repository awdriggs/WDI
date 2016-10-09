class CreateJoinTable < ActiveRecord::Migration
  def change
    create_join_table :artists, :museums do |t|
      t.integer :artist_id
      t.integer :museum_id
    end
  end
end
