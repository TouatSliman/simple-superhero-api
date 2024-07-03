const express = require("express");
const app = express();
const PORT = process.env.PORT || 4040;

app.use(express.json());

app.use(express.static(__dirname + "/"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "Content-Type",
    "Authorization"
  );
  next();
});

let items = [
  [
    {
      id: 1,
      name: "Iron Man",
      realName: "Tony Stark",
      coverImg:
        "https://www.chromethemer.com/download/hd-wallpapers/iron-man-3840x2160.jpg",
      profileImg:
        "https://pics.craiyon.com/2023-04-24/12c96989fe374a28ac867513853d001f.webp",
      powers: [
        "Genius intellect",
        "Power suit (enhanced strength, durability, flight, weaponry)",
        "Repulsor rays",
      ],
      description:
        "Billionaire playboy philanthropist who builds advanced suits of armor to fight crime.",
    },
    {
      id: 2,
      name: "Captain America",
      realName: "Steve Rogers",
      coverImg:
        "https://4kwallpapers.com/images/wallpapers/captain-america-marvel-superheroes-3440x1440-663.jpg",
      profileImg:
        "https://cdna.artstation.com/p/assets/images/images/002/310/684/large/adam-ross-chris-evans-in-captain-america-2-the-winter-soldier.jpg?1460095493",
      powers: [
        "Peak human strength, speed, endurance, and reflexes",
        "Master tactician and strategist",
      ],
      description:
        "Enhanced soldier who leads the Avengers with his unwavering spirit and tactical brilliance.",
    },
    {
      id: 3,
      name: "Spider-Man",
      realName: "Peter Parker",
      powers: [
        "Superhuman strength, agility, reflexes, and a precognitive sense of danger",
        "Wall-crawling",
        "Web-shooters",
      ],
      coverImg:
        "https://mrwallpaper.com/images/hd/spider-man-vector-art-4k-7gw8j1lhg6kng2n3.jpg",
      profileImg:
        "https://cdn.openart.ai/stable_diffusion/006ac68fd78ccba67b48953a72d218d54a568238_2000x2000.webp",
      description:
        "Teenager with spider-like abilities who fights crime with wit and responsibility.",
    },
    {
      id: 4,
      name: "Wonder Woman",
      realName: "Diana Prince",
      powers: [
        "Superhuman strength, speed, durability, and reflexes",
        "Flight",
        "Invulnerable bracelets",
        "Lasso of Truth that compels honesty",
      ],
      coverImg: "https://images7.alphacoders.com/108/thumb-1920-1085795.jpg",
      profileImg:
        "https://c4.wallpaperflare.com/wallpaper/684/527/808/wonder-woman-gal-gadot-wallpaper-preview.jpg",
      description: "Amazonian princess who fights for justice and equality.",
    },
    {
      id: 5,
      name: "Black Panther",
      realName: "T'Challa",
      powers: [
        "Enhanced strength, speed, agility, reflexes, and senses due to the Heart-Shaped Herb",
        "Vibranium suit with advanced technology",
      ],
      coverImg:
        "https://w0.peakpx.com/wallpaper/330/252/HD-wallpaper-black-panther-movie-10k-black-panther-movies.jpg",
      profileImg:
        "https://pyxis.nymag.com/v1/imgs/25c/18c/8ada3342da1e19fa40bfae0d949d2eacf7-into-it-black-panther.1x.rsquare.w1400.jpg",
      description:
        "King of the technologically advanced Wakanda who fights to protect his nation and the world.",
    },
    {
      id: 6,
      name: "Thor",
      realName: "Thor Odinson",
      powers: [
        "Superhuman strength, speed, durability, and reflexes",
        "Flight",
        "Master of the hammer Mjolnir (controls weather, energy manipulation)",
      ],
      description:
        "Asgardian god of thunder who protects Earth alongside the Avengers.",
    },
    {
      id: 7,
      name: "Captain Marvel",
      realName: "Carol Danvers",
      powers: [
        "Superhuman strength, speed, durability, reflexes, and flight",
        "Energy blasts",
        "Precognitive abilities",
      ],
      description:
        "Former pilot imbued with cosmic energy who fights for justice across the galaxy.",
    },
    {
      id: 8,
      name: "Storm",
      realName: "Ororo Munroe",
      powers: "Weather manipulation (control of wind, rain, lightning, snow)",
      description:
        "X-Men member who controls the weather and fights for mutant rights.",
    },
    {
      id: 9,
      name: "Wolverine",
      realName: "James Howlett",
      powers:
        "Adamantium skeleton and claws, accelerated healing factor, heightened senses",
      description:
        "Mutant with an adamantium skeleton and claws who is a fierce member of the X-Men.",
    },
    {
      id: 10,
      name: "Batman",
      realName: "Bruce Wayne",
      powers: [
        "Peak human strength, agility, reflexes, and intellect",
        "Master detective and strategist",
        "Advanced gadgets and technology",
      ],
      description:
        "Billionaire philanthropist who fights crime as the vigilante Batman using his intellect, gadgets, and martial arts skills.",
    },
    {
      id: 11,
      name: "Hulk",
      realName: "Bruce Banner",
      powers: [
        "Superhuman strength, durability, and healing factor that increase with anger",
      ],
      description:
        "Scientist who transforms into a raging green monster with immense strength when angered.",
    },
    {
      id: 12,
      name: "Doctor Strange",
      realName: "Stephen Strange",
      powers: [
        "Master of mystic arts (spells, illusions, energy manipulation, teleportation)",
      ],
      description:
        "Former surgeon who becomes a powerful sorcerer to protect Earth from mystical threats.",
    },
    {
      id: 13,
      name: "Ant-Man",
      realName: "Scott Lang (various others)",
      powers: [
        "Can shrink to the size of an ant while retaining his strength, can communicate with ants",
      ],
      description:
        "Tech-wielding hero who can shrink to the size of an ant and control an army of ants.",
    },
    {
      id: 14,
      name: "Green Lantern (Hal Jordan)",
      realName: "Hal Jordan",
      powers: [
        "Power ring that can create constructs of any form limited by the user's imagination",
        "Flight",
        "Energy blasts",
      ],
      description:
        "Test pilot chosen to wield a powerful green ring that grants him the ability to construct anything he imagines.",
    },
    {
      id: 15,
      name: "Cyclops",
      realName: "Scott Summers",
      powers: ["Optic blasts from his eyes", "Peak human strength and agility"],
      description:
        "X-Men leader who shoots powerful beams from his eyes and fights for mutant equality.",
    },
    {
      id: 16,
      name: "Jean Grey",
      realName: "Jean Grey",
      powers: [
        "Telekinesis and telepathy",
        "Phoenix Force (vast cosmic power - limited availability)",
      ],
      description:
        "Powerful telekinetic and telepathic mutant who has been bonded to the cosmic Phoenix Force.",
    },
    {
      id: 17,
      name: "Flash",
      realName: "Various heroes (Jay Garrick, Barry Allen, Wally West)",
      powers: "Superhuman speed (various degrees depending on the hero)",
      description:
        "Speedster hero with incredible speed who fights crime and protects Central City.",
    },
    {
      id: 18,
      name: "Aquaman",
      realName: "Arthur Curry",
      powers: [
        "Superhuman strength, speed, durability, and senses underwater",
        "Telepathy with aquatic life",
      ],
      description:
        "King of Atlantis who commands the power of the oceans and fights for the balance between land and sea.",
    },
    {
      id: 19,
      name: "Black Widow",
      realName: "Natasha Romanoff",
      powers: [
        "Peak human strength, agility, reflexes, and intellect",
        "Master martial artist, tactician, and spy",
      ],
      description:
        "Expert spy and martial artist who fights alongside the Avengers.",
    },
    {
      id: 20,
      name: "Blade",
      realName: "Eric Brooks",
      powers: [
        "Peak human strength, agility, reflexes, senses, and healing factor",
        "Master swordsman and martial artist",
        "Immune to most vampire bites",
      ],
      description:
        "Half-vampire who hunts evil vampires and protects humanity.",
    },
    {
      id: 21,
      name: "Scarlet Witch",
      realName: "Wanda Maximoff",
      powers: ["Chaos magic (reality warping, telekinesis, telepathy)"],
      description:
        "Powerful mutant who manipulates chaos magic and fights alongside the Avengers.",
    },
    {
      id: 22,
      name: "Vision",
      realName: "Victor Shade (originally)",
      powers: [
        "Intangibility",
        " phasing",
        " density manipulation",
        " solar energy blasts",
      ],
      description:
        "Synthetic android created by Ultron who fights for good alongside the Avengers.",
    },
    {
      id: 23,
      name: "Hawkeye",
      realName: "Clinton Barton",
      powers: [
        "Peak human strength, agility, reflexes, and eyesight",
        "Master archer and marksman",
      ],
      description:
        "Expert archer and marksman who fights alongside the Avengers.",
    },
    {
      id: 24,
      name: "Daredevil",
      realName: "Matthew Murdock",
      powers: [
        "Radar sense (enhanced perception replacing sight)",
        "Peak human agility and reflexes",
        "Skilled martial artist",
      ],
      description:
        "Blind lawyer by day, vigilante fighter by night with heightened senses who protects Hell's Kitchen.",
    },
    {
      id: 25,
      name: "Mister Fantastic",
      realName: "Reed Richards",
      powers: [
        "Elasticity (can stretch his body to incredible lengths and shapes)",
        "Genius intellect",
      ],
      description:
        "Leader of the Fantastic Four with a genius intellect and the ability to stretch his body to great lengths.",
    },
    {
      id: 26,
      name: "Invisible Woman",
      realName: "Susan Storm Richards",
      powers: ["Invisibility and force field generation"],
      description:
        "Member of the Fantastic Four who can turn invisible and create powerful force fields.",
    },
    {
      id: 27,
      name: "Human Torch",
      realName: "Johnny Storm",
      powers: ["Fire manipulation (can generate and control flames)", "Flight"],
      description: "Member of the Fantastic Four who can control fire and fly.",
    },
    {
      id: 28,
      name: "The Thing",
      realName: "Benjamin Grimm",
      powers: ["Superhuman strength, durability, and rocky orange hide"],
      description:
        "Member of the Fantastic Four with immense strength and a rocky orange hide.",
    },
    {
      id: 29,
      name: "Rocket Raccoon",
      realName: "Rocket",
      powers: [
        "Genius-level intellect (weapons and gadget creation)",
        "Skilled marksman",
      ],
      description:
        "Genetically-engineered raccoon who is a member of the Guardians of the Galaxy, known for his weapons expertise and grumpy demeanor.",
    },
    {
      id: 30,
      name: "Groot",
      realName: "Groot",
      powers: [
        "Superhuman strength, durability, and regeneration",
        "Can grow his limbs and wood-like body",
      ],
      description:
        "Flora colossus who is a member of the Guardians of the Galaxy, limited vocabulary but loyal friend.",
    },
    {
      id: 31,
      name: "Superman (Clark Kent)",
      realName: "Clark Kent",
      powers: [
        "Superhuman strength, speed, durability, and reflexes",
        "Flight",
        "Heat vision",
        "X-ray vision",
        "Freeze breath",
      ],
      description:
        "The quintessential hero, an alien raised on Earth who fights for truth, justice, and the American way.",
    },
    {
      id: 32,
      name: "Green Arrow",
      realName: "Oliver Queen",
      powers: [
        "Peak human strength, agility, reflexes, and eyesight",
        "Master archer and tactician",
      ],
      description:
        "Millionaire playboy who becomes a vigilante archer fighting crime in Star City.",
    },
    {
      id: 33,
      name: "Black Canary",
      realName: "Dinah Laurel Lance",
      powers: [
        "Peak human strength, agility, and reflexes",
        "Canary Cry (powerful sonic scream)",
        "Skilled martial artist",
      ],
      description:
        "Superhero with a powerful sonic scream and martial arts skills, often a teammate of Green Arrow.",
    },
    {
      id: 34,
      name: "Spawn",
      realName: "Al Simmons",
      powers: [
        "Necroplasm manipulation (shapeshifting, regeneration, control over darkness)",
        "Spawn powers can vary depending on the story",
      ],
      description:
        "Former soldier turned Hellspawn who fights against evil with his dark powers.",
    },
    {
      id: 35,
      name: "Hellboy",
      realName: "Hellboy",
      powers: [
        "Superhuman strength, durability, and resistance to fire",
        "Right hand transforms into a giant stone fist",
        "Occult knowledge and expertise with the paranormal",
      ],
      description:
        "Demon raised by humans who fights for humanity against evil forces.",
    },
    {
      id: 36,
      name: "Men in Black",
      realName: "Various Agents",
      powers: [
        "Advanced technology (neuralyzers, weapons, gadgets)",
        "Highly trained agents",
      ],
      description:
        "Government agents who police extraterrestrial threats on Earth.",
    },
    {
      id: 37,
      name: "Static Shock",
      realName: "Virgil Hawkins",
      powers: ["Electrokinesis (control of electricity)", "Flight"],
      description:
        "Teenage hero who controls electricity and fights crime in Dakota City.",
    },
    {
      id: 38,
      name: "Ms. Marvel (Kamala Khan)",
      realName: "Kamala Khan",
      powers: ["Shapeshifting, size alteration, superhuman strength"],
      description:
        "Inhuman teenager who idolizes Captain Marvel and gains similar powers.",
    },
    {
      id: 39,
      name: "Nova",
      realName: "Richard Rider (Sam Alexander)",
      powers: [
        "Flight, energy blasts, superhuman strength",
        "Nova Corps helmet grants various abilities",
      ],
      description:
        "Member of the Nova Corps, a galactic law enforcement agency, with various powers granted by a helmet.",
    },
    {
      id: 40,
      name: "She-Ra",
      realName: "Adora",
      powers: [
        "Superhuman strength, speed, durability, and reflexes",
        "Swordsmanship, leadership",
      ],
      description:
        "Princess who becomes She-Ra, wielding a magical sword to defend Etheria from evil.",
    },
    {
      id: 41,
      name: "Blade (Nighthawk)",
      realName: "Eric Brooks",
      powers: [
        "Peak human strength, agility, reflexes, senses, and healing factor",
        "Master swordsman and martial artist",
        "Immune to most vampire bites",
      ],
      description:
        "Similar to the original Blade, Nighthawk is a vampire hunter with a focus on urban environments.",
    },
    {
      id: 42,
      name: "Cyborg",
      realName: "Victor Stone",
      powers: [
        "Advanced cybernetic enhancements (superhuman strength, durability, weapons integration)",
        "Technopathy (interacts with technology)",
      ],
      description:
        "Former athlete turned cyborg who uses his technology to fight alongside the Teen Titans.",
    },
    {
      id: 43,
      name: "Elektra",
      realName: "Elektra Natchios",
      powers: [
        "Peak human strength, agility, reflexes, and senses due to martial arts training",
        "Skilled martial artist and assassin",
        "Acrobatics expert",
      ],
      description:
        "Highly skilled assassin with a tragic past who occasionally works with Daredevil.",
    },
    {
      id: 44,
      name: "Moon Knight",
      realName: "Marc Spector",
      powers: [
        "Peak human strength, agility, and reflexes (enhanced by the moon)",
        "Skilled martial artist and strategist",
        " владеет несколькими видами оружия (Russian: Vladyeet neskolkimi vidami oruzhiya - Proficient in multiple weapons)",
      ],
      description:
        "Former mercenary with dissociative identity disorder who becomes Moon Knight, a protector of the innocent.",
    },
    {
      id: 45,
      name: "Ms. Marvel (Carol Danvers)",
      realName: "Carol Danvers",
      powers: [
        "Superhuman strength, speed, durability, reflexes, and flight",
        "Energy blasts",
        "Precognitive abilities",
      ],
      description:
        "A different version of Ms. Marvel, this Carol Danvers possesses immense cosmic power and fights across the galaxy.",
    },
    {
      id: 46,
      name: "Phoenix (Jean Grey)",
      realName: "Jean Grey",
      powers: [
        "Vast cosmic power manipulation (limited availability)",
        "Telekinesis and telepathy",
      ],
      description:
        "When bonded to the Phoenix Force, Jean Grey becomes an incredibly powerful cosmic entity.",
    },
    {
      id: 47,
      name: "Professor X",
      realName: "Charles Xavier",
      powers: ["Telepathy (powerful mind reading and mental manipulation)"],
      description:
        "Founder of the X-Men, Professor X is a powerful telepath who fights for mutant rights and peaceful coexistence.",
    },
    {
      id: 48,
      name: "Rogue",
      realName: "Marie LeBeau",
      powers: ["Absorption of life force and mutant powers through touch"],
      description:
        "X-Men member who can absorb the memories and powers of others through physical contact.",
    },
    {
      id: 49,
      name: "Iceman",
      realName: "Bobby Drake",
      powers: ["Cryokinesis (creation and control of ice)"],
      description:
        "X-Men member who can create and control ice, often with a playful personality.",
    },
    {
      id: 50,
      name: "Colossus",
      realName: "Piotr Rasputin",
      powers: [
        "Superhuman strength and durability due to organic steel transformation",
      ],
      description:
        "X-Men member who can transform his body into organic steel, granting him immense strength and durability.",
    },
    {
      id: 51,
      name: "Spawn (Al Simmons)",
      realName: "Al Simmons",
      powers: [
        "Necroplasm manipulation (shapeshifting, regeneration, control over darkness)",
        "Spawning monstrous creatures",
        "Teleportation",
      ],
      description:
        "This entry expands on Spawn's powers, mentioning his ability to spawn creatures and teleport.",
    },
    {
      id: 52,
      name: "Ghost Rider (Johnny Blaze)",
      realName: "Johnny Blaze",
      powers: [
        "Superhuman strength, speed, durability, and pyrokinesis (control of hellfire)",
        "Motorcycle bonded with a demon",
        "Penance Stare (induces guilt and pain in the wicked)",
      ],
      description:
        "Stunt performer who bonded with a demon to save his father, becoming the Ghost Rider who fights evil with hellfire.",
    },
    {
      id: 53,
      name: "Deathstroke",
      realName: "Slade Wilson",
      powers: [
        "Peak human strength, agility, reflexes, and senses due to enhanced physiology",
        "Master tactician, strategist, and martial artist",
        "Expert marksman and swordsman",
      ],
      description:
        "Anti-hero and assassin with enhanced abilities who is a formidable opponent for many heroes.",
    },
    {
      id: 54,
      name: "Superman",
      realName: "Clark Kent",
      powers: [
        "Super strength",
        "Invulnerability",
        "Flight",
        "Heat vision",
        "X-ray vision",
      ],
      description:
        "The Last Son of Krypton, sent to Earth as a baby and raised by human parents.",
    },
    {
      id: 55,
      name: "Black Cat",
      realName: "Felicia Hardy",
      powers: [
        "Peak human agility and reflexes",
        "Bad luck manipulation (can give others misfortune)",
        "Skilled gymnast, thief, and acrobat",
      ],
      description:
        "Cat burglar with bad luck manipulation abilities who often walks the line between hero and villain.",
    },
    {
      id: 56,
      name: "Ant-Man (Scott Lang)",
      /*Already defined at #13 */ realName: "Scott Lang (various others)",
      /*Already defined at #13 */ powers: [
        "Can shrink to the size of an ant while retaining his strength, can communicate with ants",
      ],
      /*Already defined at #13]*/ description:
        "To avoid redundancy, you can reference the previously defined ID #13 for Ant-Man's information.",
    },
    {
      id: 57,
      name: "Wasp (Hope van Dyne)",
      realName: "Hope van Dyne",
      powers: ["Can shrink and grow in size, flight, energy blasts"],
      description:
        "Daughter of Hank Pym, she can shrink and grow while also wielding energy blasts and flight.",
    },
    {
      id: 58,
      name: "Blade (Eric Brooks)",
      /*Already defined at #20 */ realName: "Eric Brooks",
      /*Already defined at #20 */ powers: [
        "Peak human strength, agility, reflexes, senses, and healing factor",
        "Master swordsman and martial artist",
        "Immune to most vampire bites",
      ],
      /*Already defined at #20] */ description:
        "To avoid redundancy, you can reference the previously defined ID #20 for Blade's information.",
    },
    {
      id: 59,
      name: "Moon Knight (Marc Spector)",
      /*Already defined at #44 */ realName: "Marc Spector",
      /*Already defined at #44 */ powers: [
        "Peak human strength, agility, and reflexes (enhanced by the moon)",
        "Skilled martial artist and strategist",
        " владеет несколькими видами оружия (Russian: Vladyeet neskolkimi vidami oruzhiya - Proficient in multiple weapons)",
      ],
      /* Already defined at #44] */ description:
        "To avoid redundancy, you can reference the previously",
    },
    {
      id: 60,
      name: "Elektra Natchios",
      realName: "Elektra Natchios",
      /*Already defined at #43*/ powers: [
        "Peak human strength, agility, reflexes, and senses due to martial arts training",
        "Skilled martial artist and assassin",
        "Acrobatics expert",
      ],
      description:
        "To avoid redundancy, you can reference the previously defined ID #43 for Elektra Natchios' information.",
    },
  ],
  [
    {
      id: 1,
      name: "Lex Luthor",
      realName: "Lex Luthor",
      powers: ["Genius intellect, advanced technology"],
      description:
        "Superman's arch-nemesis, a genius inventor and businessman who uses his intellect and technology to challenge Superman.",
    },
    {
      id: 2,
      name: "Loki",
      realName: "Loki Laufeyson",
      powers: [
        "Superhuman strength, speed, durability, and reflexes",
        "Shapeshifting, illusion casting, teleportation",
      ],
      description:
        "Thor's adopted brother and trickster god, known for his cunning and desire for power.",
    },
    {
      id: 3,
      name: "Thanos",
      powers: [
        "Superhuman strength, durability, and energy manipulation",
        "Genius intellect",
      ],
      description:
        "Mad Titan seeking universal domination with the Infinity Gauntlet, a powerful artifact that controls fundamental aspects of reality.",
    },
    {
      id: 4,
      name: "Doctor Doom",
      realName: "Victor Von Doom",
      powers: ["Genius intellect, sorcery, advanced technology"],
      description:
        "Ruler of Latveria, a master of science and sorcery who seeks power and world domination.",
    },
    {
      id: 5,
      name: "Magneto",
      powers: ["Magnetic manipulation", "Flight", "Force fields"],
      description:
        "Mutant who can control magnetism and believes mutants are superior to humans, often clashing with the X-Men.",
    },
    {
      id: 6,
      name: "Red Skull",
      realName: "Johann Schmidt",
      powers: [
        "Peak human strength, agility, and reflexes due to super-soldier serum",
      ],
      description:
        "Captain America's arch-enemy, a Nazi leader augmented with a super-soldier serum who is consumed by hatred.",
    },
    {
      id: 7,
      name: "Green Goblin (Norman Osborn)",
      realName: "Norman Osborn",
      powers: [
        "Superhuman strength, speed, durability, and endurance due to Goblin formula",
        "Glider",
        "Pumpkin bombs and other gadgets",
      ],
      description:
        "Spider-Man's archenemy, a businessman who becomes a green-skinned goblin with a glider, pumpkin bombs, and an arsenal of gadgets.",
    },
    {
      id: 8,
      name: "Catra",
      realName: "Catra",
      powers: [
        "Enhanced strength, agility, and reflexes",
        "Technological expertise",
      ],
      description:
        "Former friend of She-Ra and leader of the Horde, known for her cunning and ruthlessness.",
    },
    {
      id: 9,
      name: "Dr. Octopus (Otto Octavius)",
      realName: "Otto Octavius",
      powers: [
        "Superhuman strength and dexterity with four mechanical arms",
        "Genius intellect",
      ],
      description:
        "Spider-Man villain with four powerful mechanical arms and a genius intellect who often struggles with his own heroism.",
    },
    {
      id: 10,
      name: "Juggernaut",
      realName: "Cain Marko",
      powers: [
        "Immense superhuman strength, durability, and resistance to injury",
        "Unstoppable momentum",
      ],
      description:
        "Stepbrother of Charles Xavier who can become the unstoppable Juggernaut, a nearly invincible force of destruction.",
    },
    {
      id: 11,
      name: "Ultron",
      realName: "N/A (sentient artificial intelligence)",
      powers: [
        "Superhuman strength, durability, and reflexes (varies depending on the body)",
        "Advanced technology, flight, energy blasts",
      ],
      description:
        "Sentient robot created by Hank Pym who turned against humanity and often clashes with the Avengers.",
    },
    {
      id: 12,
      name: "Venom (Eddie Brock)",
      realName: "Eddie Brock",
      powers: [
        "Superhuman strength, durability, agility, and a spider-sense",
        "Can form tendrils and shapeshift",
      ],
      description:
        "Alien symbiote that bonds with a host, often Eddie Brock, granting immense power and a dark desire to consume goodness.",
    },
    {
      id: 13,
      name: "Bullseye",
      realName: "Lester Leland",
      powers: [
        "Peak human strength and agility",
        "Exceptional marksmanship and weapon accuracy",
      ],
      description:
        "Deranged assassin with unmatched precision who can turn any object into a deadly projectile.",
    },
    {
      id: 14,
      name: "Apocalypse",
      realName: "En Sabah Nur",
      powers: [
        "Superhuman strength, durability, and reflexes",
        "Immortality, self-modification, various mutant abilities from others",
      ],
      description:
        "Ancient mutant seeking world domination through survival of the fittest, possessing a vast array of mutant powers.",
    },
    {
      id: 15,
      name: "The Joker",
      realName: "Unknown",
      powers: [
        "Genius intellect, master of chaos and manipulation",
        "Skilled chemist and weapon creator",
      ],
      description:
        "Batman's arch-nemesis, a criminal mastermind with a twisted sense of humor who thrives on chaos and destruction.",
    },
    {
      id: 16,
      name: "Harley Quinn (Dr. Harleen Quinzel)",
      realName: "Dr. Harleen Quinzel",
      powers: [
        "Peak human strength, agility, and reflexes due to  acrobatics training",
        "Genius intellect in psychology and psychiatry",
        "Skilled gymnast and weapon user",
      ],
      description:
        "The Joker's girlfriend and accomplice, a former psychiatrist turned into a crazed criminal with a love of mayhem.",
    },
    {
      id: 17,
      name: "Two-Face (Harvey Dent)",
      realName: "Harvey Dent",
      powers: [
        "Dual personality",
        "Skilled marksman and strategist (formerly)",
      ],
      description:
        "Former Gotham District Attorney who becomes Two-Face after a scarring accident, relying on a flipped coin to make decisions.",
    },
    {
      id: 18,
      name: "Poison Ivy",
      realName: "Pamela Isley",
      powers: [
        "Control over plant life, immunity to most toxins",
        "Genius intellect in botany and toxicology",
      ],
      description:
        "Eco-terrorist who can control plants and desires to protect the environment, often clashing with Batman.",
    },
    {
      id: 19,
      name: "The Riddler (Edward Nigma)",
      realName: "Edward Nigma",
      powers: ["Genius-level intellect for puzzles and riddles"],
      description:
        "Batman villain who commits crimes based on riddles and puzzles, challenging Batman's intellect.",
    },
    {
      id: 20,
      name: "Scarecrow (Dr. Jonathan Crane)",
      realName: "Dr. Jonathan Crane",
      powers: ["Fear toxin manipulation", "Psychological expertise"],
      description:
        "Batman villain who uses fear toxins to exploit people's phobias and nightmares.",
    },
    {
      id: 21,
      name: "Hans Landa",
      realName: "Hans Landa",
      powers: ["Master manipulator and negotiator", "Ruthless and cunning"],
      description:
        "The main antagonist in Inglourious Basterds, a charming yet ruthless SS officer who hunts down Jews in Nazi-occupied France.",
    },
    {
      id: 22,
      name: "Dr. Evil",
      realName: "Douglas Powers",
      powers: ["Genius intellect", "Advanced technology and resources"],
      description:
        "Austin Powers' archenemy, a bald villain with a pinky ring who seeks world domination through outlandish schemes.",
    },
    {
      id: 23,
      name: "Lord Voldemort",
      realName: "Tom Marvolo Riddle",
      powers: [
        "Dark magic, flight, possession",
        "Parseltongue (ability to speak to snakes)",
      ],
      description:
        "The main antagonist of the Harry Potter series, a dark wizard who seeks immortality and magical dominance.",
    },
  ],
];

