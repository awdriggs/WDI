# ripped from the pages of stack overflow, doesn't quite work
# def sort(unsorted_array)
#   unsorted_array.sort_by do |s|
#     if s =~ /^\d+$/
#       [2, $&.to_i]
#     else
#       [1, s]
#     end
#   end
# end

def sort(unsorted_array)
  words = []
  numbers = []
  sorted = []

  # separate the numbers from the words
  unsorted_array.each do |item|
    if item.to_i == 0 #this works until zero is in the array
      words.push(item)
    else
      num = item.to_i
      numbers.push(num)
    end
  end

  words.sort!
  numbers.sort!

  # if the item was originally a num, push in a num
  unsorted_array.each do |item|
    if item.to_i == 0
      sorted.push(words.shift)
    else
      sorted.push(numbers.shift.to_s)
    end
  end
  
  sorted

end

# a = (["sugar", "butter", "egg"])
# a  = (["12", "10", "3", "4", "1"])
a = ["16", "8", "4", "salt", "baking", "soda"]
sorted = sort(a)

p a
p sorted


