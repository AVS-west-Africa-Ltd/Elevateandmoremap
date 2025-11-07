import React from "react";
import Globe from "react-globe.gl";
import "./App.css";

// Premium color palette for Elevate & More luxury brand
const BRAND_GOLD = "#D4AF37";
const BRAND_LIGHT_GOLD = "#F4E4C1";
const BRAND_DARK = "#1A1F3A";

// Light luxury palette
const LIGHT_CREAM = "#F5F0E9";
const SOFT_WHITE = "#FFFFFF";
const LIGHT_GREY_BORDER = "#C7C7C7";
const MUTED_BEIGE = "#D6C6A8";
const SOFT_GOLD = "#CBBFAF";
const DARK_GREY_TEXT = "#2B2B2B";
const TOOLTIP_CREAM = "#F9F7F3";
const SOFT_CREAM = "#F2E9DA";

// Brand-specific colors from website
const BUTTON_BG = "#2B3054";      // Button background
const BUTTON_TEXT = "#FFFFFF";    // Button text (white)
const CONTINENT_COLOR =  '#F4F4F4'//"#A6A8B7"; // Main land/continent color
const TEXT_ON_WHITE = "#A6A8B7";  // Text color on white background

const locationGroups = {
  cities: [
    { name: "Paris", lat: 48.8566, lng: 2.3522, size: 1.2, color: MUTED_BEIGE, id: "paris" },
    { name: "London", lat: 51.5074, lng: -0.1278, size: 1.2, color: MUTED_BEIGE, id: "london" },
    { name: "Dubai", lat: 25.2048, lng: 55.2708, size: 1.2, color: MUTED_BEIGE, id: "dubai" },
    { name: "Milan", lat: 45.4642, lng: 9.19, size: 1.0, color: MUTED_BEIGE, id: "milan" },
    { name: "Rome", lat: 41.9028, lng: 12.4964, size: 1.0, color: MUTED_BEIGE, id: "rome" },
    { name: "Monaco", lat: 43.7384, lng: 7.4246, size: 0.9, color: MUTED_BEIGE, id: "monaco" },
    { name: "Miami", lat: 25.7617, lng: -80.1918, size: 1.1, color: MUTED_BEIGE, id: "miami" },
    { name: "New York", lat: 40.7128, lng: -74.006, size: 1.4, color: MUTED_BEIGE, id: "nyc" },
    { name: "Las Vegas", lat: 36.1699, lng: -115.1398, size: 1.1, color: MUTED_BEIGE, id: "las-vegas" }
  ],
  winterski: [
    { name: "Courchevel", lat: 45.4167, lng: 6.6333, size: 0.9, color: SOFT_GOLD, id: "courchevel" },
    { name: "Megève", lat: 45.8531, lng: 6.7, size: 0.8, color: SOFT_GOLD, id: "megeve" },
    { name: "Verbier", lat: 46.095, lng: 7.3, size: 0.8, color: SOFT_GOLD, id: "verbier" },
    { name: "St Moritz", lat: 46.4908, lng: 9.8355, size: 0.9, color: SOFT_GOLD, id: "st-moritz" },
    { name: "Aspen", lat: 39.1911, lng: -106.8175, size: 0.9, color: SOFT_GOLD, id: "aspen" }
  ],
  islandBeach: [
    { name: "St Barth", lat: 17.8962, lng: -62.8503, size: 0.9, color: SOFT_GOLD, id: "st-barth" },
    { name: "Mykonos", lat: 37.4467, lng: 25.3289, size: 0.9, color: SOFT_GOLD, id: "mykonos" },
    { name: "Ibiza", lat: 38.9067, lng: 1.4206, size: 0.9, color: SOFT_GOLD, id: "ibiza" },
    { name: "Costa Rica", lat: 9.7489, lng: -83.7534, size: 1.1, color: SOFT_GOLD, id: "costa-rica" },
    { name: "Thailand", lat: 13.7563, lng: 100.5018, size: 1.1, color: SOFT_GOLD, id: "thailand" },
    { name: "Maldives", lat: 3.2028, lng: 73.2207, size: 1.0, color: SOFT_GOLD, id: "maldives" },
    { name: "Croatia", lat: 45.1, lng: 15.2, size: 1.0, color: SOFT_GOLD, id: "croatia" },
    { name: "Bodrum", lat: 37.0344, lng: 27.4306, size: 0.9, color: SOFT_GOLD, id: "bodrum" }
  ]
};

