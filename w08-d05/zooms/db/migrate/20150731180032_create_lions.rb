class CreateLions < ActiveRecord::Migration
  def change
    create_table :lions do |t|
      t.date :birthdate
      t.string :name
      t.text :about
      t.integer :weight
      t.integer :health
      t.text :health_notes
    end
  end
end