// documentation page

app.get("/documentation", (req, res) => {
  const fileName = "/documentation.html";
  res.sendFile(__dirname + fileName, function (err) {
    if (err) {
      console.error("Error sending file:", err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});

// GET all items

app.get("/", (req, res) => {
  res.status(200).send(items);
  console.log("GET request to /items");
});

app.get("/names", (req, res) => {
  let names = [];
  names[0] = items[0].map((item) => item.name);
  names[1] = items[1].map((item) => item.name);
  res.status(200).send(names);
  console.log("GET request to names");
});

app.get("/names&id", (req, res) => {
  let names = [];
  names[0] = items[0].map((item) => ({
    name: item.name,
    id: item.id,
    isHero: true,
  }));
  names[1] = items[1].map((item) => ({
    name: item.name,
    id: item.id,
    isHero: false,
  }));
  res.status(200).send(names);
  console.log("GET request to names&id");
});
app.get("/img/:nb/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const itemNb = parseInt(req.params.nb);
  const item = items[itemNb].find((item) => item.id === itemId);
  if (item) {
    res
      .status(200)
      .send({ coverImg: item.coverImg, profileImg: item.profileImg });
  } else {
    res.status(404).send("Item not found");
  }
  console.log("GET request to /img/:id");
});
// GET heros

app.get("/superheros", (req, res) => {
  const item = items[0];
  res.status(200).send(item);
  console.log("GET request to heros");
});

app.get("/superheros/names", (req, res) => {
  const names = items[0].map((item) => item.name);
  res.status(200).send(names);
  console.log("GET request to heros/names");
});
app.get("/superheros/names&id", (req, res) => {
  const names = items[1].map((item) => ({ name: item.name, id: item.id }));
  res.status(200).send(names);
  console.log("GET request to heros/names&id");
});

app.get("/superheros/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items[0].find((item) => item.id === itemId);
  res.status(200).send(item);
  console.log("GET request to /hero/:id");
});

// GET villains

app.get("/supervillains", (req, res) => {
  const item = items[1];
  res.status(200).send(item);
  console.log("GET request to villains");
});

app.get("/supervillains/names", (req, res) => {
  const names = items[1].map((item) => item.name);
  res.status(200).send(names);
  console.log("GET request to villains/names");
});

app.get("/supervillains/names&id", (req, res) => {
  const names = items[1].map((item) => ({ name: item.name, id: item.id }));
  res.status(200).send(names);
  console.log("GET request to villains/names&id");
});

app.get("/supervillains/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items[1].find((item) => item.id === itemId);
  res.status(200).send(item);
  console.log("GET request to /hero/:id");
});

// POST a new item

app.post("/items", (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.send(newItem);
  console.log("POST request to /items");
});

// PUT update an existing item

app.put("/items/:id", (req, res) => {
  const updatedItem = req.body;
  const itemId = parseInt(req.params.id);

  const existingItem = items.find((item) => item.id === itemId);

  if (!existingItem) {
    return res.status(404).send("Item not found");
  }

  const updatedIndex = items.indexOf(existingItem);
  items[updatedIndex] = updatedItem;

  res.send(updatedItem);
  console.log("PUT request to /items/:id");
});

// DELETE an item

app.delete("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);

  const existingItem = items.find((item) => item.id === itemId);

  if (!existingItem) {
    return res.status(404).send("Item not found");
  }

  const deletedIndex = items.indexOf(existingItem);
  items.splice(deletedIndex, 1);

  res.send(existingItem);
  console.log("DELETE request to /items/:id");
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