const locationProfiles = {
  paris: {
    name: "Paris",
    country: "France",
    population: "2.1 million",
    description: "The 'City of Light'. Home to the Eiffel Tower, Louvre and timeless streets.",
    highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame"],
    image: "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2940"
  },
  london: {
    name: "London",
    country: "United Kingdom",
    population: "9 million",
    description: "Historic capital city with major cultural institutions.",
    highlights: ["Buckingham Palace", "British Museum", "Tower Bridge"],
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2940"
  },
  dubai: {
    name: "Dubai",
    country: "UAE",
    population: "3.3 million",
    description: "Modern skyline, luxury shopping and desert safaris.",
    highlights: ["Burj Khalifa", "Palm Jumeirah", "Dubai Mall"],
    image: "https://images.unsplash.com/photo-1546412414-8035e1776c9a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2940"
  },
  nyc: {
    name: "New York",
    country: "United States",
    population: "8+ million",
    description: "The Big Apple. Financial and cultural hub of America.",
    highlights: ["Statue of Liberty", "Central Park", "Times Square"],
    image: "https://images.unsplash.com/photo-1508849789987-4e5333c12b78?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3093"
  },
  miami: {
    name: "Miami",
    country: "United States",
    population: "470k",
    description: "Vibrant coastal city known for beaches, nightlife and art deco architecture.",
    highlights: ["South Beach", "Art Deco District", "Wynwood Walls"],
    image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=900&h=600&fit=crop"
  },
  "las-vegas": {
    name: "Las Vegas",
    country: "United States",
    population: "650k",
    description: "Entertainment capital with world-class shows, casinos and nightlife.",
    highlights: ["The Strip", "Bellagio Fountains", "High Roller"],
    image: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2948"
  },
  milan: {
    name: "Milan",
    country: "Italy",
    population: "1.4 million",
    description: "Fashion capital of the world and home to stunning gothic architecture.",
    highlights: ["Milan Cathedral", "La Scala", "Fashion District"],
    image: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=900&h=600&fit=crop"
  },
  rome: {
    name: "Rome",
    country: "Italy",
    population: "2.8 million",
    description: "The Eternal City with ancient ruins and Renaissance art.",
    highlights: ["Colosseum", "Vatican City", "Trevi Fountain"],
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=900&h=600&fit=crop"
  },
  monaco: {
    name: "Monaco",
    country: "Monaco",
    population: "39k",
    description: "Luxury playground on the French Riviera known for casinos and yachts.",
    highlights: ["Monte Carlo Casino", "Prince's Palace", "Port Hercules"],
    image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=900&h=600&fit=crop"
  },
  courchevel: {
    name: "Courchevel",
    country: "France",
    population: "2k",
    description: "Exclusive ski resort in the French Alps with world-class slopes.",
    highlights: ["Luxury Chalets", "Michelin Dining", "Premier Skiing"],
    image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=900&h=600&fit=crop"
  },
  megeve: {
    name: "Megève",
    country: "France",
    population: "4k",
    description: "Charming alpine village with medieval architecture and superb skiing.",
    highlights: ["Traditional Village", "Ski Slopes", "Gourmet Restaurants"],
    image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=900&h=600&fit=crop"
  },
  verbier: {
    name: "Verbier",
    country: "Switzerland",
    population: "3k",
    description: "Premier ski resort with challenging terrain and vibrant après-ski.",
    highlights: ["Off-Piste Skiing", "Mountain Views", "Nightlife"],
    image: "https://images.unsplash.com/photo-1551524164-687a55dd1126?w=900&h=600&fit=crop"
  },
  "st-moritz": {
    name: "St Moritz",
    country: "Switzerland",
    population: "5k",
    description: "Glamorous alpine resort town and birthplace of winter tourism.",
    highlights: ["Luxury Hotels", "Winter Olympics", "Champagne Climate"],
    image: "https://images.unsplash.com/photo-1551524164-687a55dd1126?w=900&h=600&fit=crop"
  },
  aspen: {
    name: "Aspen",
    country: "United States",
    population: "7k",
    description: "Colorado ski town combining world-class slopes with cultural sophistication.",
    highlights: ["Four Mountains", "Music Festival", "Historic Downtown"],
    image: "https://images.unsplash.com/photo-1551524164-687a55dd1126?w=900&h=600&fit=crop"
  },
  "st-barth": {
    name: "St Barth",
    country: "Caribbean",
    population: "10k",
    description: "Exclusive Caribbean island with pristine beaches and French flair.",
    highlights: ["White Sand Beaches", "Luxury Villas", "French Cuisine"],
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&h=600&fit=crop"
  },
  mykonos: {
    name: "Mykonos",
    country: "Greece",
    population: "10k",
    description: "Iconic Greek island famous for whitewashed buildings and vibrant nightlife.",
    highlights: ["Beach Clubs", "Windmills", "Little Venice"],
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=900&h=600&fit=crop"
  },
  ibiza: {
    name: "Ibiza",
    country: "Spain",
    population: "50k",
    description: "Mediterranean paradise known for stunning sunsets and world-renowned clubs.",
    highlights: ["Beach Clubs", "Old Town", "Sunset Bars"],
    image: "https://images.unsplash.com/photo-1558642084-fd07fae5282e?w=900&h=600&fit=crop"
  },
  "costa-rica": {
    name: "Costa Rica",
    country: "Costa Rica",
    population: "5 million",
    description: "Tropical paradise with lush rainforests, diverse wildlife and pristine beaches.",
    highlights: ["Rainforests", "Volcanoes", "Eco-Tourism"],
    image: "https://images.unsplash.com/photo-1621962930674-b61b5e5a5190?w=900&h=600&fit=crop"
  },
  thailand: {
    name: "Thailand",
    country: "Thailand",
    population: "70 million",
    description: "Land of smiles with golden temples, tropical islands and rich culture.",
    highlights: ["Bangkok Temples", "Island Hopping", "Thai Cuisine"],
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=900&h=600&fit=crop"
  },
  maldives: {
    name: "Maldives",
    country: "Maldives",
    population: "540k",
    description: "Tropical island nation with crystal-clear waters and overwater bungalows.",
    highlights: ["Overwater Villas", "Coral Reefs", "Private Islands"],
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900&h=600&fit=crop"
  },
  croatia: {
    name: "Croatia",
    country: "Croatia",
    population: "4 million",
    description: "Adriatic gem with ancient cities, stunning coastline and island paradises.",
    highlights: ["Dubrovnik Walls", "Island Hopping", "Historic Cities"],
    image: "https://images.unsplash.com/photo-1555990538-c3d7a4d0d9f3?w=900&h=600&fit=crop"
  },
  bodrum: {
    name: "Bodrum",
    country: "Turkey",
    population: "180k",
    description: "Turkish Riviera hotspot with ancient ruins and buzzing beach clubs.",
    highlights: ["Beach Clubs", "Castle", "Marina"],
    image: "https://images.unsplash.com/photo-1605522324893-378955d0a70f?w=900&h=600&fit=crop"
  }
};

