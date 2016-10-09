# EULER PROBLEM 1

def multiples(num_limit)
	x = []
	(1...num_limit).each do |num|
		if num % 5 == 0 || num % 3 == 0
			x.push(num)
		end
	end
	x.reduce(:+)
end

# EULER PROBLEM 6

def sum_square(limit)
	if limit <= 0
		return 0
	elsif
		numbers = (1..limit).to_a
		squares = numbers.map {|num| num ** 2}
		sum_of_squares = squares.reduce(:+)

		sum = numbers.reduce(:+)
		square_of_sum = sum ** 2

		square_of_sum - sum_of_squares
	end
end

# # EULER PROBLEM 8 

def adj_product(num)
   results = []
   array = num.split('').map {|x| x.to_i}
   # p array.each_cons(13) {|x| p x }
   array.each_cons(13) {|x| results.push(x.reduce(:*))}
   puts results.max
end

# # EULER PROBLEM 13

def large_sum(num)
	string_array = num.to_s.split("")
	number_array = string_array.map do |string|
		string.to_i
	end
	number_array.reduce(:+).to_s[0..9]
	# num.to_s.chars.map(&:to_i).reduce(:+) IS A SUPER SHORT WAY OF DOING IT
end

# # LUHN ALGO

def valid_card?(cardnumber)
	card = cardnumber.to_s.split("").map(&:to_i).reverse
	card.each_index { |index| card[index] *= 2 if .odd? }
	sum = 0
	card = card.join("").split("").map(&:to_i)
	card.each do |x|
		sum += x
	end
	return sum % 10 == 0
end

# POKEMON

  all_pokemon = pokemon.map do |poke_hash|
    name = poke_hash[:name]
    poke_id = poke_hash[:national_id]

    capitalized_species = poke_hash[:species].split(" ").map do |each_word|
      each_word.capitalize
    end

    weight = poke_hash[:weight]
    types = poke_hash[:types].values

    info_string = "#{name} | #{poke_id}\n"
    info_string += "Species: #{capitalized_species.join(' ')}"
    info_string += " | Weight: #{weight}\n"
    info_string += "Types: #{types.join(' // ')}"

    info_string
  end

  puts all_pokemon.join("\n\n")



