class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
    	t.string :title
    	t.string :author
    	t.string :image
    	t.string :content
    	t.string :category

    	t.timestamps
    end
  end
end
