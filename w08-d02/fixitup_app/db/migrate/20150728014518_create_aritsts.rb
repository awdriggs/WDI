class CreateAritsts < ActiveRecord::Migration
  def change
    create_table :aritsts do |t|
    	t.text :name
    	t.integer :img_url
    	t.string :naitonality
    	t.string :fav_food
    end
  end
end
