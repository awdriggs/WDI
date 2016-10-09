class CreatePatients < ActiveRecord::Migration
  def change
    create_table :patients do |t|
      t.string :name
      t.boolean :insured
      t.string :insurance_carrier
      t.integer :age
    end
  end
end
