class CreateMuseums < ActiveRecord::Migration
  def change
    create_table :museums do |t|
      t.string :name
      t.text :description
      t.string :address
      t.string :img_url
    end
  end
end
