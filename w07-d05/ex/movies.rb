# Create a Movies Class on your own

# The Movie class should have the following attributes using getters and setters (mutators):
#   title
#   year
#   include_year (bool)
# These will be instance variables (the @my_variable = 42 syntax).
# You will also include one method (aka a behavior), named full_title()
# If include_year = true, full_title() should include the year released in what is returned. Otherwise, it should only return the title of the movie.
# Instantiate this class using MyClass.new() with the title and year arguments.
# Change the title and call the full_title() method
# Bonus: write a method that returns the number of years since the movie was released

# Bonus 2: add a "running_time" attribute to your class. Then write a method that tells when you would finish watching the movie if you started it now

require 'pry'
require 'date'

class Movie
  def initialize( title, year, include_year, runtime )
    @title = title
    @year = year.to_i
    @include_year = include_year.to_i
    @runtime = runtime.to_i
  end

  # getters
  def full_title
    rString = "#{@title}"
    
    if @include_year
        rString += " (#{@year})"
    end

    return rString
  end

  def time_since_release
    d = DateTime.now()

    return d.year - @year
  end

  def watch_now
    d = DateTime.now()

  end

  #setters
  def title= (new_title)
    @title = new_title
  end

  def year= (new_year)
    @year = new_year
  end

  def include_year= (new_include_year)
    @include_year = new_include_year
  end

  def runtime= (new_runtime)
    @runtime = new_runtime
  end


end

binding.pry