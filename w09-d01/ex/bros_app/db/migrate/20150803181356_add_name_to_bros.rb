class AddNameToBros < ActiveRecord::Migration
  def change
    add_column :bros, :name, :string
  end
end
