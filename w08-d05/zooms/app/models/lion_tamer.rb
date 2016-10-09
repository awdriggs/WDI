class LionTamer < ActiveRecord::Base
  has_and_belongs_to_many :lions

  def add_lion(lion)
    self.lions.push(lion) unless self.lions.include? lion
  end

  def remove_lion(lion)
    self.lions.destroy(lion) if self.lions.include? lion
  end


  validates :name, presence: {message: "Name can not be blank"}
  validates :experience, presence: {message: "experience cannot be blank"}
  

end
