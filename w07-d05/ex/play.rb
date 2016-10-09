require 'pry'

class Letterpress
  def initialize( title, content )
    @title = title
    @content = content
  end

  # getters
  def title
    return @title
  end

  def content
    return @content
  end

  # setters
  def title=(new_title)
    @title = new_title
  end

  def content=(new_content)
    @content=(new_content)
  end

end

binding.pry