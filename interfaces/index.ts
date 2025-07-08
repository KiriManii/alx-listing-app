/*
 * FILE PATH: alx-listing-app/interfaces/index.ts
 * TypeScript interfaces for the ALX Listing App project
 * Following 2025 best practices for type safety and reusability
 */

// Card component props interface (Updated with heart icon and reviews)
export interface CardProps {
  id?: string | number;
  title?: string;
  location?: string;
  image?: string;
  price?: number;
  originalPrice?: number;
  discountPercentage?: number;
  rating?: number;
  reviewCount?: number;
  propertyTypes?: string[];
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  isFavorited?: boolean;
  onFavoriteToggle?: (id: string | number) => void;
  className?: string;
  onClick?: () => void;
}

// Button component props interface
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

// Property listing interface (Updated with review count)
export interface PropertyListing {
  id: string | number;
  title: string;
  location: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  currency: string;
  images: string[];
  rating: number;
  reviewCount: number;
  propertyTypes: string[];
  amenities: {
    bedrooms: number;
    bathrooms: number;
    area: number;
  };
  host: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  availability: {
    startDate: string;
    endDate: string;
  };
  isFavorited?: boolean;
}

// Navigation component interface
export interface NavigationProps {
  activeItem?: string;
  onItemClick?: (item: string) => void;
}

// Currency selector interface
export interface CurrencySelector {
  currency: string;
  onCurrencyChange?: (currency: string) => void;
}

// Language selector interface  
export interface LanguageSelector {
  language: string;
  onLanguageChange?: (language: string) => void;
}

// Search form interface
export interface SearchFormProps {
  location?: string;
  checkIn?: string;
  checkOut?: string;
  people?: number;
  onSearch?: (data: SearchFormData) => void;
}

export interface SearchFormData {
  location: string;
  checkIn: string;
  checkOut: string;
  people: number;
}

// Category interface
export interface CategoryProps {
  name: string;
  icon: string;
  active?: boolean;
  onClick?: () => void;
}

// Filter interface
export interface FilterProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

// API Response interfaces
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  statusCode: number;
}

// Common component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}
