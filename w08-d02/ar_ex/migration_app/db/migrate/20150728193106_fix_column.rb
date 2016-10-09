class FixColumn < ActiveRecord::Migration
  def change
    rename_column :muffins, :sugar_free, :fat_free
  end
end
