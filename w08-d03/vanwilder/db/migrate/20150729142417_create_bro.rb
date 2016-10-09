class CreateBro < ActiveRecord::Migration
  def change
    create_table :bros do |t|
    	t.string :name
    	t.string :bro_name, default: 'maverick'
    	t.integer :age, default: 23
    	t.integer :daily_protein_intake, default: 120
    	t.boolean :likes_limp_bizkit, default: true 
    	t.boolean :lifts, default: true 
    	t.timestamps

    end
  end
end
