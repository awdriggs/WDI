class RemoveFatFreeFromMuffins < ActiveRecord::Migration
  def change
    remove_column :muffins, :fat_free, :string
  end
end
