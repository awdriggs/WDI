class Search
  def self.all(search_term)
   HTTParty.get("http://www.omdbapi.com/?s=#{search_term}&y=&plot=short&r=json")
 end

 def self.show(detail_term)
  HTTParty.get("http://www.omdbapi.com/?i=#{detail_term}&y=&plot=short&r=json")
 end
end
