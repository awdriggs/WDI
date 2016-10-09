class Playlist < ActiveRecord::Base
  has_and_belongs_to_many :songs

 validates :name, presence: true, uniqueness: true

 def add_song(song)
   self.songs.push(song) unless self.songs.include? song
 end

 def remove_song(song)
  self.songs.destroy(song) if self.songs.include? song   
 end
 
end