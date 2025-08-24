import { NextRequest, NextResponse } from 'next/server';
import { z, ZodError, ZodSchema } from 'zod';
import { ApiResponse } from '@/lib/types';

/**
 * Validation middleware for API routes
 * Similar to Pydantic's validation decorators in Python
 */
export function validateRequest<T>(schema: ZodSchema<T>) {
  return (handler: (req: NextRequest, data: T) => Promise<NextResponse>) => {
    return async (req: NextRequest): Promise<NextResponse> => {
      try {
        const body = await req.json();
        const validatedData = schema.parse(body);
        return handler(req, validatedData);
      } catch (error) {
        if (error instanceof ZodError) {
          const response: ApiResponse = {
            success: false,
            error: {
              code: 'VALIDATION_ERROR',
              message: 'Request validation failed',
              details: error.errors.map((err) => ({
                field: err.path.join('.'),
                message: err.message,
              })),
            },
          };
          return NextResponse.json(response, { status: 400 });
        }
        
        const response: ApiResponse = {
          success: false,
          error: {
            code: 'INTERNAL_ERROR',
            message: 'An unexpected error occurred',
          },
        };
        return NextResponse.json(response, { status: 500 });
      }
    };
  };
}

/**
 * Validates query parameters
 */
export function validateQuery<T>(schema: ZodSchema<T>) {
  return (handler: (req: NextRequest, params: T) => Promise<NextResponse>) => {
    return async (req: NextRequest): Promise<NextResponse> => {
      try {
        const { searchParams } = new URL(req.url);
        const params = Object.fromEntries(searchParams.entries());
        const validatedParams = schema.parse(params);
        return handler(req, validatedParams);
      } catch (error) {
        if (error instanceof ZodError) {
          const response: ApiResponse = {
            success: false,
            error: {
              code: 'VALIDATION_ERROR',
              message: 'Query parameter validation failed',
              details: error.errors.map((err) => ({
                field: err.path.join('.'),
                message: err.message,
              })),
            },
          };
          return NextResponse.json(response, { status: 400 });
        }
        
        const response: ApiResponse = {
          success: false,
          error: {
            code: 'INTERNAL_ERROR',
            message: 'An unexpected error occurred',
          },
        };
        return NextResponse.json(response, { status: 500 });
      }
    };
  };
}

/**
 * Validates and sanitizes form data
 */
export async function validateFormData<T>(
  formData: FormData,
  schema: ZodSchema<T>
): Promise<{ success: true; data: T } | { success: false; errors: Record<string, string> }> {
  try {
    const data = Object.fromEntries(formData.entries());
    const validatedData = schema.parse(data);
    return { success: true, data: validatedData };
  } catch (error) {
    if (error instanceof ZodError) {
      const errors: Record<string, string> = {};
      error.errors.forEach((err) => {
        const field = err.path.join('.');
        errors[field] = err.message;
      });
      return { success: false, errors };
    }
    return { success: false, errors: { _error: 'Validation failed' } };
  }
}

/**
 * Safe parser with type inference
 */
export function safeParse<T>(schema: ZodSchema<T>, data: unknown): T | null {
  const result = schema.safeParse(data);
  return result.success ? result.data : null;
}

/**
 * Validates environment variables at startup
 */
export function validateEnv<T>(schema: ZodSchema<T>): T {
  try {
    return schema.parse(process.env);
  } catch (error) {
    if (error instanceof ZodError) {
      console.error('❌ Invalid environment variables:');
      error.errors.forEach((err) => {
        console.error(`  - ${err.path.join('.')}: ${err.message}`);
      });
      process.exit(1);
    }
    throw error;
  }
}

/**
 * Custom validation rules
 */
export const customValidators = {
  // Phone number validation
  phoneNumber: z.string().regex(
    /^\+?[1-9]\d{1,14}$/,
    'Invalid phone number format'
  ),
  
  // Strong password validation
  strongPassword: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
  
  // URL slug validation
  slug: z.string().regex(
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    'Invalid slug format'
  ),
  
  // UUID validation
  uuid: z.string().uuid('Invalid UUID format'),
  
  // Date string validation
  dateString: z.string().regex(
    /^\d{4}-\d{2}-\d{2}$/,
    'Date must be in YYYY-MM-DD format'
  ),
  
  // Hex color validation
  hexColor: z.string().regex(
    /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
    'Invalid hex color format'
  ),
};