class Painting < ActiveRecord::Base
  belongs_to :artist

  validates :title, presence: {message: "title cannot be blank"}
  validates :img_url, presence: {message: "img_url cannot be blank"}
  validates :year_made, presence: {message: "year_made cannot be blank"}

end