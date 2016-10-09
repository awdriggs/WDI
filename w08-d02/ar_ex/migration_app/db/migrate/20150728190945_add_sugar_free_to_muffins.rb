class AddSugarFreeToMuffins < ActiveRecord::Migration
  def change
    add_column :muffins, :sugar_free, :boolean
  end
end
