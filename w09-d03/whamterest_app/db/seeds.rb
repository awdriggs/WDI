# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Post.create({
	title: "First post",
	author: "David",
	image: "http://www.rescuepost.com/photos/uncategorized/2008/08/13/david.jpg",
	content: "The real statue of David",
	category: "LULZ"
})