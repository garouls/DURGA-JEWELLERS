import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, MapPin, Clock, ArrowRight, ArrowLeft, 
  Sparkles, ShieldCheck, Heart, Compass, Award 
} from 'lucide-react';


// Banners customized for Kiner Kailash exact layout
const bannerImages = [
  {
    url: '/assets/ZIPBANGLES/WhatsApp Image 2026-05-25 at 5.13.45 PM.jpeg',
    pre: 'DJJPL',
    presents: 'PRESENTS',
    line1: 'A',
    line2: 'Lifetime',
    line3: 'OF',
    line4: 'Love',
    sub: 'Trusted by over 25,000+ customers in India, we offer exquisite gold jewellery designs and accurate gold rates.'
  },
  {
    url: '/assets/ZIPMODELS/WhatsApp Image 2026-05-25 at 4.50.46 PM.jpeg',
    pre: 'DJJPL',
    presents: 'PRESENTS',
    line1: 'THE',
    line2: 'Bridal',
    line3: 'OF',
    line4: 'Grace',
    sub: 'Exquisite hand-crafted chokers, necklaces, and heavy gold ornaments designed to make your wedding day royal.'
  },
  {
    url: '/assets/ZIPRINGS/WhatsApp Image 2026-05-25 at 5.19.39 PM.jpeg',
    pre: 'DJJPL',
    presents: 'PRESENTS',
    line1: 'AN',
    line2: 'Eternal',
    line3: 'OF',
    line4: 'Legacy',
    sub: 'Every cocktail ring and Polki statement piece is designed to tell a story of pure passion, luxury, and heritage.'
  }
];


// Models from ZIPMODELS
const modelImages = [
  {
    url: '/assets/ZIPMODELS/WhatsApp Image 2026-05-25 at 4.50.46 PM.jpeg',
    title: 'Traditional Bridal Heritage',
    desc: 'Adorned in heavy gold choker necklaces, signature rings, and classic jumki earrings.'
  },
  {
    url: '/assets/ZIPMODELS/WhatsApp Image 2026-05-25 at 4.50.46 PM (1).jpeg',
    title: 'The Modern Queen',
    desc: 'Featuring royal temple jewelry with premium antique polish.'
  },
  {
    url: '/assets/ZIPMODELS/WhatsApp Image 2026-05-25 at 4.50.47 PM.jpeg',
    title: 'Festive Grace',
    desc: 'Dressed in gorgeous traditional red attire featuring handcrafted necklaces and gold bangles.'
  },
  {
    url: '/assets/ZIPMODELS/WhatsApp Image 2026-05-25 at 4.50.47 PM (1).jpeg',
    title: 'Regal Splendor',
    desc: 'A spectacular showcase of handcarved gold necklaces, intricate kadas, and statement jewelry.'
  }
];

// Bangles from ZIPBANGLES
const bangleImages = [
  {
    id: 'bangle-1',
    url: '/assets/ZIPBANGLES/WhatsApp Image 2026-05-25 at 5.13.45 PM.jpeg',
    title: 'Royal Antique Kundan Kada',
    category: 'BANGLES',
    weight: '48.5 Grams',
    purity: '22K Hallmarked Gold'
  },
  {
    id: 'bangle-2',
    url: '/assets/ZIPBANGLES/WhatsApp Image 2026-05-25 at 5.13.46 PM.jpeg',
    title: 'Imperial Peacock Filigree Kada',
    category: 'BANGLES',
    weight: '36.2 Grams',
    purity: '22K Hallmarked Gold'
  },
  {
    id: 'bangle-3',
    url: '/assets/ZIPBANGLES/WhatsApp Image 2026-05-25 at 5.13.46 PM (1).jpeg',
    title: 'Traditional Polki Jadau Bangle Set',
    category: 'BANGLES',
    weight: '54.0 Grams',
    purity: '22K Hallmarked Gold'
  },
  {
    id: 'bangle-4',
    url: '/assets/ZIPBANGLES/WhatsApp Image 2026-05-25 at 5.13.46 PM (2).jpeg',
    title: 'Luxury Gold-Beaded Kada',
    category: 'BANGLES',
    weight: '42.8 Grams',
    purity: '22K Hallmarked Gold'
  }
];

