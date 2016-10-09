class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title
      t.text :album
      t.string :preview_url
      t.string :artwork
      t.integer :price
      t.references :artist

      t.timestamps
    end
  end
end
