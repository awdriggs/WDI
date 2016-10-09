class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :imdbID
      t.string :title
      t.string :year
      t.string :genre
      t.text :plot
      t.string :poster_url
      t.string :imdbRating

      t.timestamps null: false
    end
  end
end
