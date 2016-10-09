# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

lions = Lion.create([
  {
    name: 'Mufasa',
    birthdate: '9/3/1980',
    about: %Q<Mufasa, Simba's father, is King of the Pride Lands. He was killed by Scar, who furiously conspired against his older brother in an attempt to end his reign and seize the throne. After saving Simba, during a massive stampede of wildebeests caused by the hyenas under Scar's order, Mufasa was caused by Scar to fall from a cliff to be trampled to death. Scar gains a tyrannical kingship over Pride Rock after exiling Simba from home, having convinced him that he was responsible for Mufasa's untimely death. Mufasa reappears as a ghostly apparition in the clouds commanding Simba to return home. His voice is heard again following the death of his evil brother, telling Simba to "Remember who you are".>,
    weight: 900,
    health: 100,
    health_notes: 'Avoid cliffs'
  },
  {
    name: 'Scar',
    birthdate: '6/8/1982',
    about: %Q<Scar is the main antagonist in The Lion King, musical and the majority of the franchise. He is the younger brother of Mufasa and the uncle of Simba. The name, "Scar", refers to the scar on his left eye. He is also very self-arrogant and will do whatever it takes to make himself the new king>,
    weight: 700,
    health: 90,
    health_notes: 'Watch out for fires'
  },
    {
    name: 'Simba',
    birthdate: '6/8/1990',
    about: %Q<Simba is the son of Mufasa and Sarabi.>,
    weight: 900,
    health: 100,
    health_notes: 'Avoid cliffs'
  },
])

panthers = Panther.create([
  {
    name: 'Bagheera',
    claw_length: 8
  }
])

tamers = LionTamer.create([
  {
    name: 'Roydon',
    experience: 9,
    living: true
  },
  {
    name: 'Cosmo',
    experience: 5,
    living: true
  },
  {
    name: 'Zhen',
    experience: 3,
    living: true
  },
  {
    name: 'Thom',
    experience: 6,
    living: true
  },
  {
    name: 'Adam',
    experience: 10,
    living: true
  }
])

CatToy.create( name: 'bowling ball', toyable_type: 'Lion', toyable_id: 1)
