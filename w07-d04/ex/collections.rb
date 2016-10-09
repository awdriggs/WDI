new_hash = {hello: "hi", "David" => "Brodsky"}

hash_access_hello = new_hash[:hello]

puts new_hash[:hello]

new_hash[:hello] = "hi guyz"
puts new_hash
new_hash.delete(:hello)
puts new_hash

new_hash[:hello] = "hello"

puts new_hash
