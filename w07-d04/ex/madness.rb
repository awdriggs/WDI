# * Create a file called `madness.rb`
# * Inside, define the following methods
#   * `meaning_of_life` - return the number 42
#   * `transmogrifier` - accept 3 numbers as input arguments and returns the
#     transmogrified result. The common mathematical operation known as
#     transmogrification is when you add the first two numbers and multiply the
#     sum by the third number
#   * `introduce` - accept two names as strings, and return a string that
#     introduces the two people. For example, `introduce("Harry", "Sally")` should
#     return the string `"Harry, meet Sally. Sally, meet Harry."`
#   * `shout` - accept a string and `puts` the uppercased version of the string.
#     For example, `shout("is anybody there")` should display `"IS ANYBODY THERE"`
#     on the screen.
#   * `titleize` - accept a string and return a version of the string where every
#     word is capitalized

require 'pry'

def meaning_of_life
  42
end

def transmogrifier num1, num2, num3
  (num1 + num2) * num3
end

def introduce name1, name2
  "#{name1} meet #{name2}. #{name2} meet #{name1}."
end

def shout string
  string.uppercase
end




def title_case title_string
  title = title_string.split
  
  title.each do |word|
    unless (word.include?("of")) || (word.include?("the")) || (word.include?("a")) && (title.first != "the")
      word.capitalize!
    end
  end.join(" ");
  
end



david = 'DAVID'

def say_hi_david
  "#{david} says hi to everybody"
end





binding.pry




