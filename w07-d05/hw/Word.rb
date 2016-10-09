require 'pry'
puts "word.rb working"

class Word
  def initialize(string)
    @word = []
    string.split('').each{ |letter| if letter == " " then @word.push({'letter' => letter, 'hidden' => false}) else @word.push({'letter' => letter, 'hidden' => true}) end} 
  end

  # getters
  def word
    return @word
  end

  # general
  def found?
    @word.none?{ |item| item["hidden"] == true}
  end

  def try(guess)
    
    found = false
    
    @word.each do |letter| 
      if letter.has_value?(guess) 
        letter['hidden']=false 
        found=true 
      end
    end
    
    return found
  end

  def render
    result = " "
    @word.each{ |letter| if (letter["hidden"]  == false || letter["letter"] == " ") then result += "#{letter["letter"]} " else result += "_ " end }

    return result
  end
  # testing functions
  def unhide=(index)
    @word[index]['hidden'] = false
  end

  def unhide_all
    @word.each{ |item| item["hidden"] = false}
  end

end


 #  binding.pry

