class AddNameToCatToys < ActiveRecord::Migration
  def change
    add_column :cat_toys, :name, :string
  end
end
