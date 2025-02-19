const gouvernorats = [
  {
    id: 1,
    name: 'Tunis',
    idhtml: 'area-11',
    location: 'Nord-est de la Tunisie, capitale du pays.',
    description: `Tunis, la capitale, est le cœur politique, économique et culturel du pays. La ville mêle modernité et histoire, avec ses avenues animées, ses centres d'affaires et sa Médina classée au patrimoine mondial de l'UNESCO. Les marchés traditionnels et les monuments historiques témoignent d'un riche passé. La ville est également connue pour ses festivals, son artisanat et sa cuisine variée.`,
    traditions: ['Festival international de Carthage', 'Artisanat du cuivre', 'Coutumes ramadanesques'],
    popularPlaces: ['Médina de Tunis', 'Musée du Bardo', 'Carthage'],
    popularDishes: ['Couscous au poisson', 'Ojja', 'Makroudh'],
    musicType: 'Malouf tunisien',
  },
  {
    id: 2,
    idhtml: 'area-51',
    name: 'Sousse',
    location: 'Centre-est, au bord de la Méditerranée.',
    description: `Sousse, surnommée "La Perle du Sahel", est célèbre pour ses plages et son patrimoine historique. La Médina de Sousse, entourée de remparts, est un site incontournable. La ville attire des visiteurs pour ses festivals, sa vie nocturne et ses traditions maritimes, en harmonie avec son riche passé culturel.`,
    traditions: ['Danses folkloriques', 'Fêtes maritimes', 'Artisanat de poterie'],
    popularPlaces: ['Ribat de Sousse', 'Port El Kantaoui', 'Plages de Sousse'],
    popularDishes: ['Méchouia', 'Kalb el louz', "Couscous à l'agneau"],
    musicType: 'Musique traditionnelle du Sahel',
  },
  {
    id: 3,
    idhtml: 'area-22',
    name: 'Bizerte',
    location: 'Nord, au bord de la Méditerranée.',
    description: `Bizerte est une ville portuaire combinant beauté naturelle et histoire. Sa kasbah, son vieux port et ses plages en font une destination prisée. La région est connue pour ses traditions maritimes et ses produits de la mer, offrant une expérience unique aux visiteurs.`,
    traditions: ['Pêche traditionnelle', 'Fêtes maritimes', 'Artisanat local'],
    popularPlaces: ['Vieux port', 'Cap Blanc', 'Ichkeul'],
    popularDishes: ['Poissons grillés', 'Briks aux fruits de mer', 'Couscous au poisson'],
    musicType: 'Musique folklorique maritime',
  },
  {
    id: 4,
    idhtml: 'area-21',
    name: 'Nabeul',
    location: 'Nord-est, dans la région du Cap Bon.',
    description: `Nabeul est réputée pour son artisanat, notamment la poterie et les produits en rose. La ville offre des plages magnifiques, des marchés animés et des traditions vivantes. Le Cap Bon, avec ses paysages pittoresques, est un véritable joyau naturel et culturel.`,
    traditions: ['Artisanat de poterie', "Distillation de fleur d'oranger", 'Festivals locaux'],
    popularPlaces: ['Hammamet', 'Korba', 'Kélibia'],
    popularDishes: ['Couscous au poulpe', 'Harissa maison', 'Salade méchouia'],
    musicType: 'Musique andalouse et chants populaires',
  },
  // Gouvernorats restants
  {
    id: 5,
    idhtml: 'area-52',
    name: 'Monastir',
    location: 'Centre-est, sur la côte méditerranéenne.',
    description: `Monastir est une ville côtière riche en histoire et en culture. Elle abrite des monuments emblématiques tels que le Ribat et le mausolée Bourguiba. Sa proximité avec la mer et son ambiance paisible en font une destination populaire pour les touristes.`,
    traditions: ['Artisanat textile', 'Festival de Monastir', 'Coutumes de mariage'],
    popularPlaces: ['Ribat de Monastir', 'Plage de Monastir', 'Port de plaisance'],
    popularDishes: ['Couscous au poisson', 'Méchouia', 'Plat de fruits de mer'],
    musicType: 'Musique traditionnelle tunisienne',
  },
  {
    id: 6,
    idhtml: 'area-61',
    name: 'Sfax',
    location: 'Sud-est, sur le littoral.',
    description: `Sfax est une ville dynamique, souvent appelée la capitale économique de la Tunisie. Sa médina animée, ses marchés et son port en font un centre culturel et commercial. Les traditions locales et les spécialités culinaires de Sfax témoignent de son riche patrimoine.`,
    traditions: ['Artisanat de pêche', 'Festival du malouf', 'Fêtes locales'],
    popularPlaces: ['Médina de Sfax', 'Îles Kerkennah', 'Port de Sfax'],
    popularDishes: ['Rouz Jerbi', 'Couscous au poisson', 'Biscuits locaux'],
    musicType: 'Malouf tunisien',
  },
  {
    id: 7,
    idhtml: 'area-81',
    name: 'Gabès',
    location: 'Sud-est, sur le golfe de Gabès.',
    description: `Gabès est connue pour être l'une des rares villes au monde à posséder des oasis côtières. Cette particularité en fait une région fascinante où le désert rencontre la mer. Les marchés regorgent de henné, épices et produits artisanaux, mettant en valeur le savoir-faire local.`,
    traditions: ['Artisanat de henné', 'Coutumes berbères', 'Festivals locaux'],
    popularPlaces: ['Oasis de Chenini', 'Souk de Gabès', 'Plage de Gabès'],
    popularDishes: ['Rouz Jerbi', 'Couscous au poulpe', 'Harissa traditionnelle'],
    musicType: 'Chants berbères et musique populaire',
  },
  {
    id: 8,
    idhtml: 'area-41',
    name: 'Kairouan',
    location: 'Centre de la Tunisie.',
    description: `Kairouan est le centre spirituel de la Tunisie, célèbre pour sa mosquée Okba Ibn Nafaa, l'un des plus anciens lieux de culte de l'islam. La ville est aussi connue pour ses tapis artisanaux et ses spécialités culinaires, notamment les makrouds, un délice sucré incontournable.`,
    traditions: ['Tissage de tapis', 'Coutumes religieuses', 'Festival du Makroudh'],
    popularPlaces: ['Grande Mosquée', 'Bassins des Aghlabides', 'Médina de Kairouan'],
    popularDishes: ['Makroudh', 'Couscous au poulet', 'Chorba'],
    musicType: 'Chants religieux et musique traditionnelle',
  },
  {
    id: 9,
    idhtml: 'area-72',
    name: 'Tozeur',
    location: 'Sud-ouest, près des oasis du désert.',
    description: `Tozeur est une porte d'entrée vers le désert et une région emblématique des oasis. Ses vastes palmeraies, ses dunes dorées et ses architectures en briques d'argile confèrent à la ville une atmosphère unique. Les habitants célèbrent leur culture à travers des festivals et des traditions bien ancrées.`,
    traditions: ['Cultures des dattes', "Artisanat de l'argile", 'Festivals sahariens'],
    popularPlaces: ['Oasis de Nefta', 'Chott el Jerid', 'Palmeraies de Tozeur'],
    popularDishes: ["Brik à l'œuf", 'Rouz jerbi', 'Chakchouka'],
    musicType: 'Musique saharienne et chants berbères',
  },
  {
    id: 10,
    idhtml: 'area-82',
    name: 'Mednine',
    location: 'Sud-est, près des frontières libyennes.',
    description: `Mednine est une région aux traditions ancrées et célèbre pour son architecture unique des ksour, ces anciens greniers fortifiés. Elle se distingue par son artisanat berbère et ses paysages désertiques époustouflants, combinant modernité et héritage culturel.`,
    traditions: ['Fabrication de tapis berbères', 'Festivals sahariens', 'Coutumes berbères'],
    popularPlaces: ['Ksour de Mednine', 'Ile de Djerba', 'Monts Matmata'],
    popularDishes: ['Couscous au poisson', 'Mechoui', 'Mloukhiya'],
    musicType: 'Chants berbères et musique saharienne',
  },
  {
    id: 11,
    idhtml: 'area-32',
    name: 'Jendouba',
    location: 'Nord-ouest, proche des montagnes et forêts.',
    description: `Jendouba est une région riche en paysages naturels et en sites historiques, comme Dougga, une des cités romaines les mieux conservées. La région attire les amoureux de la nature et d'histoire grâce à ses montagnes verdoyantes et ses traditions agricoles.`,
    traditions: ['Fêtes agricoles', 'Coutumes berbères', 'Artisanat local'],
    popularPlaces: ['Dougga', 'Aïn Draham', 'Barrage de Sidi Salem'],
    popularDishes: ['Couscous aux légumes', 'Lablabi', 'Pain traditionnel au four à bois'],
    musicType: 'Musique folklorique montagnarde',
  },
  {
    id: 12,
    idhtml: 'area-43',
    name: 'Sidi Bouzid',
    location: 'Centre-ouest, entre les plaines agricoles et le désert.',
    description: `Sidi Bouzid est un gouvernorat rural qui a joué un rôle clé dans les événements révolutionnaires de 2011. C'est une région agricole, connue pour ses récoltes de céréales et ses vastes étendues de champs. La région est également marquée par sa culture bédouine et ses traditions authentiques.`,
    traditions: ['Cérémonies de mariage traditionnelles', 'Fêtes agricoles', 'Coutumes berbères'],
    popularPlaces: ['Souk de Sidi Bouzid', 'Douz', 'Oasis de Chebika'],
    popularDishes: ['Couscous à la viande', 'Méchouia', 'Brichettes farcies'],
    musicType: 'Musique bédouine et folklore tunisien',
  },
  {
    id: 13,
    idhtml: 'area-73',
    name: 'Kébili',
    location: 'Sud-ouest, dans le désert tunisien.',
    description: `Kébili est le cœur du désert tunisien, célèbre pour ses palmeraies et ses oasis pittoresques. Les ksours, ces habitations traditionnelles en terre, font partie du paysage unique de la région. La ville est un passage pour ceux qui souhaitent explorer le Sahara tunisien.`,
    traditions: ['Artisanat du cuir', 'Festivals sahariens', 'Danses traditionnelles'],
    popularPlaces: ['Oasis de Kébili', 'Chott el Jerid', 'Matmata'],
    popularDishes: ['Couscous au mutton', 'Chorba', 'Tajine tunisien'],
    musicType: 'Musique saharienne et chants bédouins',
  },
  {
    id: 14,
    idhtml: 'area-83',
    name: 'Tataouine',
    location: 'Sud, aux portes du désert.',
    description: `Tataouine est célèbre pour ses paysages désertiques, ses constructions traditionnelles appelées ksour et son rôle historique dans le cinéma. La région est un carrefour entre l'histoire, le désert et les traditions berbères qui y sont bien ancrées.`,
    traditions: ['Artisanat du cuir', 'Coutumes berbères', 'Danses sahariennes'],
    popularPlaces: ['Château de Ksar Ouled Soltane', 'Chott el Jerid', 'Oasis de Tataouine'],
    popularDishes: ['Méchouia', 'Tajine berbère', 'Couscous au poulet'],
    musicType: 'Musique saharienne et musique berbère',
  },
  {
    id: 15,
    idhtml: 'area-22',
    name: 'Zaghouan',
    location: 'Nord-est, entre Tunis et la mer Méditerranée.',
    description: `Zaghouan est connue pour son cadre montagneux et son climat méditerranéen agréable. La ville est riche en vestiges historiques, notamment les ruines romaines de la ville antique de Zriba et les aqueducs. Sa montagne est également un site prisé pour les amoureux de la nature.`,
    traditions: ['Cérémonies religieuses', 'Marchés artisanaux', 'Coutumes de récoltes'],
    popularPlaces: ['Chutes de Zaghouan', 'Site archéologique de Zriba', 'Les montagnes de Zaghouan'],
    popularDishes: ['Couscous aux légumes', 'Lablabi', 'Gâteau tunisien au miel'],
    musicType: 'Musique folklorique et chants traditionnels',
  },
  {
    id: 16,
    idhtml: 'area-12',
    name: 'Ariana',
    location: 'Nord de la Tunisie, proche de Tunis.',
    description: `L'Ariana est une région urbaine très proche de Tunis, avec un mélange de modernité et de traditions. Elle est connue pour son développement rapide, ses parcs et son rôle comme centre résidentiel et commercial pour la capitale. L'Ariana abrite aussi de nombreux événements culturels et sociaux.`,
    traditions: ['Fêtes locales', 'Coutumes familiales', 'Artisanat de poterie'],
    popularPlaces: ['Parc du Belvédère', 'Musée national de Carthage', 'Le Lac de Tunis'],
    popularDishes: ['Couscous', 'Salade tunisienne', 'Méchouia'],
    musicType: 'Musique moderne tunisienne et Malouf',
  },
  {
    id: 17,
    idhtml: 'area-31',
    name: 'Beja',
    location: 'Nord-ouest de la Tunisie, près de la frontière algérienne.',
    description: `Beja est une région agricole, entourée de collines et de plaines fertiles. C’est une zone idéale pour la culture du blé, des légumes et des fruits. La ville elle-même est tranquille et charmante, avec une médina historique et des marchés locaux qui témoignent de la culture tunisienne traditionnelle.`,
    traditions: ['Fête de la récolte', 'Artisanat du cuir', 'Coutumes agricoles'],
    popularPlaces: ['Medina de Beja', 'Kef', 'Châteaux romains'],
    popularDishes: ['Couscous aux légumes', 'Makroud', 'Salade tunisienne'],
    musicType: 'Musique folklorique tunisienne',
  },
  {
    id: 18,
    idhtml: 'area-42',
    name: 'Kasserine',
    location: 'Centre-ouest de la Tunisie, proche des montagnes.',
    description: `Kasserine est une région de montagne et de désert, avec une forte présence historique datant de l'Empire romain et de la période islamique. La ville de Kasserine elle-même est un centre de commerce et de culture, et les alentours sont parfaits pour les amateurs de randonnée et d'aventure.`,
    traditions: ['Artisanat local', 'Fêtes historiques', 'Musique berbère'],
    popularPlaces: ['Mont Chambi', 'Ruines romaines de Sbeitla', 'Oasis de Kasserine'],
    popularDishes: ['Couscous au poisson', 'Harissa', 'Sweets berbères'],
    musicType: 'Musique berbère traditionnelle et folklore',
  },
  {
    id: 19,
    idhtml: 'area-53',
    name: 'Mahdia',
    location: 'Côte est, sur la mer Méditerranée.',
    description: `Mahdia est une ville historique, ancienne capitale de la dynastie fatimide, connue pour ses plages magnifiques et son atmosphère paisible. La médina de Mahdia est classée au patrimoine mondial, et la région abrite également des sites archéologiques romains et des monuments religieux importants.`,
    traditions: ['Fête de la pêche', 'Artisanat du cuir', 'Coutumes maritimes'],
    popularPlaces: ['Médina de Mahdia', 'Plages de Mahdia', 'Phare de Mahdia'],
    popularDishes: ['Couscous aux fruits de mer', 'Poissons grillés', 'Méchouia'],
    musicType: 'Musique andalouse et musique du Sahel',
  },
  {
    id: 20,
    idhtml: 'area-34',
    name: 'Siliana',
    location: "Nord-ouest, au pied des montagnes de l'Atlas.",
    description: `Siliana est une région montagneuse, caractérisée par ses paysages verdoyants, ses forêts et ses cultures agricoles. La ville et ses alentours sont riches en histoire, notamment à travers les vestiges de la civilisation romaine. Les habitants de Siliana sont profondément ancrés dans les traditions locales.`,
    traditions: ['Fêtes des récoltes', 'Artisanat en laine', 'Coutumes agricoles'],
    popularPlaces: ['Mont Atlas', 'Ruines de Thuburbo Majus', 'Souk de Siliana'],
    popularDishes: ['Couscous aux légumes', 'Brik', 'Méchouia'],
    musicType: 'Musique traditionnelle et folklorique tunisienne',
  },
  {
    id: 21,
    idhtml: 'area-71',
    name: 'Gafsa',
    location: 'Sud-ouest, dans la région du Chott el Jerid.',
    description: `Gafsa est une ville antique avec un riche patrimoine historique, en particulier à travers ses sites archéologiques romains. C’est également une région riche en phosphates, une industrie clé pour l’économie tunisienne. Gafsa est entourée de paysages désertiques, parfaits pour l'exploration.`,
    traditions: ['Artisanat en pierres', "Célébrations de l'agriculture", 'Fêtes du désert'],
    popularPlaces: ['Chott el Jerid', 'Ruines de Gafsa', 'Oasis de Gafsa'],
    popularDishes: ['Couscous au mouton', 'Harissa', 'Lablabi'],
    musicType: 'Chants du désert et musique traditionnelle',
  },

  {
    id: 22,
    idhtml: 'area-82',
    name: 'Medenine',
    location: 'Sud-est, à proximité de la frontière libyenne.',
    description: `Medenine est une région de tradition saharienne, marquée par ses paysages désertiques et ses oasis. La ville est un carrefour entre la Tunisie et la Libye, et elle possède de nombreux ksours et villages berbères qui témoignent de son passé historique et de ses liens avec les cultures nomades.`,
    traditions: ['Artisanat du désert', 'Fêtes berbères', 'Traditions sahariennes'],
    popularPlaces: ['Chott el Jerid', 'Douz', 'Oasis de Medenine'],
    popularDishes: ['Couscous au poulet', 'Chorba', 'Tajine saharien'],
    musicType: 'Musique saharienne et chants traditionnels',
  },
 
  {
    id: 23,
    name: 'Béja',
    idhtml: 'area-31',
    location: 'Nord-ouest, entre plaines et collines.',
    description: `Béja est une région agricole avec une riche histoire romaine et une grande diversité naturelle. Elle est particulièrement connue pour les ruines antiques de Dougga et son atmosphère paisible.`,
    traditions: ['Coutumes agricoles', 'Fêtes locales', 'Artisanat traditionnel'],
    popularPlaces: ['Dougga', 'Barrage de Béja', 'Médina de Béja'],
    popularDishes: ['Couscous aux légumes', 'Lablabi', 'Brik'],
    musicType: 'Musique folklorique',
  },
  {
    id: 24,
    idhtml: 'area-13',
    name: 'Ben Arous',
    location: 'Sud de la capitale, Tunis.',
    description: `Ben Arous est un gouvernorat moderne et industriel, situé à proximité de la capitale. Il abrite des zones urbaines dynamiques ainsi que des espaces naturels comme le parc de Borj Cédria. C'est une région en plein essor économique avec des infrastructures bien développées.`,
    traditions: ['Coutumes de mariage', 'Festivals culturels', 'Artisanat local'],
    popularPlaces: ['Parc de Borj Cédria', 'Hammam Lif', 'Côtes de Radès'],
    popularDishes: ['Tajine malsouka', 'Chorba frik', 'Couscous au poulet'],
    musicType: 'Musique traditionnelle et chants modernes',
  }
  

];
