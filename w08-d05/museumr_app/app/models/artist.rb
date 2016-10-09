class Artist < ActiveRecord::Base
	has_many :paintings, dependent: :destroy
	has_and_belongs_to_many :museums
end