class CreateBakers < ActiveRecord::Migration
  def change
    create_table :bakers do |t|
      t.string :name
      
    end
  end
end
