class Movie < ActiveRecord::Base
 def self.find (term)
  search_term = URI.encode(term)
  HTTParty.get("http://www.omdbapi.com/?s=#{search_term}&y=&plot=short&r=json")
 end

 def self.one (id)
  HTTParty.get("http://www.omdbapi.com/?i=#{id}&y=&plot=short&r=json")
 end

end
