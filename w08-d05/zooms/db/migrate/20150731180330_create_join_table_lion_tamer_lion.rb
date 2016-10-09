class CreateJoinTableLionTamerLion < ActiveRecord::Migration
  def change
    create_join_table :lion_tamers, :lions do |t|
      t.integer :lion_id
      t.integer :lion_tamer_id
    end
  end
end
