class CreateMuffins < ActiveRecord::Migration
  def change
    create_table :muffins do |t|
      t.string :name
      t.boolean :frosting
      t.references :baker
    end
  end
end