// Earrings from ZIPEARRINGS
const earringImages = [
  {
    id: 'earring-1',
    url: '/assets/ZIPEARRINGS/WhatsApp Image 2026-05-25 at 5.17.00 PM.jpeg',
    title: 'Heritage Royal Jhumka Set',
    category: 'EARRINGS',
    weight: '24.5 Grams',
    purity: '22K Hallmarked Gold'
  },
  {
    id: 'earring-2',
    url: '/assets/ZIPEARRINGS/WhatsApp Image 2026-05-25 at 5.17.00 PM (1).jpeg',
    title: 'Polki Chandbali Heritage Jhumki',
    category: 'EARRINGS',
    weight: '32.8 Grams',
    purity: '22K Hallmarked Gold'
  },
  {
    id: 'earring-3',
    url: '/assets/ZIPEARRINGS/WhatsApp Image 2026-05-25 at 5.17.00 PM (2).jpeg',
    title: 'Imperial Heavy Wedding Jhumkas',
    category: 'EARRINGS',
    weight: '41.2 Grams',
    purity: '22K Hallmarked Gold'
  },
  {
    id: 'earring-4',
    url: '/assets/ZIPEARRINGS/WhatsApp Image 2026-05-25 at 5.17.01 PM.jpeg',
    title: 'Elegant Antique Drop Earrings',
    category: 'EARRINGS',
    weight: '18.6 Grams',
    purity: '22K Hallmarked Gold'
  }
];

// Mangalsutra from ZIPMANGALSUTRA
const mangalsutraImages = [
  {
    id: 'mangal-1',
    url: '/assets/ZIPMANGALSUTRA/WhatsApp Image 2026-05-25 at 5.17.50 PM.jpeg',
    title: 'Dazzling Solitaire Diamond Mangalsutra',
    category: 'MANGALSUTRA',
    weight: '18.2 Grams',
    purity: '18K Gold & Certified Diamonds'
  },
  {
    id: 'mangal-2',
    url: '/assets/ZIPMANGALSUTRA/WhatsApp Image 2026-05-25 at 5.17.51 PM.jpeg',
    title: 'Heritage Royal Jadau Mangalsutra',
    category: 'MANGALSUTRA',
    weight: '28.5 Grams',
    purity: '22K Hallmarked Gold'
  },
  {
    id: 'mangal-3',
    url: '/assets/ZIPMANGALSUTRA/WhatsApp Image 2026-05-25 at 5.17.52 PM.jpeg',
    title: 'Classic Traditional Gold Mangalsutra',
    category: 'MANGALSUTRA',
    weight: '22.0 Grams',
    purity: '22K Hallmarked Gold'
  }
];

// Rings from ZIPRINGS
const ringImages = [
  {
    id: 'ring-1',
    url: '/assets/ZIPRINGS/WhatsApp Image 2026-05-25 at 5.19.39 PM.jpeg',
    title: 'Grand Royal Rajwadi Ring',
    category: 'RINGS',
    weight: '16.5 Grams',
    purity: '22K Gold & Precious Gems'
  },
  {
    id: 'ring-2',
    url: '/assets/ZIPRINGS/WhatsApp Image 2026-05-25 at 5.19.40 PM.jpeg',
    title: 'Traditional Polki Jadau Ring',
    category: 'RINGS',
    weight: '14.2 Grams',
    purity: '22K Gold & Polki'
  },
  {
    id: 'ring-3',
    url: '/assets/ZIPRINGS/WhatsApp Image 2026-05-25 at 5.19.40 PM (1).jpeg',
    title: 'Luxury Kundan Cocktail Ring',
    category: 'RINGS',
    weight: '18.0 Grams',
    purity: '22K Hallmarked Gold'
  },
  {
    id: 'ring-4',
    url: '/assets/ZIPRINGS/WhatsApp Image 2026-05-25 at 5.19.41 PM.jpeg',
    title: 'Dazzling Royal Floral Band',
    category: 'RINGS',
    weight: '11.4 Grams',
    purity: '22K Hallmarked Gold'
  }
];

const allProducts = [...bangleImages, ...earringImages, ...mangalsutraImages, ...ringImages];

const categories = [
  'ALL',
  'BANGLES',
  'EARRINGS',
  'MANGALSUTRA',
  'RINGS'
];


