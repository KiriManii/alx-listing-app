/*
 * FILE PATH: alx-listing-app/pages/index.tsx
 * Homepage matching the exact Figma design
 * Features: Header with search, hero section, categories, filters, property grid
 */

import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { UI_TEXT, PROPERTY_CATEGORIES } from '../constants';

/**
 * Homepage component matching the exact Figma design
 * Includes header, hero, categories, filters, and property grid
 */
const HomePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Houses');
  const [activeFilter, setActiveFilter] = useState('Top picks');
  const [currency, setCurrency] = useState('USD');
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  // Sample property data with review counts
  const sampleProperties = [
    {
      id: 1,
      title: 'Villa Arrecife Beach House',
      location: 'Sidemen, Bali, Indonesia',
      image: '/assets/property-1.jpg',
      price: 2450,
      originalPrice: 3500,
      discountPercentage: 30,
      rating: 4.76,
      reviewCount: 172,
      propertyTypes: ['Top Villa', 'Self Checkin', 'Free Reschedule'],
      bedrooms: 4,
      bathrooms: 3,
      area: 2,
    },
    {
      id: 2,
      title: 'Entire cabin',
      location: 'Nova Friburgo, Brazil',
      image: '/assets/property-2.jpg',
      price: 627,
      rating: 4.78,
      reviewCount: 95,
      propertyTypes: ['Top Villa', 'Self Checkin', 'Free Reschedule'],
      bedrooms: 2,
      bathrooms: 1,
      area: 1,
    },
    {
      id: 3,
      title: 'Earthen home',
      location: 'Santa Marta, Colombia',
      image: '/assets/property-3.jpg',
      price: 386,
      rating: 4.76,
      reviewCount: 203,
      propertyTypes: ['Top Villa', 'Self Checkin', 'Free Reschedule'],
      bedrooms: 3,
      bathrooms: 2,
      area: 1,
    },
    {
      id: 4,
      title: 'Private room',
      location: 'Machala, Brazil',
      image: '/assets/property-4.jpg',
      price: 154,
      rating: 4.76,
      reviewCount: 89,
      propertyTypes: ['Top Villa', 'Self Checkin', 'Free Reschedule'],
      bedrooms: 1,
      bathrooms: 1,
      area: 1,
    },
  ];

  // Exact filter labels from Gemini description
  const filters = [
    'Top picks',
    'New arrivals', 
    'Say Villas',
    'Free cancellation',
    'Book now pay later',
    'Self check-in',
    'Instant book',
  ];

  // Handle favorite toggle
  const handleFavoriteToggle = (propertyId: string | number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(Number(propertyId))) {
      newFavorites.delete(Number(propertyId));
    } else {
      newFavorites.add(Number(propertyId));
    }
    setFavorites(newFavorites);
  };

  // Handle property card click
  const handlePropertyClick = (propertyId: number) => {
    console.log(`Clicked property ID: ${propertyId}`);
    alert(`Viewing property ${propertyId} - Navigation will be implemented next!`);
  };

  // Handle search
  const handleSearch = () => {
    console.log('Search initiated');
    alert('Search functionality will be implemented in the next milestone!');
  };

  return (
    <>
      <Head>
        <title>{UI_TEXT.APP_NAME}</title>
        <meta name="description" content={UI_TEXT.APP_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Top Banner */}
        <div className="bg-teal-400 text-white text-center py-2 px-4 text-sm">
          <span className="flex items-center justify-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
            </svg>
            <span>Overseas trip? Get the latest information on travel guides</span>
            <span className="bg-white bg-opacity-20 px-2 py-1 rounded text-xs font-medium">New Info</span>
          </span>
        </div>

        {/* Header */}
        <header className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold lowercase">
                  {UI_TEXT.APP_NAME}
                </h1>
              </div>

              {/* Navigation Links */}
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">
                  {UI_TEXT.NAVIGATION.STAY}
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">
                  {UI_TEXT.NAVIGATION.VILLAS}
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">
                  {UI_TEXT.NAVIGATION.HOTELS}
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">
                  {UI_TEXT.NAVIGATION.RENTALS}
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">
                  {UI_TEXT.NAVIGATION.EXPLORE}
                </a>
              </nav>

              {/* Right Section */}
              <div className="flex items-center space-x-4">
                {/* List Your Place Button */}
                <Button variant="secondary" size="sm" className="hidden md:flex bg-white text-gray-900 hover:bg-gray-100">
                  {UI_TEXT.BUTTONS.LIST_YOUR_PLACE}
                </Button>

                {/* Currency Selector */}
                <div className="hidden md:flex items-center space-x-1 text-sm">
                  <select 
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="bg-transparent border-none text-white focus:outline-none cursor-pointer"
                  >
                    <option value="USD" className="text-gray-900">USD</option>
                    <option value="EUR" className="text-gray-900">EUR</option>
                    <option value="GBP" className="text-gray-900">GBP</option>
                  </select>
                </div>

                {/* Language Selector */}
                <button className="hidden md:flex items-center space-x-1 text-sm hover:text-gray-300 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 0V3" />
                  </svg>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                {/* Auth Buttons */}
                <Button variant="ghost" size="sm" className="text-white hover:text-gray-900">
                  {UI_TEXT.BUTTONS.SIGN_IN}
                </Button>
                <Button variant="primary" size="sm">
                  {UI_TEXT.BUTTONS.SIGN_UP}
                </Button>
              </div>
            </div>
          </div>

          {/* Secondary Search Bar */}
          <div className="bg-gray-800 bg-opacity-50 py-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center space-x-4 text-sm">
                <input
                  type="text"
                  placeholder={UI_TEXT.PLACEHOLDERS.DESTINATION}
                  className="bg-transparent border-none text-white placeholder-gray-300 focus:outline-none"
                />
                <span className="text-gray-400">|</span>
                <input
                  type="text"
                  placeholder={UI_TEXT.PLACEHOLDERS.CHECK_IN}
                  className="bg-transparent border-none text-white placeholder-gray-300 focus:outline-none"
                />
                <span className="text-gray-400">|</span>
                <input
                  type="text"
                  placeholder={UI_TEXT.PLACEHOLDERS.CHECK_OUT}
                  className="bg-transparent border-none text-white placeholder-gray-300 focus:outline-none"
                />
                <span className="text-gray-400">|</span>
                <input
                  type="text"
                  placeholder={UI_TEXT.PLACEHOLDERS.GUESTS}
                  className="bg-transparent border-none text-white placeholder-gray-300 focus:outline-none"
                />
                <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/assets/hero-background.jpg"
              alt="Beautiful mountain lake landscape"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {UI_TEXT.HERO.TITLE}
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              {UI_TEXT.HERO.SUBTITLE}
            </p>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-6 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-8 overflow-x-auto scrollbar-hide">
              {PROPERTY_CATEGORIES.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex flex-col items-center space-y-2 min-w-max py-2 px-1 border-b-2 transition-colors duration-200 ${
                    activeCategory === category.name
                      ? 'border-teal-400 text-teal-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span className="text-2xl">{category.icon}</span>
                  <span className="text-xs font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Filters and Sort Section */}
        <section className="py-4 border-b bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Filter Tabs */}
              <div className="flex items-center space-x-3 overflow-x-auto">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors duration-200 ${
                      activeFilter === filter
                        ? 'bg-teal-100 text-teal-700 border border-teal-300'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Filter and Sort Controls */}
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                  </svg>
                  <span>{UI_TEXT.FILTERS.ALL_FILTERS}</span>
                </button>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>Sort by:</span>
                  <select className="border-none bg-transparent font-medium text-gray-900 focus:outline-none">
                    <option>Highest Price</option>
                    <option>Lowest Price</option>
                    <option>Rating</option>
                    <option>Newest</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Responsive Grid: 1-col mobile, 2-col tablet, 4-col desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sampleProperties.map((property) => (
                <Card
                  key={property.id}
                  id={property.id}
                  title={property.title}
                  location={property.location}
                  image={property.image}
                  price={property.price}
                  originalPrice={property.originalPrice}
                  discountPercentage={property.discountPercentage}
                  rating={property.rating}
                  reviewCount={property.reviewCount}
                  propertyTypes={property.propertyTypes}
                  bedrooms={property.bedrooms}
                  bathrooms={property.bathrooms}
                  area={property.area}
                  isFavorited={favorites.has(property.id)}
                  onFavoriteToggle={handleFavoriteToggle}
                  onClick={() => handlePropertyClick(property.id)}
                />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button
                variant="primary"
                size="lg"
                onClick={() => alert('Load more functionality coming soon!')}
              >
                {UI_TEXT.BUTTONS.LOAD_MORE}
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand Info */}
              <div>
                <h4 className="text-lg font-semibold mb-4 lowercase">{UI_TEXT.APP_NAME}</h4>
                <p className="text-gray-400 text-sm">
                  Find your perfect place to stay with over 3 million properties worldwide.
                </p>
              </div>
              
              {/* Explore Column */}
              <div>
                <h5 className="font-semibold mb-4 text-white">{UI_TEXT.FOOTER.EXPLORE}</h5>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">{UI_TEXT.FOOTER.LINKS.NEW_ARRIVALS}</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">{UI_TEXT.FOOTER.LINKS.TOP_RATED}</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">{UI_TEXT.FOOTER.LINKS.BLOG}</a></li>
                </ul>
              </div>
              
              {/* Company Column */}
              <div>
                <h5 className="font-semibold mb-4 text-white">{UI_TEXT.FOOTER.COMPANY}</h5>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">{UI_TEXT.FOOTER.LINKS.ABOUT_US}</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">{UI_TEXT.FOOTER.LINKS.CAREERS}</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">{UI_TEXT.FOOTER.LINKS.PRESS}</a></li>
                </ul>
              </div>
              
              {/* Help Column */}
              <div>
                <h5 className="font-semibold mb-4 text-white">{UI_TEXT.FOOTER.HELP}</h5>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">{UI_TEXT.FOOTER.LINKS.FAQ}</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">{UI_TEXT.FOOTER.LINKS.CONTACT_US}</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">{UI_TEXT.FOOTER.LINKS.PRIVACY_POLICY}</a></li>
                </ul>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="border-t border-gray-800 mt-8 pt-8 text-left">
              <p className="text-gray-400 text-sm">
                &copy; 2025 {UI_TEXT.APP_NAME}, Inc. Built with ❤️ for ALX Software Engineering Program.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default HomePage;
