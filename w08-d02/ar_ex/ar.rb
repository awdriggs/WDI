require 'active_record'

#!/usr/bin/env ruby

require 'pry'

require 'active_record'

ActiveRecord::Base.establish_connection(
  adapter:  'postgresql',
  database: 'activerecord_cli',
  host:     'localhost'
)

class Cake < ActiveRecord::Base
  belongs_to :user
  belongs_to :flour
end

class User < ActiveRecord::Base
  has_many :cakes
  end

class Flour < ActiveRecord::Base
  has_many :cakes
end

binding.pry
