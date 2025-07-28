import { Request } from "express";
import { RateLimitConfig, RateLimitResult, RequestWithUser } from "./types";
import memoryStore from "./memoryStore";

function getUserRole(req: RequestWithUser): string {
  return req.user?.role || "anonymous";
}

function getRequestKey(req: RequestWithUser): string {
  return req.user?.id ? `user:${req.user.id}` : `ip:${req.ip}`;
}

export default async function createLimiter(
  req: RequestWithUser,
  config: RateLimitConfig
): Promise<RateLimitResult> {
  const role = getUserRole(req);
  const key = getRequestKey(req);
  const rule = config[role];

  if (!rule) {
    return { allowed: true }; // No rate-limit rule for this role
  }

  const { limit, windowMs } = rule;
  const now = Date.now();
  const record = memoryStore.get(key);

  if (!record || now - record.timestamp > windowMs) {
    memoryStore.set(key, { count: 1, timestamp: now });
    return { allowed: true };
  }

  if (record.count < limit) {
    memoryStore.set(key, { count: record.count + 1, timestamp: record.timestamp });
    return { allowed: true };
  }

  return { allowed: false };
}
