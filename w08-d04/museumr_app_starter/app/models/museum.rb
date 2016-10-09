class Museum < ActiveRecord::Base
  has_and_belongs_to_many :artists

  # add some validations
  validates :name, presence: {message: "name cannot be blank"}
  validates :description, presence: {message: "description cannot be blank"}
  validates :address, presence: {message: "address cannot be blank"}
  validates :img_url, presence: {message: "img_url cannot be blank"}


  def add_artist(artist)
    self.artists.push(artist) unless self.artists.include? artist
  end

  def remove_artist(artist)
    self.songs.destroy(song) if self.songs.include? song    
  end

end