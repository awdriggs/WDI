class AddAuthorToTweeds < ActiveRecord::Migration
  def change
    add_column :tweeds, :author, :string
  end
end
