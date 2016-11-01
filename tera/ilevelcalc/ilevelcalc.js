var items = {
  'Weapon': {
    'Idoneal': 0,
    '+12 Dreadnaught': 391,
    '+12 Starfall': 407,
    '+15 Starfall': 417,
    '+12 Slaughter': 403,
    '+12 Conflate': 0,
    '+12 Imperator': 0,
    '+15 Imperator': 0,
    '+12 Guile': 0,
    '+12 Ambush': 0,
    '+15 Ambush': 0
  },
  'Chest': {
    'Idoneal': 357,
    '+12 Dreadnaught': 393,
    '+12 Starfall': 401,
    '+15 Starfall': 413,
    '+12 Slaughter': 405,
    '+12 Conflate': 0,
    '+12 Imperator': 0,
    '+15 Imperator': 0,
    '+12 Guile': 0,
    '+12 Ambush': 0,
    '+15 Ambush': 0
  },
  'Gloves/Boots': {
    'Idoneal': 353,
    '+12 Dreadnaught': 389,
    '+12 Starfall': 393,
    '+15 Starfall': 405,
    '+12 Slaughter': 401,
    '+12 Conflate': 0,
    '+12 Imperator': 0,
    '+15 Imperator': 0,
    '+12 Guile': 0,
    '+12 Ambush': 0,
    '+15 Ambush': 0
  },
  'Belt': {
    'Idoneal': 329,
    'Dreadnaught': 345,
    'Starfall': 349,
    'Slaughter': 403,
    'Conflate': 0,
    'Imperator': 0,
    'Guile': 0,
    'Ambush': 0
  },
  'Accessories': {
    'Ship (Cutter, Galley, Pinnace)': 317,
    'Captain (Corvette, Galleon, Argosy)': 317,
    'Gate (Shadow, Blood)': 321,
    'Vain (Shadow, Blood)': 321,
    'Maze (Shadow, Blood)': 321,
    'Guest (Manor, Estate)': 325,
    'Borne (Manor, Estate)': 325,
    'new crafted one (??)': 0
  },
  'Brooch': {
    'Flawless': 309,
    'Simple Cleansing': 313,
    'Simple': 317,
    'Quick/Empowered/Cleansing': 321,
    'Quatrefoil': 325,
    '30-man': 0
  },
  'Innerwear': {
    'White': 249,
    'Green': 249,
    'Blue': 293,
    'Gold': 309,
    'Signature': 317
  }
};

var calc = {
  // Thanks to http://board.tera.gameforge.com/board2-tera-en/board58-general/board76-discussions-about-tera/227001-how-to-calculate-itemlevel/

  /*
  Main Set Bonus:
  1-2: 0,
  3-4: +1,
  5:   +2
  */
  weapon_weight: 0.2725,
  armor_weight: 0.2061,
  gloves_weight: 0.185,
  boots_weight: 0.184,
  belt_weight: 0.028,

  /*
  Accessories Set Bonus:
  1-2: 0,
  3-4: +1,
  5:   +2
  */
  necklace_weight: 0.028,
  earring_weight: 0.028,
  ring_weight: 0.028,

  /* Other (no set bonus) */
  brooch_weight: 0.028,
  innerwear_weight: 0.0136,

  calculate: function(weapon, armor, gloves, boots, belt, main_set, innerwear, brooch, necklace, earring1, earring2, ring1, ring2, accessories_set) {
    main = Math.round(weapon*weapon_weight) + 
           Math.round(armor*armor_weight) +
           Math.round(gloves*gloves_weight) +
           Math.round(boots*boots_weight) +
           Math.round(belt*belt_weight) +
           main_set;
    accessories = Math.round(necklace*necklace_weight) +
                  Math.round(earring1*earring_weight) +
                  Math.round(earring2*earring_weight) +
                  Math.round(ring1*ring_weight) +
                  Math.round(ring2*ring_weight) +
                  accessories_set;
    other = Math.round(innerwear*innerwear_weight) +
            Math.round(brooch*brooch_weight);
    return main + accessories + other
  }
};


exports.items = items;
exports.calc = calc;