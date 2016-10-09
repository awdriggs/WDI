class Artist < ActiveRecord::Base
  has_many :paintings, dependent: :destroy
  has_and_belongs_to_many :museums

  validates :name, presence: {message: "Name cannot be blank"}
  validates :img_url, presence: {message: "Url cannot be blank"}
  validates :nationality, presence: {message: "Nationality cannot be blank"}
  validates :description, presence: {message: "description cannot be blank"}
  validates :birth_year, presence: {message: "birth_year cannot be blank"}

end







# validates :name, presence: {message: "Name can not be blank"}
#   validates :nationality, presence: {message: "Nationality can not be blank"}
#   validates :img_url, presence: {message: "Photo can not be blank"}
#   validates :genre, inclusion: { in: ["Electronic", "House", "Jazz", "Indie", "Hip Hop"]}



# untested
# validates :size, inclusion: { in: ["Electronic", "House", "Jazz", "Indie", "Hip Hop"],
#    message: "%{value} is not a valid size" }
