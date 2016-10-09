class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.string :name
      t.text :img_url
      t.text :description
      t.string :birth_year
      t.string :nationality
    end
  end
end
