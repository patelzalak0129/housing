const properties = [
  {
    id: 1,
    name: "The Obsidian Villa",
    location: "Malibu, California",
    city: "Malibu",
    price: 8450000,
    formattedPrice: "$8,450,000",
    area: 6800,
    bedrooms: 5,
    bathrooms: 6,
    type: "Villa",
    badge: "Premium Choice",
    image: "assets/prop_1.jpg",
    images: [
      "assets/prop_1.jpg",
      "assets/prop_1_2.jpg",
      "assets/prop_1_3.jpg"
    ],
    description: "Nestled on a private cliffside overlooking the Pacific Ocean, The Obsidian Villa is a masterpiece of modern architectural design. Boasting glass floor-to-ceiling walls, black marble finishes, an infinity pool that merges with the horizon, and fully integrated smart home automation. Experience ultimate luxury living with private beach access and expansive outdoor lounge decks.",
    amenities: ["Infinity Pool", "Private Beach", "Smart Home", "Wine Cellar", "Home Cinema", "24/7 Security"],
    owner: {
      name: "Marcus Vance",
      phone: "+1 (555) 019-2834",
      email: "marcus.vance@housingmarket.com",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
    }
  },
  {
    id: 2,
    name: "Aura Sky Penthouse",
    location: "Manhattan, New York",
    city: "New York",
    price: 5200000,
    formattedPrice: "$5,200,000",
    area: 3200,
    bedrooms: 3,
    bathrooms: 3.5,
    type: "Penthouse",
    badge: "New Listing",
    image: "assets/prop_2.jpg",
    images: [
      "assets/prop_2.jpg",
      "assets/prop_2_2.jpg",
      "assets/prop_2_3.jpg"
    ],
    description: "Soaring high above Central Park, the Aura Sky Penthouse features breathtaking 360-degree skyline views, double-height ceilings, and custom-designed European interiors. Enjoy a private wrap-around terrace, state-of-the-art chef's kitchen, custom library, and access to elite building amenities including a 75-foot lap pool, spa, and professional concierge services.",
    amenities: ["Sky Deck", "Concierge", "Chef's Kitchen", "Central Heating", "Fitness Club", "Valet Parking"],
    owner: {
      name: "Helena Rostova",
      phone: "+1 (555) 048-9321",
      email: "helena.r@housingmarket.com",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
    }
  },
  {
    id: 3,
    name: "Crestwood Chalet",
    location: "Aspen, Colorado",
    city: "Aspen",
    price: 3850000,
    formattedPrice: "$3,850,000",
    area: 4500,
    bedrooms: 4,
    bathrooms: 4,
    type: "Villa",
    badge: "Featured",
    image: "assets/prop_3.jpg",
    images: [
      "assets/prop_3.jpg",
      "assets/prop_3_2.jpg",
      "assets/prop_3_3.jpg"
    ],
    description: "A ski-in, ski-out retreat built from solid local timber and stone. Crestwood Chalet offers an ultra-cozy, high-luxury mountain escape with towering fireplace chambers, outdoor hot tub overlooking snow-capped peaks, a fully-equipped ski room, custom bar, and vaulted pine ceilings. Fully furnished and optimized for year-round alpine enjoyment.",
    amenities: ["Ski-in/Ski-out", "Outdoor Spa", "Stone Fireplace", "Heated Floors", "Private Bar", "Guest House"],
    owner: {
      name: "Arthur Pendelton",
      phone: "+1 (555) 021-9988",
      email: "arthur.p@housingmarket.com",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200"
    }
  },
  {
    id: 4,
    name: "The Lumina Estate",
    location: "Miami, Florida",
    city: "Miami",
    price: 6900000,
    formattedPrice: "$6,900,000",
    area: 7200,
    bedrooms: 6,
    bathrooms: 7,
    type: "Mansion",
    badge: "Selling Fast",
    image: "assets/prop_4.jpg",
    images: [
      "assets/prop_4.jpg",
      "assets/prop_4_2.jpg",
      "assets/prop_4_3.jpg"
    ],
    description: "Located on a premium corner lot in Coconut Grove, The Lumina Estate is an open-concept tropical modern oasis. Surrounded by lush, mature landscaping and palms, it offers seamless indoor-outdoor living, a sunken fire pit lounge, Olympic-sized swimming pool, custom water features, rooftop entertainment terrace, and advanced smart security.",
    amenities: ["Rooftop Deck", "Olympic Pool", "Lush Gardens", "Smart Security", "Water Features", "Elevator"],
    owner: {
      name: "Gabriella Santos",
      phone: "+1 (555) 077-4433",
      email: "gabriella.s@housingmarket.com",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
    }
  },
  {
    id: 5,
    name: "Helix Luxury Condo",
    location: "San Francisco, California",
    city: "San Francisco",
    price: 2450000,
    formattedPrice: "$2,450,000",
    area: 2100,
    bedrooms: 2,
    bathrooms: 2,
    type: "Apartment",
    badge: "Hot Offer",
    image: "assets/prop_5.jpg",
    images: [
      "assets/prop_5.jpg",
      "assets/prop_5_2.jpg",
      "assets/prop_5_3.jpg"
    ],
    description: "Located in the heart of SOMA, this futuristic luxury condo displays architectural excellence with its curved glass design. Complete with white quartz countertops, premium Miele appliances, oak hardwood flooring, floor-to-ceiling windows with panoramic Bay views, and high-tech biometric security. Includes secure sub-level garage parking.",
    amenities: ["Bay View", "Biometric Lock", "Subway Access", "Miele Kitchen", "24/7 Doorman", "EV Charger"],
    owner: {
      name: "Marcus Vance",
      phone: "+1 (555) 019-2834",
      email: "marcus.vance@housingmarket.com",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
    }
  },
  {
    id: 6,
    name: "Serenity Ocean Retreat",
    location: "Laguna Beach, California",
    city: "Laguna Beach",
    price: 9800000,
    formattedPrice: "$9,800,000",
    area: 8400,
    bedrooms: 6,
    bathrooms: 8,
    type: "Villa",
    badge: "Exclusive",
    image: "assets/prop_6.jpg",
    images: [
      "assets/prop_6.jpg",
      "assets/prop_6_2.jpg",
      "assets/prop_6_3.jpg"
    ],
    description: "An oceanfront masterpiece featuring private beach coves, infinity-edge swimming pools, cascading waterfalls, a detached luxury guest house, private wellness spa, yoga deck, professional grade cinema, and temperature-controlled garage for up to six vehicles. Designed for a true connoisseur of life.",
    amenities: ["Oceanfront", "Detached Villa", "Spa Room", "Cinema", "Waterfall Pool", "6-Car Garage"],
    owner: {
      name: "Helena Rostova",
      phone: "+1 (555) 048-9321",
      email: "helena.r@housingmarket.com",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
    }
  }
];

// Helper functions for properties database operations
function getProperties() {
  return properties;
}

function getPropertyById(id) {
  return properties.find(p => p.id === parseInt(id));
}

// Export for ES Modules or regular script loading
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { properties, getProperties, getPropertyById };
}
