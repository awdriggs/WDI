require 'pry'
require_relative './Word.rb'

class Game

  def initialize(word)
    @answer = word
    @word = Word.new(@answer)
    @guesses = 10
    @guessed_letters = []
  end

  # getters
  def guesses
    return @guesses
  end

  def over?
    # return true if guesses == 0 or the word is solved, word.found? == true
    if (@guesses == 0 || @word.found?)
      return true
    else
      return false
    end
  end

  def guess(letter)
    unless @guessed_letters.include?(letter)
      unless @word.try(letter)    
        @guesses -= 1 
        @guessed_letters.push(letter)
      end
    end
  end

  def over_message
    # if guesses is greater than 0, return a win message
    # else return a fail message and the word, @answer
    if @guesses > 0 && @word.found?
      puts "#{@answer} is correct!"
      puts "You Win with #{@guesses} remaining" 
    else
      puts "You lose :( the song was #{@answer}"
    end
  end

  def render
    # return a string, game.render, the number of guesses left and the guess made
    puts @word.render
    puts @guessed_letters.join(" ")
    puts "#{@guesses} left"
  end

end


# binding.pry