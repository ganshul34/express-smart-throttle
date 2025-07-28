import { Request } from 'express';

export interface RateLimitConfig {
  [role: string]: {
    limit: number;
    windowMs: number;
  };
}

export interface RateLimitResult {
  allowed: boolean;
}

export type RequestWithUser = Request & {
  user?: {
    role?: string;
    id?: string;
  };
};

export interface RateLimitEntry {
  count: number;
  timestamp: number;
}

