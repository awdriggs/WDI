require 'pry'

def greeting
  puts "Well, hello there!"
end

def personalized_greeting name
  "Well, hello there #{name}!"
end

def triple_add num1, num2, num3
  num1 + num2 + num3
end

binding.pry