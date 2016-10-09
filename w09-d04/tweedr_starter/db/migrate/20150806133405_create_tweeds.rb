class CreateTweeds < ActiveRecord::Migration
  def change
    create_table :tweeds do |t|
      t.string :content
      t.integer :upvote, :default => 0
      t.string :author

      t.timestamps null: false
    end
  end
end
