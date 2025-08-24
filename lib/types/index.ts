// Global type definitions for the application

// Component Props Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface PageProps {
  params: Record<string, string>;
  searchParams: Record<string, string | string[] | undefined>;
}

// API Types
export interface ApiError {
  code: string;
  message: string;
  statusCode: number;
  details?: unknown;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Database Models Types
export interface Timestamps {
  createdAt: Date;
  updatedAt: Date;
}

export interface Model extends Timestamps {
  id: string;
}

// Business Logic Types
export interface Product extends Model {
  name: string;
  description: string;
  price: number;
  currency: string;
  stripePriceId?: string;
  features: string[];
  isActive: boolean;
}

export interface Customer extends Model {
  email: string;
  name: string;
  stripeCustomerId?: string;
  purchases: Purchase[];
}

export interface Purchase extends Model {
  customerId: string;
  productId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  stripePaymentIntentId?: string;
}

// UI Component Types
export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps extends BaseComponentProps {
  title?: string;
  description?: string;
  footer?: React.ReactNode;
}

export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

// Form Types
export interface FormField<T = any> {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'select' | 'textarea' | 'checkbox';
  placeholder?: string;
  required?: boolean;
  value?: T;
  options?: Array<{ label: string; value: string }>;
  validation?: {
    min?: number;
    max?: number;
    pattern?: RegExp;
    message?: string;
  };
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ComponentType;
  children?: NavItem[];
  external?: boolean;
}

// SEO Types
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  canonicalUrl?: string;
}

// Analytics Types
export interface TrackingEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

// Utility Types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type ValueOf<T> = T[keyof T];
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// React Hook Types
export interface UseAsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export interface UseFormState<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
  isValid: boolean;
}

// Constants
export const SUPPORTED_CURRENCIES = ['USD', 'CAD', 'EUR'] as const;
export type SupportedCurrency = typeof SUPPORTED_CURRENCIES[number];

export const USER_ROLES = ['admin', 'user', 'guest'] as const;
export type UserRole = typeof USER_ROLES[number];

export const PAYMENT_STATUS = ['pending', 'processing', 'completed', 'failed', 'refunded'] as const;
export type PaymentStatus = typeof PAYMENT_STATUS[number];