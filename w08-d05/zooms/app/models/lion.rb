class Lion < ActiveRecord::Base
  has_and_belongs_to_many :lion_tamers
  has_many :cat_toys, as: :toyable


  def add_lion_tamer(lion_tamer)
    self.lion_tamers.push(lion_tamer) unless self.lion_tamers.include? lion_tamer
  end

  def remove_lion_tamer(lion_tamer)
    self.lion_tamers.destroy(lion_tamer) if self.lion_tamers.include? lion_tamer
  end

  validates :name, presence: {message: "Name can not be blank"}
  validates :birthdate, presence: {message: "birthdate cannot be blank"}
  validates :about, presence: {message: "about cannot be blank"}
  validates :weight, presence: {message: "weight can not be blank"}
  validates :health, presence: {message: "health cannot be blank"}
  validates :health_notes, presence: {message: "health_notes cannot be blank"}

end
