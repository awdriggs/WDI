class Panther < ActiveRecord::Base
  has_many :cat_toys, as: :toyable

  validates :name, presence: {message: "Name can not be blank"}
  validates :claw_length, presence: {message: "claw_length cannot be blank"}
  
end 