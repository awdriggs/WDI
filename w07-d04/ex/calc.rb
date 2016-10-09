# Calculator

# Prompt the user to input a math operation
#   - add
#   - subtract
#   - multiply
#   - divide
# The options should be printed to the console

# Prompt the user to input two more numbers. 
# Once two numbers have been input, print out 
# the result of performing the provided math operation with the two numbers.
loop do
  puts "input an operation"
  op = gets.chomp.downcase
  break if op == 'quit' || op == 'q'
  puts "lets go some numbers bro \nnum1:"
  num1 = gets.chomp.to_i
  puts "num2:"
  num2 = gets.chomp.to_i

  if (op == 'a' || op == 'add')
    a = num1 + num2
  elsif (op == 's' || op == 'subtract')
    a = num1 - num2
  elsif (op == 'd' || op == 'divide')
    if num2 == 0
      a = 'NO DIV BY 0!'
    else
      a = num1 / num2
    end
  elsif (op == 'm' || op == 'multiply')
    a = num1 * num2
  end

  puts a
end




