class Museum < ActiveRecord::Base
	has_and_belongs_to_many :artists

	def add_artist(artist)
		self.artists.push(artist)
	end

	def remove_artist(artist)
		self.artists.destroy(artist) if self.artists.include? artist
	end

end