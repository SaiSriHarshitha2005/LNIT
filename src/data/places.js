const places = {
    devarapalli: {
        id: 'devarapalli',
        name: 'Devarapalli',
        tagline: 'The Cascade Kingdom',
        heroImage: 'https://image2url.com/r2/default/images/1772231133529-84ac8f03-3eea-4f86-be19-b9d6dd165565.jpeg',
        destinations: [
            {
                id: 'main-falls',
                name: 'Devarapalli Main Falls',
                tagline: 'A dramatic cascade tucked in forested hills',
                description: 'Scenic falls surrounded by dense green cover — a peaceful picnic and photography spot.',
                image: 'https://image2url.com/r2/default/images/1772231133529-84ac8f03-3eea-4f86-be19-b9d6dd165565.jpeg',
                stats: { alt: 'Waterfall', dist: '10km from center', fee: 'Free' },
            },
            {
                id: 'hidden-pools',
                name: 'The Hidden Pools',
                tagline: 'Pristine natural swimming holes',
                description: 'Quiet, secluded pools fed by the upper cascades, perfect for a refreshing dip.',
                image: 'https://image2url.com/r2/default/images/1772231133529-84ac8f03-3eea-4f86-be19-b9d6dd165565.jpeg',
                stats: { alt: 'Base level', dist: '12km from center', fee: 'Free' },
            }
        ],
        culture: [
            {
                name: "Konda Reddy",
                focus: "Forest Foraging & Bamboo Craft",
                description: "The indigenous Konda Reddy tribe relies completely on the pristine forests surrounding the falls, known for their deep knowledge of medicinal herbs.",
                image: "/images/araku_artisan.png",
                color: "bg-emerald-500"
            }
        ],
        experiences: [
            {
                id: 'waterfall-trek',
                title: "Trek to the Summit Falls",
                description: "A thrilling hike through dense foliage to reach the absolute top of the Devarapalli cascades.",
                image: 'https://image2url.com/r2/default/images/1772231133529-84ac8f03-3eea-4f86-be19-b9d6dd165565.jpeg',
                highlights: ["Guided forest walk", "Bird watching", "Natural pool swimming"]
            }
        ]
    },
    silathoranam: {
        id: 'silathoranam',
        name: 'Silathoranam',
        tagline: 'The Ancient Archways',
        heroImage: 'https://image2url.com/r2/default/images/1772231223890-861146b4-001e-4df1-a97d-a6eb353fd2df.jpg',
        destinations: [
            {
                id: 'rock-arch',
                name: 'The Great Rock Arch',
                tagline: 'A pre-Cambrian marvel',
                description: 'Naturally formed millions of years ago, this stone archway is one of the rarest geological formations in the world.',
                image: 'https://image2url.com/r2/default/images/1772231223890-861146b4-001e-4df1-a97d-a6eb353fd2df.jpg',
                stats: { alt: '853 m', dist: '0km from center', fee: 'Free' },
            }
        ],
        culture: [
            {
                name: "Temple Artisans",
                focus: "Stone Sculpting",
                description: "Generations of stone workers who have maintained the sacred temples and pathways in the Tirumala hills.",
                image: "/images/artisan.png",
                color: "bg-orange-500"
            }
        ],
        experiences: [
            {
                id: 'heritage-walk',
                title: "Geological Heritage Walk",
                description: "Walk the beautiful landscaped gardens at dawn while a guide explains the millions of years of history carved into the rocks.",
                image: 'https://image2url.com/r2/default/images/1772231223890-861146b4-001e-4df1-a97d-a6eb353fd2df.jpg',
                highlights: ["Sunrise photography", "Botanical garden tour", "Geological history"]
            }
        ]
    },
    belum: {
        id: 'belum',
        name: 'Belum Caves',
        tagline: 'The Subterranean Labyrinth',
        heroImage: 'https://image2url.com/r2/default/images/1772231341093-19d1c3db-d656-435c-ab1e-b1ddd6dd110f.jpg',
        destinations: [
            {
                id: 'patalaganga',
                name: 'Patalaganga',
                tagline: 'The mysterious underground stream',
                description: 'The deepest known point of the cave system featuring an icy, dark river.',
                image: 'https://image2url.com/r2/default/images/1772231341093-19d1c3db-d656-435c-ab1e-b1ddd6dd110f.jpg',
                stats: { alt: 'Underground', dist: '1.5km deep', fee: 'Rs. 65' },
            },
            {
                id: 'meditation-hall',
                name: 'Monks Chamber',
                tagline: 'Ancient Buddhist meditation halls',
                description: 'Vast caverns where ancient monks retreated from the world to meditate.',
                image: 'https://image2url.com/r2/default/images/1772231341093-19d1c3db-d656-435c-ab1e-b1ddd6dd110f.jpg',
                stats: { alt: 'Underground', dist: '0.5m deep', fee: 'Rs. 65' },
            }
        ],
        culture: [
            {
                name: "Cave Historians",
                focus: "Speleology & Preservation",
                description: "The local guides and researchers who protect the delicate limestone formations and study the ancient inscriptions.",
                image: "/images/araku_artisan.png",
                color: "bg-purple-500"
            }
        ],
        experiences: [
            {
                id: 'deep-caving',
                title: "Deep Cave Exploration",
                description: "Go beyond the illuminated paths with expert cavers into the uncharted, pitch-black chambers.",
                image: 'https://image2url.com/r2/default/images/1772231341093-19d1c3db-d656-435c-ab1e-b1ddd6dd110f.jpg',
                highlights: ["Headlamp exploration", "Stalactite identification", "Total darkness meditation"]
            }
        ]
    },
    yaganti: {
        id: 'yaganti',
        name: 'Yaganti Temple',
        tagline: 'Spiritual Valleys',
        heroImage: 'https://image2url.com/r2/default/images/1772232955441-d94800cd-238a-40ab-934a-90404def5b3d.jpg',
        destinations: [
            {
                id: 'main-temple',
                name: 'Uma Maheshwara Temple',
                tagline: 'The courtyard of the Growing Nandi',
                description: 'The primary 15th-century temple complex renowned for its unceasingly growing stone bull idol.',
                image: 'https://image2url.com/r2/default/images/1772232955441-d94800cd-238a-40ab-934a-90404def5b3d.jpg',
                stats: { alt: 'Valley Base', dist: '0km from center', fee: 'Free' },
            }
        ],
        culture: [
            {
                name: "Vijayanagara Weavers",
                focus: "Temple Silks & Handlooms",
                description: "Weavers producing the vibrant ceremonial cloths used specifically for the temple deities during massive festivals.",
                image: "/images/artisan.png",
                color: "bg-yellow-500"
            }
        ],
        experiences: [
            {
                id: 'festival-participation',
                title: "Maha Shivaratri Celebrations",
                description: "Join tens of thousands of pilgrims in the grandest annual festival, complete with massive chariots and night-long chants.",
                image: 'https://image2url.com/r2/default/images/1772232955441-d94800cd-238a-40ab-934a-90404def5b3d.jpg',
                highlights: ["Chariot pulling", "Traditional music", "Night vigils"]
            }
        ]
    },
    kashipatnam: {
        id: 'kashipatnam',
        name: 'Kashipatnam',
        tagline: 'The Gateway Hamlet',
        heroImage: 'https://image2url.com/r2/default/images/1772231693126-ded327ce-602b-49d4-8102-f74c360aafbf.jpg',
        destinations: [
            {
                id: 'niger-fields',
                name: 'The Yellow Valleys',
                tagline: 'Endless fields of niger flowers',
                description: 'Vast tracts of agricultural land that burst into brilliant yellow blooms every winter.',
                image: 'https://image2url.com/r2/default/images/1772231693126-ded327ce-602b-49d4-8102-f74c360aafbf.jpg',
                stats: { alt: '900m', dist: '5km from center', fee: 'Free' },
            }
        ],
        culture: [
            {
                name: "Valmiki",
                focus: "Agriculture & Beekeeping",
                description: "The primary agricultural community here, famous for harvesting the wild honey from the surrounding forests.",
                image: "/images/araku_artisan.png",
                color: "bg-emerald-500"
            }
        ],
        experiences: [
            {
                id: 'honey-harvest',
                title: "Wild Honey Harvesting",
                description: "Follow the local tribal beekeepers into the forest to witness the delicate art of extracting wild forest honey.",
                image: 'https://image2url.com/r2/default/images/1772231693126-ded327ce-602b-49d4-8102-f74c360aafbf.jpg',
                highlights: ["Forest trekking", "Bee tracking", "Raw honey tasting"]
            }
        ]
    },
    diguva_ahobila: {
        id: 'diguva_ahobila',
        name: 'Diguva Ahobila',
        tagline: 'The Pillar of Faith',
        heroImage: 'https://image2url.com/r2/default/images/1772231793065-e050aa9e-39d7-4722-9d1a-8f7dc0de9c60.jpg',
        destinations: [
            {
                id: 'lower-shrine',
                name: 'Prahlada Varada Temple',
                tagline: 'The magnificent lower shrine',
                description: 'Featuring breathtaking Vijayanagara architecture and intricate carvings of mythical beasts.',
                image: 'https://image2url.com/r2/default/images/1772231793065-e050aa9e-39d7-4722-9d1a-8f7dc0de9c60.jpg',
                stats: { alt: 'Foothills', dist: '0km from center', fee: 'Free' },
            }
        ],
        culture: [
            {
                name: "Chenchu",
                focus: "Forest Protection & Archery",
                description: "The indigenous forest dwellers who have served as the traditional protectors of the Ahobilam temples for centuries.",
                image: "/images/araku_artisan.png",
                color: "bg-red-500"
            }
        ],
        experiences: [
            {
                id: 'nine-temple-trek',
                title: "The Nava Narasimha Trek",
                description: "A grueling, spiritual two-day trek through dense tiger-reserve forests to visit all nine hilltop shrines.",
                image: 'https://image2url.com/r2/default/images/1772231793065-e050aa9e-39d7-4722-9d1a-8f7dc0de9c60.jpg',
                highlights: ["Deep jungle hiking", "Ancient shrine visits", "Camping"]
            }
        ]
    },
    etikoppaka: {
        id: 'etikoppaka',
        name: 'Etikoppaka',
        tagline: 'The Village of Colors',
        heroImage: 'https://image2url.com/r2/default/images/1772230939034-32a99772-f64a-4388-abff-2c4e1d9ed146.webp',
        destinations: [
            {
                id: 'toy-street',
                name: 'Artisan Row',
                tagline: 'The heart of Lacquer craft',
                description: 'A bustling street lined with workshops where you can watch the famous wooden toys being turned and painted.',
                image: 'https://image2url.com/r2/default/images/1772230939034-32a99772-f64a-4388-abff-2c4e1d9ed146.webp',
                stats: { alt: 'Plains', dist: '0km from center', fee: 'Free' },
            }
        ],
        culture: [
            {
                name: "Toy Makers",
                focus: "Lacquer & Turn-Wood Craft",
                description: "Generations of artisans utilizing natural vegetable dyes and soft ankudu wood to create world-famous eco-friendly toys.",
                image: "/images/araku_artisan.png",
                color: "bg-orange-500"
            }
        ],
        experiences: [
            {
                id: 'toy-workshop',
                title: "Masterclass: Lacquer Toy Making",
                description: "Sit down with a master craftsman and carve, dye, and polish your own traditional Ettikoppaka spinning top.",
                image: 'https://image2url.com/r2/default/images/1772230939034-32a99772-f64a-4388-abff-2c4e1d9ed146.webp',
                highlights: ["Wood turning", "Natural dye mixing", "Take-home craft"]
            }
        ]
    },
    ananthagiri: {
        id: 'ananthagiri',
        name: 'Ananthagiri Hills',
        tagline: 'The Emerald Estates',
        heroImage: 'https://image2url.com/r2/default/images/1772231922770-b4100794-36f4-40c6-b010-2b96754ed027.jpg',
        destinations: [
            {
                id: 'coffee-estates',
                name: 'The Grand Terraces',
                tagline: 'Miles of shade-grown coffee',
                description: 'Endless rolling hills covered in dense coffee plantations and pepper vines.',
                image: 'https://image2url.com/r2/default/images/1772231922770-b4100794-36f4-40c6-b010-2b96754ed027.jpg',
                stats: { alt: '1168m', dist: '2km from center', fee: 'Free' },
            }
        ],
        culture: [
            {
                name: "Bagata",
                focus: "Coffee Cultivation",
                description: "The primary cultivators of the world-renowned organic coffee that grows under the forest canopy.",
                image: "/images/araku_artisan.png",
                color: "bg-brand-500"
            }
        ],
        experiences: [
            {
                id: 'coffee-tour',
                title: "Bean to Cup Plantation Safari",
                description: "Walk the estates, pick the cherries, watch the pulping process, and end with a fresh brewed tasting session.",
                image: 'https://image2url.com/r2/default/images/1772231922770-b4100794-36f4-40c6-b010-2b96754ed027.jpg',
                highlights: ["Estate walking", "Coffee processing", "Professional cupping"]
            }
        ]
    },
    panchadarla: {
        id: 'panchadarla',
        name: 'Panchadarla',
        tagline: 'The Five Streams',
        heroImage: 'https://image2url.com/r2/default/images/1772232130272-998eefbf-b713-4aaf-944b-ec278ba7fc81.jpeg',
        destinations: [
            {
                id: 'the-convergence',
                name: 'The Sacred Pools',
                tagline: 'Where five waters meet',
                description: 'The mystical site where a single underground spring divides into five distinct, perennial streams.',
                image: 'https://image2url.com/r2/default/images/1772232130272-998eefbf-b713-4aaf-944b-ec278ba7fc81.jpeg',
                stats: { alt: 'Valley Base', dist: '0km from center', fee: 'Free' },
            }
        ],
        culture: [
            {
                name: "Priests of Dharla",
                focus: "Ritual & Folklore",
                description: "The caretakers of the ancient Kalinga-style Shiva temple situated right beside the roaring streams.",
                image: "/images/artisan.png",
                color: "bg-blue-500"
            }
        ],
        experiences: [
            {
                id: 'temple-purification',
                title: "Dawn Purification Rituals",
                description: "Participate in the quiet, ancient cleansing rituals at dawn by the main stream before entering the temple.",
                image: 'https://image2url.com/r2/default/images/1772232130272-998eefbf-b713-4aaf-944b-ec278ba7fc81.jpeg',
                highlights: ["Sacred bathing", "Temple bells", "Spiritual guidance"]
            }
        ]
    },
    bojjana_konda: {
        id: 'bojjana_konda',
        name: 'Bojjana Konda',
        tagline: 'The Hill of Awakening',
        heroImage: 'https://image2url.com/r2/default/images/1772232221700-c409d47f-b3df-4a9d-ab7e-fea101ea9d1b.webp',
        destinations: [
            {
                id: 'maha-stupa',
                name: 'The Great Rock-Cut Stupa',
                tagline: 'A monolithic marvel',
                description: 'A massive, perfectly domed stupa carved entirely out of the living bedrock of the hill.',
                image: 'https://image2url.com/r2/default/images/1772232221700-c409d47f-b3df-4a9d-ab7e-fea101ea9d1b.webp',
                stats: { alt: 'Hilltop', dist: '1km from center', fee: 'Rs. 15' },
            }
        ],
        culture: [
            {
                name: "Buddhist Heritage",
                focus: "Archaeology & Monastic History",
                description: "Though uninhabited now, the culture of the ancient monks from the 4th Century AD is preserved in the rock carvings.",
                image: "/images/araku_artisan.png",
                color: "bg-yellow-600"
            }
        ],
        experiences: [
            {
                id: 'sunset-meditation',
                title: "Sunset Meditation by the Stupas",
                description: "A profound experience sitting by the ancient stupas overlooking the lush valley as the sun sets.",
                image: 'https://image2url.com/r2/default/images/1772232221700-c409d47f-b3df-4a9d-ab7e-fea101ea9d1b.webp',
                highlights: ["Guided mindfulness", "Panoramic valley views", "Historical silence"]
            }
        ]
    },
    maredumilli: {
        id: 'maredumilli',
        name: 'Maredumilli',
        tagline: 'The Wild Heart',
        heroImage: 'https://image2url.com/r2/default/images/1772232326999-ef3d8509-0e6d-41c7-9543-5c54a2f0b19f.jpg',
        destinations: [
            {
                id: 'jalatarangini',
                name: 'Jalatarangini Waterfalls',
                tagline: 'The cascading crystal tiers',
                description: 'A multi-tiered waterfall nestled deep inside the eco-tourism jungle zone.',
                image: 'https://image2url.com/r2/default/images/1772232326999-ef3d8509-0e6d-41c7-9543-5c54a2f0b19f.jpg',
                stats: { alt: 'Deep Forest', dist: '15km from center', fee: 'Rs. 50' },
            }
        ],
        culture: [
            {
                name: "Konda Reddy",
                focus: "Eco-tourism & Bamboo Crafts",
                description: "The deeply traditional tribes who manage the entire tourism network here, fiercely protecting their forests.",
                image: "/images/araku_artisan.png",
                color: "bg-brand-500"
            }
        ],
        experiences: [
            {
                id: 'bamboo-chicken',
                title: "Authentic Bongulo Chicken",
                description: "Sit around a campfire with the tribals and learn how to slow-roast spiced chicken inside green bamboo stems.",
                image: 'https://image2url.com/r2/default/images/1772232326999-ef3d8509-0e6d-41c7-9543-5c54a2f0b19f.jpg',
                highlights: ["Campfire cooking", "Tribal storytelling", "Jungle night safari"]
            }
        ]
    },
    horsley: {
        id: 'horsley',
        name: 'Horsley Hills',
        tagline: 'The Sky Island',
        heroImage: 'https://image2url.com/r2/default/images/1772232404132-be866c29-3d29-4933-bad5-7f82b34af213.jpg',
        destinations: [
            {
                id: 'gali-bandalu',
                name: 'Wind Rocks (Gali Bandalu)',
                tagline: 'The edge of the world',
                description: 'Vast, sweeping rocky slopes that face gale-force winds and offer unobstructed views of the plains below.',
                image: 'https://image2url.com/r2/default/images/1772232404132-be866c29-3d29-4933-bad5-7f82b34af213.jpg',
                stats: { alt: '1290m', dist: '1km from center', fee: 'Free' },
            },
            {
                id: 'kalyani',
                name: 'The Great Kalyani Tree',
                tagline: 'The 150-year-old giant',
                description: 'A massive ancient Eucalyptus tree planted in 1859, creating a massive canopy of shade.',
                image: 'https://image2url.com/r2/default/images/1772232404132-be866c29-3d29-4933-bad5-7f82b34af213.jpg',
                stats: { alt: '1290m', dist: '0.5km from center', fee: 'Free' },
            }
        ],
        culture: [
            {
                name: "Chenchu & Sugali",
                focus: "Handicrafts & Forest Lore",
                description: "The local communities who run the small handicraft stalls and guide tourists through the dense eucalyptus forests.",
                image: "/images/artisan.png",
                color: "bg-purple-500"
            }
        ],
        experiences: [
            {
                id: 'atv-riding',
                title: "ATV Ridge Riding",
                description: "Rent an ATV and tackle the rocky, adventurous trails along the cliff edges of the hills.",
                image: 'https://image2url.com/r2/default/images/1772232404132-be866c29-3d29-4933-bad5-7f82b34af213.jpg',
                highlights: ["Off-road driving", "Adrenaline trails", "Sunset viewpoints"]
            }
        ]
    }
};

export default places;
