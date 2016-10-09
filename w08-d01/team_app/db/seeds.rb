# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Team.create({
  name: "Royals", 
  photo_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0CAcQjRxqFQoTCP_q8q-T_MYCFUk7PgodA3gD2g&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3AKansas_City_Royals.svg&ei=qpS2Vf_tNsn2-AGD8I3QDQ&bvm=bv.98717601,d.aWw&psig=AFQjCNFJStmP6gSaAeSPbBENHQzD06zXqA&ust=1438115369482360",
  hometown: "Kansas City",
  number_of_championships: 1
})

Team.create({
  name: "Tigers", 
  photo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Detroit_tigers_textlogo.svg/250px-Detroit_tigers_textlogo.svg.png",
  hometown: "Detroit",
  number_of_championships: 4
})

Team.create({
  name: "Indians", 
  photo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Indians_Logo_-_2014_Season.svg/152px-Indians_Logo_-_2014_Season.svg.png",
  hometown: "Cleveland",
  number_of_championships: 2
})

Team.create({
  name: "Twins", 
  photo_url: "https://upload.wikimedia.org/wikipedia/commons/6/61/MinnesotaTwins.PNG",
  hometown: "Minneapolis",
  number_of_championships: 3
})

Team.create({
  name: "White Sox", 
  photo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Chicago_White_Sox.svg/181px-Chicago_White_Sox.svg.png",
  hometown: "Chicago",
  number_of_championships: 3
})
