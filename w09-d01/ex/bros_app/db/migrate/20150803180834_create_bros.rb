class CreateBros < ActiveRecord::Migration
  def change
    create_table :bros do |t|
      t.string :name
    end
  end
end
