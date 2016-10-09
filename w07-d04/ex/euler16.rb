# do 2 to the 1000 power
# take the answer, add each individual digit together
require 'pry'

x = 2**1000

y = x.to_s.split('').map{ |digit| digit.to_i}.reduce(:+)

puts y
binding.pry