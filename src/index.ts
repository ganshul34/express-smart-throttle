import { Request, Response, NextFunction } from 'express';
import { RateLimitConfig, RateLimitResult } from 
"./types";
import createLimiter from "./limiter";

export function smartThrottle(config: RateLimitConfig) {
  return async function (req: Request, res: Response, next: NextFunction) {
    const result: RateLimitResult = await createLimiter(req, config);

    if (result.allowed) {
      return next();
    }
      return res.status(429).json({ message: "Too Many Requests" });
  };
}
