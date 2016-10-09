class AddQuantityToMuffins < ActiveRecord::Migration
  def change
    add_column :muffins, :quantity, :integer
  end
end
