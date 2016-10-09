class CreateTweeds < ActiveRecord::Migration
  def change
    create_table :tweeds do |t|
      t.string :content
      t.string :author
      t.integer :upvote, default: 0;

      t.timestamps null: false
    end
  end
end
