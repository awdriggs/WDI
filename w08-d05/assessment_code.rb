require 'pry'

# friends = %w(Jerry Elaine Kramer George)

# x = friends.each do |friend|
#   friend += " eats cake"
# end

# y = friends.map do |friend|
#   friend += " eats cake"
# end

# #doesn't change anything!
# puts x

# #does change!
# puts y

# hashbrown = {potato: 'shredded', "oil" => "peanut"}


# davids_stuff = {
#   hats: [
#     'yankees fitted cap',
#     'beachhat',
#     'sweet visor'
#   ],
#   books: [
#     'Chicken Soup for the Dev Soul',
#     "O'Reilly Lean Cobol (the one with the boll weevil on the cover)",
#     'In Search of Lost Time'
#   ],
#   sunglasses: true,
#   snacks: {
#     drinks: [
#       'coffee',
#       'big gulps'
#     ],
#     chips: [
#       'funyuns',
#       'doritos',
#       'cheetos'
#     ],
#     healthy: [
#       'gorp',
#       'museli',
#       'soy chips'
#     ]
#   }
# }

# davids_stuff[:snacks][:chips][1]

def pied_piper(things)
  things.join(" | ")
end

a = pied_piper(['basketball', 'football', 'jai alai'])
p a

# binding.pry