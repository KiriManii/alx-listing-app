/*
 * FILE PATH: alx-listing-app/constants/index.ts
 * Application constants for the ALX Listing App
 * Centralized configuration and reusable data
 */

// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
} as const;

// UI Text Constants
export const UI_TEXT = {
  APP_NAME: 'alx',
  APP_DESCRIPTION: 'Find your favorite place here!',
  HERO: {
    TITLE: 'Find your favorite place here!',
    SUBTITLE: 'The best prices for over 2 million properties worldwide',
  },
  BUTTONS: {
    BOOK_NOW: 'Book Now',
    VIEW_DETAILS: 'View Details',
    LOAD_MORE: 'Show more',
    SEARCH: 'Search',
    FILTER: 'Filter',
    SIGN_IN: 'Sign in',
    SIGN_UP: 'Sign up',
    LIST_YOUR_PLACE: 'List Your Place',
  },
  PLACEHOLDERS: {
    DESTINATION: 'Destination',
    CHECK_IN: 'Check-in',
    CHECK_OUT: 'Check-out',
    GUESTS: 'Guests',
  },
  CURRENCY: {
    USD: 'USD',
    EUR: 'EUR',
    GBP: 'GBP',
  },
  FOOTER: {
    EXPLORE: 'Explore',
    COMPANY: 'Company', 
    HELP: 'Help',
    LINKS: {
      NEW_ARRIVALS: 'New Arrivals',
      TOP_RATED: 'Top Rated',
      BLOG: 'Blog',
      ABOUT_US: 'About Us',
      CAREERS: 'Careers',
      PRESS: 'Press',
      FAQ: 'FAQ',
      CONTACT_US: 'Contact Us',
      PRIVACY_POLICY: 'Privacy Policy',
    },
  },
  NAVIGATION: {
    STAY: 'Stay',
    VILLAS: 'Villas', 
    HOTELS: 'Hotels',
    RENTALS: 'Rentals',
    EXPLORE: 'Explore',
  },
  FILTERS: {
    TOP_PICKS: 'Top picks',
    NEW_ARRIVALS: 'New arrivals',
    SAY_VILLAS: 'Say Villas',
    FREE_CANCELLATION: 'Free cancellation',
    BOOK_NOW_PAY_LATER: 'Book now pay later',
    SELF_CHECKIN: 'Self check-in',
    INSTANT_BOOK: 'Instant book',
    ALL_FILTERS: 'All filters',
  },
  ERRORS: {
    GENERIC: 'Something went wrong. Please try again.',
    NETWORK: 'Network error. Please check your connection.',
    NOT_FOUND: 'The requested resource was not found.',
  },
} as const;

// Design System Colors (Based on Figma)
export const COLORS = {
  PRIMARY: '#4ECDC4', // Teal from design
  SECONDARY: '#FF6B35', // Orange accent
  SUCCESS: '#27AE60', // Green for badges
  BACKGROUND: '#FFFFFF',
  GRAY: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
} as const;

// Tailwind CSS Classes (Updated for new design)
export const TAILWIND_CLASSES = {
  BUTTONS: {
    PRIMARY: 'bg-teal-400 hover:bg-teal-500 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200',
    SECONDARY: 'bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200',
    OUTLINE: 'border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2 px-4 rounded-lg transition-all duration-200',
    FILTER: 'px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-200',
    FILTER_ACTIVE: 'px-4 py-2 text-sm font-medium text-teal-700 bg-teal-50 border border-teal-300 rounded-full',
  },
  CARDS: {
    PROPERTY: 'bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group',
  },
  BADGES: {
    DISCOUNT: 'absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-md',
    PROPERTY_TYPE: 'bg-white bg-opacity-90 text-gray-700 text-xs font-medium px-2 py-1 rounded-md',
  },
  LAYOUTS: {
    CONTAINER: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    GRID: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6',
  },
} as const;

// Breakpoints (matching Tailwind CSS)
export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px',
} as const;

// App Routes
export const ROUTES = {
  HOME: '/',
  LISTINGS: '/listings',
  PROPERTY_DETAILS: '/property',
  PROFILE: '/profile',
  BOOKINGS: '/bookings',
  HOST: '/host',
} as const;

// Property Categories (From Figma)
export const PROPERTY_CATEGORIES = [
  { name: 'Houses', icon: '🏠' },
  { name: 'Apartments', icon: '🏢' },
  { name: 'Countryside', icon: '🌾' },
  { name: 'Amazing views', icon: '🏔️' },
  { name: 'Tiny homes', icon: '🏘️' },
  { name: 'Amazing pools', icon: '🏊‍♂️' },
  { name: 'Beach front', icon: '🏖️' },
  { name: 'Rooms', icon: '🛏️' },
  { name: 'Off-the-grid', icon: '⚡' },
  { name: 'Castles', icon: '🏰' },
  { name: 'Farms', icon: '🚜' },
  { name: 'New', icon: '✨' },
] as const;

// Property Types (From Cards)
export const PROPERTY_TYPES = [
  'Top Villa',
  'Self Checkin',
  'Free Reschedule',
] as const;

// Amenities List
export const AMENITIES = [
  'WiFi',
  'Kitchen',
  'Washing machine',
  'Free parking',
  'Air conditioning',
  'Pool',
  'Hot tub',
  'Pet friendly',
  'Workspace',
  'TV',
  'Gym',
  'Breakfast',
] as const;

// Currency Options
export const CURRENCIES = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  JPY: '¥',
} as const;

// Default Values
export const DEFAULTS = {
  CURRENCY: 'USD',
  LANGUAGE: 'en',
  ITEMS_PER_PAGE: 12,
  MAX_GUESTS: 16,
  MIN_PRICE: 0,
  MAX_PRICE: 10000,
} as const;
