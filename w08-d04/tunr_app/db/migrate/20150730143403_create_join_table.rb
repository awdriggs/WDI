class CreateJoinTable < ActiveRecord::Migration
  def change
    create_join_table :playlists, :songs do |t|
     t.integer :playlist_id
     t.integer :song_id
    end
  end
end
