class CreateTweeds < ActiveRecord::Migration
  def change
    create_table :tweeds do |t|
      t.string :content
      t.string :image_url
      t.timestamps
    end
  end
end