# Create a person class for your favourite character in any media

# Look at letterpress.rb and write a new class for yourself
# Give yourself a name, an age, a catch-phrase, and two other attributes about them.
# Then give them an ability (method) to tell us about themselves!
require 'pry'

class Person
  
  def initialize( name, age, city, occupation, phrase )
    @name = name
    @age = age
    @city = city
    @occupation = occupation
    @phrase = phrase
  end

  # getters
  def name
    return @name
  end

  def age
    return @age
  end

  def city
    return @city
  end

  def occupation
    return @occupation
  end

  def phrase
    return @phrase
  end

  def return_intro
    puts "Hi, I'm #{@name}. I'm #{@age} years old and I live in #{@city}. I am currently a #{@occupation}. My catch phrase is '#{@phrase}'"    
  end

  # setters
  def name=(new_name)
    @name = new_name
  end

  def age=(new_age)
    @age = new_age
  end

  def city=(new_city)
    @city = new_city
  end

  def occupation=(new_occupation)
    @occupation = new_occupation
  end

  def phrase= (new_phrase)
    @phrase = new_phrase
  end

end

binding.pry
