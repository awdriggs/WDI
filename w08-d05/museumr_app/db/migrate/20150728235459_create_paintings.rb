class CreatePaintings < ActiveRecord::Migration
  def change
    create_table :paintings do |t|
    	t.string :title
    	t.text :img_url
    	t.string :year_made
    	t.references :artist

    	t.timestamps
    end
  end
end
