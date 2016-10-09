# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

names = ["Pablo Picasso", "Vincent Van Gogh", "Jean-Michel Basquiat"]
photo = [
	"http://i.telegraph.co.uk/multimedia/archive/01773/pablo-picasso_1773978b.jpg",
	"http://www.artcyclopedia.org/art/van-gogh-self.jpg",
	"http://urbanepop.files.wordpress.com/2012/08/jean_michel_basquiat-hr1.jpg"
]
nationality = ["Spain", "Netherlands", "USA"]
birthyear = [1881, 1853, 1960]
description = [
	"Pablo Ruiz y Picasso, also known as Pablo Picasso, was a Spanish painter, sculptor, printmaker, ceramicist, stage designer, poet and playwright who spent most of his adult life in France.",
	"Vincent Willem van Gogh was a Post-Impressionist painter of Dutch origin whose work—notable for its rough beauty, emotional honesty, and bold color—had a far-reaching influence on 20th-century art.",
	"Jean-Michel Basquiat was an American artist. Basquiat first achieved notoriety as part of SAMO, an informal graffiti group who wrote enigmatic epigrams in the cultural hotbed of the Lower East Side of Manhattan, New York City during the late 1970s where the hip hop, post-punk and street art movements had coalesced."
]

paintings = [
	["Guernica", "Les Demoiselles d'Avignon"],
	["The Starry Night", "Cafe Terrace at Night"],
	["Irony of Negro Policeman", "Hollywood Africans"]
]
painting_photo = [
	[
		"http://2.bp.blogspot.com/-dlllLhl8c7s/UnrFUvtgMxI/AAAAAAAARXQ/Cv8QKBgfVD4/s1600/guernica.jpg",
		"http://www.moma.org/explore/conservation/demoiselles/images/demoiselles_NewFINAL.jpg"
	],
	[
		"http://atomictoasters.com/wp-content/gallery/professors-shutdown-images/starry-night.jpg",
		"http://upload.wikimedia.org/wikipedia/commons/0/09/Van_Gogh_-_Terrasse_des_Caf%C3%A9s_an_der_Place_du_Forum_in_Arles_am_Abend1.jpeg"
	],
	[
		"http://uploads7.wikiart.org/images/jean-michel-basquiat/ironew-york-of-the-negro-policeman.jpg!Blog.jpg",
		"http://uploads0.wikiart.org/images/jean-michel-basquiat/hollywood-africans.jpg"
	]
]
year_made = [
	[1937, 1907],
	[1889, 1888],
	[1981, 1983]
]

pablo = Artist.create({
	name: names[0],
	img_url: photo[0],
	nationality: nationality[0],
	birth_year: birthyear[0],
	description: description[0]
})

gogh = Artist.create({
	name: names[1],
	img_url: photo[1],
	nationality: nationality[1],
	birth_year: birthyear[1],
	description: description[1]
})

basquiat = Artist.create({
	name: names[2],
	img_url: photo[2],
	nationality: nationality[2],
	birth_year: birthyear[2],
	description: description[2]
})

pablo.paintings.create({
	title: paintings[0][0],
	img_url: painting_photo[0][0],
	year_made: year_made[0][0]
})

pablo.paintings.create({
	title: paintings[0][1],
	img_url: painting_photo[0][1],
	year_made: year_made[0][1]
})

gogh.paintings.create({
	title: paintings[1][0],
	img_url: painting_photo[1][0],
	year_made: year_made[1][0]
})

gogh.paintings.create({
	title: paintings[1][1],
	img_url: painting_photo[1][1],
	year_made: year_made[1][1]
})

basquiat.paintings.create({
	title: paintings[2][0],
	img_url: painting_photo[2][0],
	year_made: year_made[2][0]
})

basquiat.paintings.create({
	title: paintings[2][1],
	img_url: painting_photo[2][1],
	year_made: year_made[2][1]
})

whit = Museum.create({
	name: "Whitney Museum",
	description: "The Whitney Museum of American Art — known as 'The Whitney' — is a New York City art museum with a focus on 20th- and 21st-century American art.",
	address: "945 Madison Ave, Manhattan, NY 10021",
	img_url: "http://whitney.org/image_columns/0044/7662/screen-shot-2013-05-15-at-1.37.jpg"
})

moma = Museum.create({
	name: "Museum of Modern Art",
	description: "The Museum of Modern Art is an art museum located in Midtown Manhattan in New York City between Fifth and Sixth Avenues.",
	address: "11 W 53rd St, New York, NY 10019",
	img_url: "http://upload.wikimedia.org/wikipedia/commons/9/9f/Moma-1-logo.jpg"
})

frick = Museum.create({
	name: "The Frick Collection",
	description: "The Frick Collection is an art museum located in the Henry Clay Frick House on the Upper East Side in New York City on Fifth Avenue between 70th and 71st Streets. It houses the collection of industrialist Henry Clay Frick.",
	address: "1 E 70th St, New York, NY 10021",
	img_url: "http://www.bbhsmuseum.org/dennis_puleston/Images/FrickCollection.jpg"
})

whit.artists.push(pablo, gogh)
moma.artists.push(gogh, basquiat)
frick.artists.push(pablo, gogh, basquiat)