export default function App() {
  const globeEl = React.useRef();
  const [size, setSize] = React.useState([window.innerWidth, window.innerHeight]);
  const [selected, setSelected] = React.useState(null);
  const [activeFilter, setActiveFilter] = React.useState('cities');
  const [countries, setCountries] = React.useState([]);

  // Helper function to check if a country has service locations
  const countryHasService = (countryName) => {
    const allLocations = [
      ...locationGroups.cities,
      ...locationGroups.winterski,
      ...locationGroups.islandBeach
    ];
    
    // Map of location names to their countries
    const locationCountries = {
      'Paris': 'France', 'London': 'United Kingdom', 'Dubai': 'United Arab Emirates',
      'Milan': 'Italy', 'Rome': 'Italy', 'Monaco': 'Monaco',
      'Miami': 'United States of America', 'New York': 'United States of America',
      'Las Vegas': 'United States of America',
      'Courchevel': 'France', 'Megève': 'France', 'Verbier': 'Switzerland',
      'St Moritz': 'Switzerland', 'Aspen': 'United States of America',
      'St Barth': 'France', 'Mykonos': 'Greece', 'Ibiza': 'Spain',
      'Costa Rica': 'Costa Rica', 'Thailand': 'Thailand', 'Maldives': 'Maldives',
      'Croatia': 'Croatia', 'Bodrum': 'Turkey'
    };
    
    return Object.values(locationCountries).includes(countryName);
  };

  // Load country data for outlines
  React.useEffect(() => {
    fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(data => {
        setCountries(data.features);
      })
      .catch(err => console.warn('Could not load country data:', err));
  }, []);

  React.useEffect(() => {
    if (!globeEl.current) return;
    const controls = globeEl.current.controls();
    
    controls.autoRotate = false;
    controls.enableZoom = true;
    controls.enableRotate = true;
    controls.enablePan = false;
    controls.minDistance = 80;  // Allow much closer zoom (was 150)
    controls.maxDistance = 800;
    // globeEl.current.pointOfView({ lat: 25, lng: 20, altitude: 1.5 }, 0);
    // Zoom to Metropolitan cities on initial load
    const cityLocations = locationGroups.cities;
    const avgLat = cityLocations.reduce((sum, loc) => sum + loc.lat, 0) / cityLocations.length;
    const avgLng = cityLocations.reduce((sum, loc) => sum + loc.lng, 0) / cityLocations.length;
    
    globeEl.current.pointOfView({ lat: avgLat, lng: avgLng, altitude: 1.5 }, 1000);
  }, []);

  React.useLayoutEffect(() => {
    const onResize = () => setSize([window.innerWidth, window.innerHeight]);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const pointRadius = (d) => Math.max(0.6, d.size) * 0.5;

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setSelected(null);
    
    const locations = locationGroups[filter];
    if (locations.length > 0 && globeEl.current) {
      const avgLat = locations.reduce((sum, loc) => sum + loc.lat, 0) / locations.length;
      const avgLng = locations.reduce((sum, loc) => sum + loc.lng, 0) / locations.length;
      
      globeEl.current.pointOfView({ lat: avgLat, lng: avgLng, altitude: 1.5 }, 1500);
    }
  };

  const [popupPosition, setPopupPosition] = React.useState({ x: 50, y: 50 });

  const handleLocationSelect = (location) => {
    setSelected(location);
    if (globeEl.current) {
      globeEl.current.pointOfView({ lat: location.lat, lng: location.lng, altitude: 1.5 }, 1000);
      
      setTimeout(() => {
        const screenCoords = globeEl.current.getScreenCoords(location.lat, location.lng);
        if (screenCoords) {
          const popupWidth = 320;
          const xPos = screenCoords.x + 50 < size[0] - popupWidth ? screenCoords.x + 50 : screenCoords.x - popupWidth - 50;
          const yPos = Math.min(Math.max(screenCoords.y - 150, 20), size[1] - 400);
          
          setPopupPosition({ 
            x: xPos, 
            y: yPos 
          });
        }
      }, 1000);
    }
  };

  const getButtonStyle = (filter) => ({
    padding: '13px 20px',
    margin: '0',
    border: activeFilter === filter ? `2px solid ${BUTTON_BG}` : `1px solid ${LIGHT_GREY_BORDER}`,
    borderRadius: '12px',
    fontSize: '13px',
    fontWeight: '600',
    fontFamily: "'Inter', -apple-system, sans-serif",
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    background: activeFilter === filter 
      ? BUTTON_BG
      : 'rgba(255, 255, 255, 0.6)',
    color: activeFilter === filter ? '#858484ff' : `#2B2B2B`,
    boxShadow: activeFilter === filter 
      ? `0 4px 20px rgba(43, 48, 84, 0.3), inset 0 1px 0 rgba(255,255,255,0.15)` 
      : '0 2px 8px rgba(0,0,0,0.04)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    transform: activeFilter === filter ? 'translateX(4px)' : 'translateX(0)',
    letterSpacing: '0.5px',
    width: '100%',
    textAlign: 'left'
  });

  const currentProfile = selected
    ? (locationProfiles[selected.id] || {
        name: selected.name,
        country: '',
        population: '—',
        description: `${selected.name} — explore this beautiful destination.`,
        highlights: [],
        image: 'https://images.unsplash.com/photo-1503264116251-35a269479413?w=900&h=600&fit=crop'
      })
    : null;

  return (
    <div
      style={{
        background: `
          radial-gradient(ellipse at 20% 0%, ${LIGHT_CREAM} 0%, transparent 50%),
          radial-gradient(ellipse at 80% 100%, ${SOFT_CREAM} 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, ${SOFT_WHITE} 0%, ${LIGHT_CREAM} 100%)
        `,
        position: "relative",
        minHeight: "100vh",
        overflow: "auto",
        width: "100vw",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        backgroundColor: SOFT_WHITE
      }}
    >
      {/* Deep space nebula effects */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(ellipse 800px 600px at 10% 20%, ${SOFT_CREAM}15 0%, transparent 50%),
          radial-gradient(ellipse 600px 800px at 90% 70%, ${LIGHT_CREAM}20 0%, transparent 50%),
          radial-gradient(circle 400px at 50% 50%, ${MUTED_BEIGE}08 0%, transparent 70%)
        `,
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.4
      }} />

      {/* Subtle ambient particles - Light luxury aesthetic */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none'
      }}>
        {Array.from({ length: 80 }).map((_, i) => {
          const size = Math.random();
          const isLarge = size > 0.7;
          
          return (
            <div
              key={`particle-${i}`}
              style={{
                position: 'absolute',
                width: isLarge ? '3px' : '2px',
                height: isLarge ? '3px' : '2px',
                background: `radial-gradient(circle, ${MUTED_BEIGE}, ${SOFT_GOLD})`,
                borderRadius: '50%',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.15 + 0.05,
                boxShadow: isLarge 
                  ? `0 0 8px ${MUTED_BEIGE}40` 
                  : 'none',
                animation: `twinkle ${5 + Math.random() * 8}s ease-in-out infinite ${Math.random() * 4}s`
              }}
            />
          );
        })}
      </div>

      {/* Floating light orbs for depth */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        opacity: 0.2
      }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`orb-${i}`}
            style={{
              position: 'absolute',
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              background: `radial-gradient(circle, ${SOFT_CREAM}, transparent)`,
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(2px)',
              animation: `float ${20 + Math.random() * 20}s ease-in-out infinite ${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Premium Header Card - Bottom Left with Glass Effect */}
      <div style={{
        position: 'fixed',
        bottom: '32px',
        left: '32px',
        maxWidth: '380px',
        zIndex: 100,
        background: `linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(249, 247, 243, 0.92))`,
        backdropFilter: 'blur(30px) saturate(180%)',
        WebkitBackdropFilter: 'blur(30px) saturate(180%)',
        borderRadius: '20px',
        padding: '28px',
        border: `1px solid ${LIGHT_GREY_BORDER}`,
        boxShadow: `
          0 8px 32px rgba(0, 0, 0, 0.06),
          0 0 0 1px rgba(199, 199, 199, 0.2),
          inset 0 1px 0 rgba(255, 255, 255, 0.8)
        `,
        textAlign: 'left'
      }}>
        {/* Brand logo/tagline */}
        <div style={{
          display: 'inline-block',
          marginBottom: '16px',
          padding: '6px 16px',
          background: `linear-gradient(135deg, ${SOFT_CREAM}, ${LIGHT_CREAM})`,
          borderRadius: '100px',
          border: `1px solid ${LIGHT_GREY_BORDER}`,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}>
          <span style={{
            fontSize: '10px',
            fontWeight: '700',
            color: DARK_GREY_TEXT,
            letterSpacing: '2.5px',
            textTransform: 'uppercase'
          }}>Elevate & More</span>
        </div>

        <h1 style={{
          fontSize: "clamp(24px, 2.5vw, 34px)",
          fontWeight: "600",
          fontFamily: "'Inter', -apple-system, sans-serif",
          margin: "0 0 10px 0",
          color: DARK_GREY_TEXT,
          letterSpacing: "-0.5px",
          lineHeight: "1.2"
        }}>
          Exclusive Global
          <br />
          <span style={{
            background: `linear-gradient(135deg, ${MUTED_BEIGE}, ${SOFT_GOLD})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: '700'
          }}>Destinations</span>
        </h1>
        
        <p style={{
          fontSize: "13px",
          color: "rgba(43, 43, 43, 0.75)",
          margin: "0 0 20px 0",
          lineHeight: "1.6",
          fontWeight: '500',
          letterSpacing: '0.3px'
        }}>
          Unlock access to the world's most extraordinary experiences
        </p>

        <div style={{ 
          display: "flex", 
          flexDirection: "column",
          gap: "8px"
        }}>
          <button 
            style={getButtonStyle('cities')} 
            onClick={() => handleFilterClick('cities')}
          >
            Metropolitan
          </button>
          <button 
            style={getButtonStyle('winterski')} 
            onClick={() => handleFilterClick('winterski')}
          >
            Alpine Retreats
          </button>
          <button 
            style={getButtonStyle('islandBeach')} 
            onClick={() => handleFilterClick('islandBeach')}
          >
            Coastal Paradises
          </button>
        </div>
      </div>

      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1
      }}>
        
        {/* Globe container - direct space view, NASA style */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1
        }}>
        <Globe
          ref={globeEl}
          width={size[0]}
          height={size[1]}
          backgroundColor="rgba(0,0,0,0)"
          
          // Soft white minimalist globe - light luxury aesthetic
          globeImageUrl="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23FFFFFF'/%3E%3C/svg%3E"
          bumpImageUrl={null}
          
          // Subtle atmosphere
          showAtmosphere={true}
          atmosphereColor="rgba(214, 198, 168, 0.15)"
          atmosphereAltitude={0.12}
          
          // Country outlines with soft grey borders - static, no blinking
          polygonsData={countries}
          polygonCapColor={() => CONTINENT_COLOR}
          polygonSideColor={() => CONTINENT_COLOR}
          polygonStrokeColor={(d) => countryHasService(d.properties.NAME) ? BUTTON_BG : LIGHT_GREY_BORDER}
          polygonAltitude={0.006}
          polygonsTransitionDuration={0}
          polygonStrokeWidth={(d) => countryHasService(d.properties.NAME) ? 1.5 : 0.4}
          
          // Stable rendering - no flicker
          rendererConfig={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
          }}
          
          enablePointerInteraction={true}
          pointsData={locationGroups[activeFilter]}
          pointLat={(d) => d.lat}
          pointLng={(d) => d.lng}
          pointColor={(d) => d.color}
          pointAltitude={0.02}
          pointRadius={0.4}
          pointResolution={16}
          
          htmlElementsData={locationGroups[activeFilter]}
          htmlLat={(d) => d.lat}
          htmlLng={(d) => d.lng}
          htmlAltitude={0.02}
          htmlElement={(d) => {
            // Define label positioning offsets for Alpine locations to avoid overlap
            const labelOffsets = {
              'courchevel': { x: -50, y: -25 },  // Left and up
              'megeve': { x: 40, y: -35 },       // Right and up more
              'verbier': { x: -45, y: 5 },       // Left and down
              'st-moritz': { x: 45, y: -20 }     // Right and up
            };
            
            const offset = labelOffsets[d.id] || { x: 0, y: 0 };
            const hasOffset = Math.abs(offset.x) > 0 || Math.abs(offset.y) > 0;
            
            const el = document.createElement('div');
            el.style.position = 'relative';
            el.style.display = 'flex';
            el.style.flexDirection = 'column';
            el.style.alignItems = 'center';
            
            // Create connector line for offset labels
            const connectorLine = hasOffset ? `
              <svg style="
                position: absolute;
                top: 50%;
                left: 50%;
                width: ${Math.abs(offset.x) + 20}px;
                height: ${Math.abs(offset.y) + 20}px;
                transform: translate(-50%, -50%);
                pointer-events: none;
                z-index: 0;
                overflow: visible;
              ">
                <line
                  x1="${offset.x < 0 ? Math.abs(offset.x) + 10 : 10}px"
                  y1="${offset.y < 0 ? Math.abs(offset.y) + 10 : 10}px"
                  x2="${offset.x < 0 ? 10 : Math.abs(offset.x) + 10}px"
                  y2="${offset.y < 0 ? 10 : Math.abs(offset.y) + 10}px"
                  stroke="${LIGHT_GREY_BORDER}"
                  stroke-width="1.5"
                  stroke-dasharray="3,3"
                />
              </svg>
            ` : '';
            
            el.innerHTML = `
              ${connectorLine}
              <div class="location-label" style="
                position: absolute;
                ${offset.y < 0 ? 'bottom' : 'top'}: ${Math.abs(offset.y) + 15}px;
                ${offset.x < 0 ? 'right' : 'left'}: ${Math.abs(offset.x) > 0 ? Math.abs(offset.x) + 15 : '50%'}px;
                ${Math.abs(offset.x) === 0 ? 'transform: translateX(-50%);' : ''}
                background: ${TOOLTIP_CREAM};
                color: ${DARK_GREY_TEXT};
                padding: 6px 14px;
                border-radius: 6px;
                font-size: 12px;
                font-weight: 600;
                font-family: 'Inter', -apple-system, sans-serif;
                white-space: nowrap;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
                border: 1px solid ${LIGHT_GREY_BORDER};
                pointer-events: auto;
                cursor: pointer;
                opacity: 0.95;
                transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease;
                z-index: 10;
              ">
                ${d.name}
              </div>
              <div style="
                width: 12px;
                height: 12px;
                background: ${d.color};
                border-radius: 50%;
                border: 2px solid ${SOFT_WHITE};
                box-shadow: 0 0 15px ${d.color}, 0 0 25px ${d.color}40;
                position: relative;
                z-index: 2;
              "></div>
            `;
            el.style.cursor = 'pointer';
            el.style.pointerEvents = 'auto';
            
            // Brighten label on hover
            el.onmouseenter = () => {
              const label = el.querySelector('.location-label');
              if (label) {
                label.style.opacity = '1';
                label.style.transform = 'scale(1.05)';
                label.style.background = '${SOFT_CREAM}';
              }
            };
            el.onmouseleave = () => {
              const label = el.querySelector('.location-label');
              if (label) {
                label.style.opacity = '0.95';
                label.style.transform = 'scale(1)';
                label.style.background = '${TOOLTIP_CREAM}';
              }
            };
            
            el.onclick = () => handleLocationSelect(d);
            return el;
          }}
          pointLabel={() => null}
          onPointClick={(d) => {
            handleLocationSelect(d);
          }}
        />
        </div>
        
        <div style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          zIndex: 10
        }}>
          <button
            onClick={() => {
              if (globeEl.current) {
                const pov = globeEl.current.pointOfView();
                globeEl.current.pointOfView({ ...pov, altitude: Math.max(0.5, pov.altitude - 0.3) }, 300);
              }
            }}
            style={{
              width: "42px",
              height: "42px",
              background: BUTTON_BG,
              border: `1px solid ${BUTTON_BG}`,
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: "20px",
              fontWeight: "300",
              color: BUTTON_TEXT,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 4px 16px rgba(43, 48, 84, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)`,
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = `0 8px 24px rgba(43, 48, 84, 0.35)`;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = `0 4px 16px rgba(43, 48, 84, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)`;
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              if (globeEl.current) {
                const pov = globeEl.current.pointOfView();
                globeEl.current.pointOfView({ ...pov, altitude: Math.min(5, pov.altitude + 0.3) }, 300);
              }
            }}
            style={{
              width: "42px",
              height: "42px",
              background: BUTTON_BG,
              border: `1px solid ${BUTTON_BG}`,
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: "20px",
              fontWeight: "300",
              color: BUTTON_TEXT,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 4px 16px rgba(43, 48, 84, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)`,
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = `0 8px 24px rgba(43, 48, 84, 0.35)`;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = `0 4px 16px rgba(43, 48, 84, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)`;
            }}
          >
            −
          </button>
        </div>

        {selected && currentProfile && (
          <div style={{
            position: "absolute",
            top: `${popupPosition.y}px`,
            left: `${popupPosition.x}px`,
            background: BUTTON_BG,
            borderRadius: "16px",
            padding: "0",
            boxShadow: `0 24px 64px rgba(43, 48, 84, 0.4), 0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.05)`,
            maxWidth: "360px",
            width: "360px",
            zIndex: 1000,
            maxHeight: "480px",
            overflow: "hidden",
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
            border: `1px solid rgba(255,255,255,0.15)`
          }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelected(null);
              }}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                width: "32px",
                height: "32px",
                background: 'rgba(255, 255, 255, 0.15)',
                border: `1px solid rgba(255, 255, 255, 0.25)`,
                borderRadius: "50%",
                cursor: "pointer",
                fontSize: "18px",
                color: BUTTON_TEXT,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "300",
                zIndex: 10,
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'rotate(90deg) scale(1.1)';
                e.target.style.background = 'rgba(255, 255, 255, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'rotate(0deg) scale(1)';
                e.target.style.background = 'rgba(255, 255, 255, 0.15)';
              }}
            >
              ×
            </button>

            <div style={{
              width: "100%",
              height: "160px",
              borderRadius: "16px 16px 0 0",
              background: `url(${currentProfile.image}) center/cover`,
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)`
              }} />
            </div>

            <div style={{ padding: "24px" }}>
              <h3 style={{ 
                margin: "0 0 6px 0", 
                fontSize: "22px",
                color: BUTTON_TEXT,
                fontWeight: "500",
                letterSpacing: '-0.3px'
              }}>
                {currentProfile.name}
              </h3>
              
              <p style={{ 
                margin: "0 0 16px 0", 
                fontSize: "12px",
                color: MUTED_BEIGE,
                fontWeight: '500',
                letterSpacing: '0.5px',
                textTransform: 'uppercase'
              }}>
                {currentProfile.country} {currentProfile.population && `· ${currentProfile.population}`}
              </p>
              
              <p style={{ 
                margin: "0 0 20px 0", 
                fontSize: "14px",
                color: "rgba(255,255,255,0.85)",
                lineHeight: "1.6",
                letterSpacing: '0.1px'
              }}>
                {currentProfile.description}
              </p>
              
              {currentProfile.highlights && currentProfile.highlights.length > 0 && (
                <div style={{ marginBottom: "20px" }}>
                  <h4 style={{ 
                    margin: "0 0 12px 0",
                    fontSize: "11px",
                    color: SOFT_GOLD,
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                  }}>
                    Highlights
                  </h4>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {currentProfile.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: BUTTON_TEXT,
                          padding: "6px 14px",
                          borderRadius: "20px",
                          fontSize: "11px",
                          border: `1px solid rgba(255, 255, 255, 0.2)`,
                          fontWeight: '500',
                          letterSpacing: '0.2px'
                        }}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={() => {
                  alert(`Thank you for your interest in ${currentProfile.name}!\n\nOur concierge team will contact you shortly to discuss your exclusive experience.`);
                }}
                style={{
                  width: "100%",
                  padding: "14px 24px",
                  background: BUTTON_TEXT,
                  color: BUTTON_BG,
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  fontFamily: "'Inter', -apple-system, sans-serif",
                  letterSpacing: '0.3px',
                  boxShadow: `0 8px 24px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255,255,255,0.3)`
                }}
                // onMouseEnter={(e) => {
                //   e.target.style.transform = "translateY(-2px)";
                //   e.target.style.boxShadow = `0 12px 32px rgba(255, 255, 255, 1), inset 0 1px 0 rgba(255,255,255,0.3)`;
                //   e.target.style.background = "rgba(39, 38, 38, 0.95)";
                // }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = `0 8px 24px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255,255,255,0.3)`;
                  e.target.style.background = BUTTON_TEXT;
                }}
              >
                Request Experience
              </button>
            </div>
          </div>
        )}
      </div>

      <div style={{ height: "60px" }} />
    </div>
  );
}