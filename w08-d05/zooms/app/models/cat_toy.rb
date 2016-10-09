class CatToy < ActiveRecord::Base
  belongs_to :toyable, :polymorphic => true

  validates :name, presence: {message: "name cannot be left blank"}
  
end