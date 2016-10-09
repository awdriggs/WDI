class CreateCheeseSandwiches < ActiveRecord::Migration
  def change
    create_table :cheese_sandwiches do |t|
      t.string :cheese
      t.boolean :mayo
      t.string :bread

      t.timestamps null: false
    end
  end
end
