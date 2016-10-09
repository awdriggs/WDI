# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Item.create({
  description: "David is the coolest", 
  completed: false
})

Item.create({
  description: "Welcome back Pavan", 
  completed: false
})

Item.create({
  description: "Akira's new computer is suite", 
  completed: false
})

Item.create({
  description: "Will is hungry", 
  completed: false
})
