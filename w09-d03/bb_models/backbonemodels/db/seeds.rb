# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
CheeseSandwich.create([
  {cheese:"cheddar", bread:"wheat", mayo: false},
  {cheese:"havarti", bread:"cibatta", mayo: true},
  {cheese:"brie", bread:"baugette", mayo: false},
  {cheese:"stilton", bread:"country loaf", mayo: true},
  {cheese:"fontina", bread:"focaccia", mayo: false},
  {cheese:"gouda", bread:"rye", mayo: true}
]);
