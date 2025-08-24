import { z } from 'zod';

// User schemas
export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().min(1).max(100),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const CreateUserSchema = UserSchema.omit({ 
  id: true, 
  createdAt: true, 
  updatedAt: true 
});

export type User = z.infer<typeof UserSchema>;
export type CreateUser = z.infer<typeof CreateUserSchema>;

// Course schemas
export const CourseSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1).max(200),
  description: z.string().min(10).max(1000),
  price: z.number().positive(),
  currency: z.enum(['USD', 'CAD', 'EUR']),
  features: z.array(z.string()),
  isPopular: z.boolean().default(false),
  stripePriceId: z.string().optional(),
});

export const PricingPlanSchema = z.object({
  name: z.string(),
  price: z.number().positive(),
  currency: z.enum(['USD', 'CAD', 'EUR']),
  features: z.array(z.string()),
  isPopular: z.boolean().default(false),
  stripeBuyButtonId: z.string().optional(),
});

export type Course = z.infer<typeof CourseSchema>;
export type PricingPlan = z.infer<typeof PricingPlanSchema>;

// Testimonial schemas
export const TestimonialSchema = z.object({
  id: z.string().uuid(),
  author: z.string().min(1).max(100),
  role: z.string().min(1).max(100),
  content: z.string().min(10).max(500),
  rating: z.number().min(1).max(5),
  image: z.string().url().optional(),
  createdAt: z.date(),
});

export type Testimonial = z.infer<typeof TestimonialSchema>;

// FAQ schemas
export const FAQSchema = z.object({
  id: z.string().uuid(),
  question: z.string().min(5).max(200),
  answer: z.string().min(10).max(1000),
  order: z.number().int().positive(),
});

export type FAQ = z.infer<typeof FAQSchema>;

// Contact form schemas
export const ContactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
  honeypot: z.string().max(0, 'Bot detected'), // Anti-spam field
});

export type ContactForm = z.infer<typeof ContactFormSchema>;

// Newsletter schemas
export const NewsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export type Newsletter = z.infer<typeof NewsletterSchema>;

// Analytics event schemas
export const AnalyticsEventSchema = z.object({
  event: z.enum(['page_view', 'button_click', 'form_submit', 'purchase']),
  properties: z.record(z.any()).optional(),
  timestamp: z.date(),
  userId: z.string().optional(),
  sessionId: z.string(),
});

export type AnalyticsEvent = z.infer<typeof AnalyticsEventSchema>;

// API Response schemas
export const ApiResponseSchema = z.object({
  success: z.boolean(),
  data: z.any().optional(),
  error: z.object({
    code: z.string(),
    message: z.string(),
    details: z.any().optional(),
  }).optional(),
  meta: z.object({
    timestamp: z.date(),
    version: z.string(),
  }).optional(),
});

export type ApiResponse = z.infer<typeof ApiResponseSchema>;

// Environment variables schema
export const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  NEXT_PUBLIC_API_URL: z.string().url().optional(),
  DATABASE_URL: z.string().optional(),
  STRIPE_SECRET_KEY: z.string().optional(),
  STRIPE_PUBLISHABLE_KEY: z.string().optional(),
});

export type Env = z.infer<typeof EnvSchema>;