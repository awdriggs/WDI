class CreatePaintings < ActiveRecord::Migration
  def change
    create_table :paintings do |t|
    	t.integer :title
    	t.string :img_url

    	t.timestamps
    end
  end
end