const ADMIN_PASSWORD = 'durga@1988';

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModelSlide, setActiveModelSlide] = useState(0);
  const [likedProducts, setLikedProducts] = useState({});

  // Gold Rate State
  const [goldRate22K, setGoldRate22K] = useState(() => {
    try { return localStorage.getItem('dj_gold_22k') || '7,250'; } catch { return '7,250'; }
  });
  const [goldRate24K, setGoldRate24K] = useState(() => {
    try { return localStorage.getItem('dj_gold_24k') || '7,900'; } catch { return '7,900'; }
  });
  const [silverRate, setSilverRate] = useState(() => {
    try { return localStorage.getItem('dj_silver') || '92'; } catch { return '92'; }
  });
  const [rateDate, setRateDate] = useState(() => {
    try { return localStorage.getItem('dj_rate_date') || new Date().toLocaleDateString('en-IN'); } catch { return new Date().toLocaleDateString('en-IN'); }
  });

  // Admin Panel State
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminUnlocked, setAdminUnlocked] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [adminError, setAdminError] = useState('');
  const [tempRates, setTempRates] = useState({ gold22k: '', gold24k: '', silver: '' });

  const handleAdminUnlock = () => {
    if (adminPassword === ADMIN_PASSWORD) {
      setAdminUnlocked(true);
      setAdminError('');
      setTempRates({ gold22k: goldRate22K, gold24k: goldRate24K, silver: silverRate });
    } else {
      setAdminError('Incorrect password. Please try again.');
    }
  };

  const handleRateSave = () => {
    setGoldRate22K(tempRates.gold22k);
    setGoldRate24K(tempRates.gold24k);
    setSilverRate(tempRates.silver);
    const today = new Date().toLocaleDateString('en-IN');
    setRateDate(today);
    try {
      localStorage.setItem('dj_gold_22k', tempRates.gold22k);
      localStorage.setItem('dj_gold_24k', tempRates.gold24k);
      localStorage.setItem('dj_silver', tempRates.silver);
      localStorage.setItem('dj_rate_date', today);
    } catch {}
    setShowAdmin(false);
    setAdminUnlocked(false);
    setAdminPassword('');
  };

  const handleAdminClose = () => {
    setShowAdmin(false);
    setAdminUnlocked(false);
    setAdminPassword('');
    setAdminError('');
  };



  // Auto-advance banner carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto-advance models slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveModelSlide((prev) => (prev + 1) % modelImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };


  const toggleLike = (id) => {
    setLikedProducts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    const showcaseElement = document.getElementById('showcase');
    if (showcaseElement) {
      showcaseElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter products based on selected tab
  const filteredProducts = activeCategory === 'ALL' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div className="app-container">

      {/* Gold Rate Ticker Bar */}
      <div className="gold-ticker-bar">
        {/* Pinned LIVE label */}
        <div className="ticker-pinned-label">
          <span className="ticker-live-dot" />
          <span className="ticker-live-text">Live Rates</span>
        </div>

        {/* Scrolling marquee strip */}
        <div className="ticker-scroll-wrapper">
          <div className="ticker-scroll-track">
            {/* Render twice for seamless infinite loop */}
            {[0, 1].map(i => (
              <span key={i} style={{ display: 'contents' }}>
                <span className="ticker-rate-pill">
                  <span className="ticker-rate-icon">🥇</span>
                  <span className="ticker-rate-label">22K Gold</span>
                  <span className="ticker-rate-value">₹{goldRate22K}</span>
                  <span className="ticker-rate-unit">/gm</span>
                </span>
                <span className="ticker-rate-pill">
                  <span className="ticker-rate-icon">✨</span>
                  <span className="ticker-rate-label">24K Gold</span>
                  <span className="ticker-rate-value">₹{goldRate24K}</span>
                  <span className="ticker-rate-unit">/gm</span>
                </span>
                <span className="ticker-rate-pill">
                  <span className="ticker-rate-icon">🥈</span>
                  <span className="ticker-rate-label">Silver</span>
                  <span className="ticker-rate-value">₹{silverRate}</span>
                  <span className="ticker-rate-unit">/gm</span>
                </span>
                <span className="ticker-rate-date">
                  📅 {rateDate} &nbsp;•&nbsp; BIS Hallmarked &nbsp;•&nbsp; Rates updated daily
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Admin gear */}
        <button className="ticker-admin-btn" onClick={() => setShowAdmin(true)} title="Admin Panel">⚙️</button>
      </div>


      {/* Admin Panel Modal */}
      {showAdmin && (
        <div className="admin-overlay" onClick={handleAdminClose}>
          <div className="admin-modal" onClick={e => e.stopPropagation()}>
            <button className="admin-close-btn" onClick={handleAdminClose}>✕</button>
            <div className="admin-header">
              <span className="admin-icon">👑</span>
              <h2 className="admin-title">Admin Panel</h2>
              <p className="admin-subtitle">Durga Jewellers — Rate Manager</p>
            </div>
            {!adminUnlocked ? (
              <div className="admin-login">
                <label className="admin-label">Enter Admin Password</label>
                <input
                  type="password"
                  className="admin-input"
                  placeholder="Password"
                  value={adminPassword}
                  onChange={e => setAdminPassword(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleAdminUnlock()}
                />
                {adminError && <p className="admin-error">{adminError}</p>}
                <button className="admin-submit-btn" onClick={handleAdminUnlock}>Unlock</button>
              </div>
            ) : (
              <div className="admin-form">
                <div className="admin-field">
                  <label className="admin-label">22K Gold Rate (₹/gm)</label>
                  <input
                    type="text"
                    className="admin-input"
                    value={tempRates.gold22k}
                    onChange={e => setTempRates(p => ({ ...p, gold22k: e.target.value }))}
                    placeholder="e.g. 7,250"
                  />
                </div>
                <div className="admin-field">
                  <label className="admin-label">24K Gold Rate (₹/gm)</label>
                  <input
                    type="text"
                    className="admin-input"
                    value={tempRates.gold24k}
                    onChange={e => setTempRates(p => ({ ...p, gold24k: e.target.value }))}
                    placeholder="e.g. 7,900"
                  />
                </div>
                <div className="admin-field">
                  <label className="admin-label">Silver Rate (₹/gm)</label>
                  <input
                    type="text"
                    className="admin-input"
                    value={tempRates.silver}
                    onChange={e => setTempRates(p => ({ ...p, silver: e.target.value }))}
                    placeholder="e.g. 92"
                  />
                </div>
                <button className="admin-save-btn" onClick={handleRateSave}>💾 Save Rates</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 1. Header & Navigation */}
      <header className="header-main">
        <div className="nav-container">
          
          {/* Logo Brand Title Image */}
          <a href="#" className="nav-brand">
            <img 
              src="/assets/logo.png" 
              alt="Durga Jewellers Jammu" 
              className="brand-logo-img"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav">
            <a href="#" className="nav-link">HOME</a>
            <a href="#collage" className="nav-link">OUR STORY</a>
            <a href="#categories" className="nav-link">CATEGORIES</a>
            <a href="#showcase" className="nav-link">COLLECTIONS</a>
            <a href="#models" className="nav-link">OUR MODELS</a>
            <a href="#contact" className="nav-link">CONTACT</a>
          </nav>

          {/* Call button */}
          <a href="tel:+911912540000" className="call-btn">
            <Phone className="icon-sm" />
            <span>CALL NOW</span>
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="icon-md" /> : <Menu className="icon-md" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <a href="#" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">HOME</a>
            <a href="#collage" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">OUR STORY</a>
            <a href="#categories" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">CATEGORIES</a>
            <a href="#showcase" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">COLLECTIONS</a>
            <a href="#models" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">OUR MODELS</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">CONTACT</a>
            <a href="tel:+911912540000" className="mobile-call-btn">
              <Phone className="icon-sm" />
              <span>CALL NOW</span>
            </a>
          </div>
        )}
      </header>

      {/* 2. Hero Banner Slider Carousel */}
      <section className="hero-section">
        {bannerImages.map((banner, index) => (
          <div 
            key={index}
            className={`carousel-slide ${index === activeSlide ? 'active' : ''}`}
          >
            
            {/* Embedded Floating Lotus Flowers (Pink Petals & Soft Green Leaves) */}
            <svg className="lotus-floating left" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Green base leaves */}
              <path d="M60 90C45 90 20 80 15 70C25 65 45 75 60 90Z" fill="#3d5a45" opacity="0.8" />
              <path d="M60 90C75 90 100 80 105 70C95 65 75 75 60 90Z" fill="#3d5a45" opacity="0.8" />
              {/* Pink petals layered */}
              <path d="M60 30C52 50 35 65 20 70C40 70 52 78 60 100C68 78 80 70 100 70C85 65 68 50 60 30Z" fill="#e07a93" opacity="0.85" />
              <path d="M60 45C55 60 43 72 30 75C45 75 55 80 60 95C65 80 75 75 90 75C77 72 65 60 60 45Z" fill="#f2a8b9" opacity="0.95" />
              <path d="M60 55C57 68 50 75 42 78C50 78 57 82 60 90C63 82 70 78 78 78C70 75 63 68 60 55Z" fill="#ffffff" opacity="0.9" />
              <circle cx="60" cy="78" r="4" fill="#b8923a" />
            </svg>

            <svg className="lotus-floating right" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Green base leaves */}
              <path d="M60 90C45 90 20 80 15 70C25 65 45 75 60 90Z" fill="#3d5a45" opacity="0.8" />
              <path d="M60 90C75 90 100 80 105 70C95 65 75 75 60 90Z" fill="#3d5a45" opacity="0.8" />
              {/* Pink petals layered */}
              <path d="M60 30C52 50 35 65 20 70C40 70 52 78 60 100C68 78 80 70 100 70C85 65 68 50 60 30Z" fill="#e07a93" opacity="0.85" />
              <path d="M60 45C55 60 43 72 30 75C45 75 55 80 60 95C65 80 75 75 90 75C77 72 65 60 60 45Z" fill="#f2a8b9" opacity="0.95" />
              <path d="M60 55C57 68 50 75 42 78C50 78 57 82 60 90C63 82 70 78 78 78C70 75 63 68 60 55Z" fill="#ffffff" opacity="0.9" />
              <circle cx="60" cy="78" r="4" fill="#b8923a" />
            </svg>

            <div className="carousel-overlay">
              
              {/* Present badges block */}
              <div className="banner-badge-container">
                <span className="banner-brand-tag">{banner.pre}</span>
                <span className="banner-presents-tag">{banner.presents}</span>
              </div>

              {/* Title Word Line layout (A Lifetime OF Love style) */}
              <h1 className="banner-main-title">
                <span className="title-decor-box"><span className="title-decor-text">{banner.line1}</span></span>
                <span className="title-line-word">{banner.line2}</span>
                <span className="title-decor-box"><span className="title-decor-text">{banner.line3}</span></span>
                <span className="title-line-word">{banner.line4}</span>
              </h1>

              {/* Central Oval Arched Frame */}
              <div className="hero-oval-arch-frame">
                <img 
                  src={banner.url} 
                  alt={banner.line2}
                  className="hero-arch-inner-image"
                />
              </div>


            </div>
          </div>
        ))}

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`indicator-dot ${index === activeSlide ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Carousel Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="carousel-nav-btn prev"
          aria-label="Previous slide"
          style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#ffffff', border: '1px solid #c5c2ba' }}
        >
          <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px' }} fill="none" stroke="#b8923a" strokeWidth="1.5">
            <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5" />
            <circle cx="12" cy="12" r="2.5" fill="#b8923a" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="carousel-nav-btn next"
          aria-label="Next slide"
          style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#ffffff', border: '1px solid #c5c2ba' }}
        >
          <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px' }} fill="none" stroke="#b8923a" strokeWidth="1.5">
            <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5" />
            <circle cx="12" cy="12" r="2.5" fill="#b8923a" />
          </svg>
        </button>

        {/* Breathing Scroll Down Indicator */}
        <div className="hero-scroll-indicator">
          <span className="scroll-text">SCROLL DOWN</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* 3. Vintage Collage Showcase Section */}
      <section id="collage" className="collage-section">
        <div className="section-inner">
          <div className="section-header">
            <div className="title-divider" />
          </div>

          <div className="collage-grid">
            
            {/* Left Collage Blocks */}
            <div className="collage-left">
              <div>
                <span className="polaroid-label-above">JEWELS TO BE TREASURED FOR GENERATIONS</span>
                {/* Polaroid Photo 1 */}
                <div className="polaroid-frame polaroid-left">
                  <div className="polaroid-image-container">
                    <img 
                      src="/assets/ZIPEARRINGS/WhatsApp Image 2026-05-25 at 5.17.00 PM.jpeg" 
                      alt="Heritage Earring Gold Piece"
                      className="polaroid-image"
                    />
                  </div>
                  <div className="polaroid-caption">
                    <span className="caption-main">THE ROYAL JADAU HARAM</span>
                    <span className="caption-sub">Durga Jewellers Heritage</span>
                  </div>
                </div>
              </div>

              {/* Polaroid Photo 2 (Model wearing Red Sari) */}
              <div className="polaroid-frame polaroid-right">
                <div className="polaroid-image-container aspect-[3/4]">
                  <img 
                    src="/assets/ZIPMODELS/WhatsApp Image 2026-05-25 at 4.50.46 PM.jpeg" 
                    alt="Bridal Heritage Gold Necklace Model"
                    className="polaroid-image"
                  />
                </div>
                <div className="polaroid-caption">
                  <span className="caption-main">ROYAL BRIDAL ESSENCE</span>
                  <span className="caption-sub">Traditional Heritage Jhumkis</span>
                </div>
              </div>
            </div>

            {/* Middle Collage / Model Circle */}
            <div className="collage-middle">
              <div className="circle-frame-wrapper">
                <div className="ring-glow" />
                <div className="circle-image-container">
                  <img 
                    src="/assets/ZIPMODELS/WhatsApp Image 2026-05-25 at 4.50.46 PM (1).jpeg" 
                    alt="Royal Traditional Model"
                    className="circle-image"
                  />
                </div>
                
                {/* Small overlay Badge */}
                <div className="royal-badge">
                  <Award className="icon-sm text-gold" />
                  <span className="badge-year">SINCE 1988</span>
                  <span className="badge-title">ROYAL TRADITION</span>
                </div>
              </div>
            </div>

            {/* Right Collage Blocks */}
            <div className="collage-right">
              {/* Polaroid Photo 3 */}
              <div className="polaroid-frame polaroid-left">
                <div className="polaroid-image-container">
                  <img 
                    src="/assets/ZIPRINGS/WhatsApp Image 2026-05-25 at 5.19.39 PM.jpeg" 
                    alt="Heritage Statement Ring"
                    className="polaroid-image"
                  />
                </div>
                <div className="polaroid-caption">
                  <span className="caption-main">RAJWADI STATEMENT RING</span>
                  <span className="caption-sub">Handcarved Gold Heritage</span>
                </div>
              </div>

              {/* Circular Earrings Frame with Watermark badge */}
              <div className="circle-frame-wrapper" style={{ alignSelf: 'center', marginTop: '10px' }}>
                <div className="circle-image-container" style={{ width: '180px', height: '180px', borderStyle: 'dashed' }}>
                  <img 
                    src="/assets/ZIPEARRINGS/WhatsApp Image 2026-05-25 at 5.17.00 PM (1).jpeg" 
                    alt="Earring highlight"
                    className="circle-image"
                  />
                </div>
                <div className="badge-card" style={{ marginTop: '15px', borderRadius: '8px' }}>
                  <div className="badge-card-header">
                    <ShieldCheck className="icon-sm text-gold" />
                    <span className="badge-card-title">100% HALLMARKED</span>
                  </div>
                  <p className="badge-card-text">
                    Pure BIS 22K Hallmarked Gold.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Shop By Category */}
      <section id="categories" className="categories-section">
        <div className="section-inner">
          
          <div className="section-header">
            <h2 className="section-pretitle">SHOP BY CATEGORY</h2>
            <h3 className="section-title">The collection everyone is talking about</h3>
            <div className="title-divider" />
          </div>

          <div className="categories-marquee-container">
            <div className="categories-marquee-row">
              {[1, 2, 3, 4].map((multiplier) => (
                <React.Fragment key={multiplier}>
                  {/* Category 1: BANGLES */}
                  <div className="category-card" onClick={() => handleCategoryClick('BANGLES')}>
                    <div className="category-image-wrapper">
                      <img 
                        src={bangleImages[1].url} 
                        alt="Bangles & Kadas"
                        className="category-image"
                      />
                    </div>
                    <h4 className="category-card-title">BANGLES & KADAS</h4>
                  </div>

                  {/* Category 2: EARRINGS */}
                  <div className="category-card" onClick={() => handleCategoryClick('EARRINGS')}>
                    <div className="category-image-wrapper">
                      <img 
                        src={earringImages[0].url} 
                        alt="Earrings Collection"
                        className="category-image"
                      />
                    </div>
                    <h4 className="category-card-title">EARRINGS</h4>
                  </div>

                  {/* Category 3: MANGALSUTRA */}
                  <div className="category-card" onClick={() => handleCategoryClick('MANGALSUTRA')}>
                    <div className="category-image-wrapper">
                      <img 
                        src={mangalsutraImages[0].url} 
                        alt="Mangalsutra Collection"
                        className="category-image"
                      />
                    </div>
                    <h4 className="category-card-title">MANGALSUTRA</h4>
                  </div>

                  {/* Category 4: RINGS */}
                  <div className="category-card" onClick={() => handleCategoryClick('RINGS')}>
                    <div className="category-image-wrapper">
                      <img 
                        src={ringImages[0].url} 
                        alt="Statement Rings Collection"
                        className="category-image"
                      />
                    </div>
                    <h4 className="category-card-title">STATEMENT RINGS</h4>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Jewelry Showcase & Category Filters */}
      <section id="showcase" className="showcase-section">
        <div className="section-inner">
          
          <div className="section-header">
            <h2 className="section-pretitle">SHOP BY COLLECTION</h2>
            <h3 className="section-title">Explore our diverse selections</h3>
            <p className="section-header-sub">BIS Hallmarked • Custom Handcrafted Designs</p>
            <div className="title-divider" />
          </div>

          {/* Interactive Filter Buttons (Image 3 Style) */}
          <div className="filter-container">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid Showcase */}
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="product-card"
              >
                {/* Product Image Frame */}
                <div className="product-image-outer">
                  <div className="product-image-inner">
                    <img 
                      src={product.url} 
                      alt={product.title}
                      className="product-image"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="product-card-hover-overlay">
                      <button 
                        onClick={() => toggleLike(product.id)}
                        className={`wishlist-btn ${likedProducts[product.id] ? 'liked' : ''}`}
                        aria-label="Add to wishlist"
                      >
                        <Heart className="icon-sm" />
                      </button>
                      <a 
                        href={`https://wa.me/919419137701?text=Hello%20Durga%20Jewellers,%20I%20am%20interested%20in%20buying%20your%20${encodeURIComponent(product.title)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="whatsapp-inquire-btn"
                      >
                        INQUIRE ON WHATSAPP
                      </a>
                    </div>
                  </div>
                </div>

                {/* Info Area */}
                <div className="product-card-info">
                  <div>
                    <span className="product-card-category">{product.category}</span>
                    <h4 className="product-card-title-text">
                      {product.title}
                    </h4>
                  </div>
                  
                  <div className="product-card-specs">
                    <div className="spec-item">
                      <span className="spec-label">Purity</span>
                      <span className="spec-val">{product.purity}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="custom-order-box">
              <span className="custom-order-title">CUSTOM ORDER ONLY</span>
              <p className="custom-order-desc">
                We craft bespoke handcrafted pieces matching your specifications for {activeCategory}. Please contact our Bari Brahmana showroom on WhatsApp to design your dream piece.
              </p>
              <a 
                href="https://wa.me/919419137701?text=Hello%20Durga%20Jewellers,%20I%20want%20to%20place%20a%20custom%20order." 
                target="_blank"
                rel="noreferrer"
                className="custom-order-link"
              >
                TALK TO DESIGNER &rarr;
              </a>
            </div>
          )}

        </div>
      </section>

      {/* 6. Our Models Gallery Horizontal Marquee Strip */}
      <section id="models" className="models-marquee-section">
        <div className="section-inner" style={{ maxWidth: '100%', padding: '0 0' }}>
          
          <div className="section-header">
            <h3 className="section-title">OUR MODELS</h3>
            <div className="title-divider" />
          </div>

          <div className="models-marquee-container">
            <div className="models-marquee-row">
              {/* Duplicate the models list four times for a mathematically perfect infinite loop */}
              {[...modelImages, ...modelImages, ...modelImages, ...modelImages].map((model, index) => (
                <div key={index} className="model-marquee-card">
                  <img 
                    src={model.url} 
                    alt={model.title} 
                    className="model-marquee-img" 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. Showroom Location & Contact */}
      <section id="contact" className="contact-section">
        <div className="section-inner">
          <div className="contact-grid">
            
            {/* Showroom info & Details */}
            <div className="contact-info-block">
              <h2 className="section-pretitle">VISIT OUR SHOWROOM</h2>
              <h3 className="showroom-title">Durga Jewellers</h3>
              <p className="showroom-desc">
                Step into a world of pure heritage gold and flawless diamonds. Our flagship showroom in Bari Brahmana showcases one-of-a-kind bespoke bridal sets, beautiful light-weight items, and custom kada collections.
              </p>

              <div className="info-cards-stack">
                
                {/* Location */}
                <div className="info-card-item">
                  <div className="info-card-icon-wrapper">
                    <MapPin className="icon-md" />
                  </div>
                  <div className="info-card-text">
                    <h4 className="info-card-label">Our Showroom Address</h4>
                    <p className="info-card-value">
                      Durga Jewellers, Mandir Bazar, Ward No. 2, Bari Brahmana, India
                    </p>
                  </div>
                </div>

                {/* Timing */}
                <div className="info-card-item">
                  <div className="info-card-icon-wrapper">
                    <Clock className="icon-md" />
                  </div>
                  <div className="info-card-text">
                    <h4 className="info-card-label">Showroom Timings</h4>
                    <p className="info-card-value">
                      Mon - Sat: 10:30 AM to 08:00 PM <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="info-card-item">
                  <div className="info-card-icon-wrapper">
                    <Phone className="icon-md" />
                  </div>
                  <div className="info-card-text">
                    <h4 className="info-card-label">Phone & Inquiries</h4>
                    <a href="tel:+919419137701" className="info-card-phone-link">
                      +91 94191 37701 (Bari Brahmana Line)
                    </a>
                    <a href="https://wa.me/919419137701" className="whatsapp-link" target="_blank" rel="noreferrer">
                      CONNECT ON WHATSAPP &rarr;
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="contact-form-block">
              <h4 className="form-card-title">Book an Appointment</h4>
              <p className="form-card-subtitle">
                Fill the form below to receive a personalized bridal collection catalog or schedule a virtual preview call.
              </p>
              
              <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! Our Bari Brahmana showroom representative will reach out to you shortly."); }} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="input-label">Your Full Name</label>
                    <input 
                      type="text" 
                      required 
                      className="form-input"
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="input-label">Your Mobile Number</label>
                    <input 
                      type="tel" 
                      required
                      className="form-input"
                      placeholder="e.g. +91 99999 99999"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="input-label">Interested Category</label>
                  <select 
                    className="form-select"
                  >
                    <option>Heritage Bangles & Kadas</option>
                    <option>Bridal Choker Necklaces</option>
                    <option>Heritage Jhumki & Earrings</option>
                    <option>Statement Rings</option>
                    <option>Custom Handcrafted Polki</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="input-label">Additional Message</label>
                  <textarea 
                    className="form-textarea"
                    placeholder="Describe your design preference, weight, and requirements..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="form-submit-btn"
                >
                  SUBMIT INQUIRY
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="footer-main">
        <div className="footer-inner">
          <div className="footer-brand">
            <img 
              src="/assets/logo.png" 
              alt="Durga Jewellers Jammu" 
              className="footer-brand-logo-img"
            />
            <span className="footer-brand-sub">MANDIR BAZAR, WARD NO 2, BARI BRAHMANA</span>
          </div>

          <div className="footer-links">
            <a href="#" className="footer-link-item">PRIVACY POLICY</a>
            <span className="footer-separator">•</span>
            <a href="#" className="footer-link-item">TERMS OF USE</a>
            <span className="footer-separator">•</span>
            <a href="#" className="footer-link-item">BIS HALLMARKING POLICY</a>
          </div>

          <div className="footer-socials">
            <span className="social-label">FOLLOW US ON INSTAGRAM:</span>
            <a href="https://www.instagram.com/durga_jewellers_jammu?igsh=cGE2cHd3Ynk0cTlm" target="_blank" rel="noreferrer" className="instagram-circle-btn" aria-label="Instagram">
              <svg className="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <path d="M17.5 6.5h.01"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Durga Jewellers Jammu. All Rights Reserved. Pure BIS Hallmarked Gold & Certified Diamonds.
        </div>
      </footer>



    </div>
  );
}
