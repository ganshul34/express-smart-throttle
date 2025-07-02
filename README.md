# 🚦 express-smart-throttle

> Smart, flexible, and role-based rate-limiting middleware for Express.js


![npm](https://img.shields.io/npm/v/express-smart-throttle)
![license](https://img.shields.io/github/license/ganshul34/express-smart-throttle)
![build](https://img.shields.io/github/actions/workflow/status/ganshul34/express-smart-throttle/ci.yml)

---

## 🔥 Why express-smart-throttle?

A smarter alternative to basic rate-limiters — supports:

- ✅ Role-based throttling (`admin`, `user`, `guest`)
- ✅ Per-route + method limits
- ✅ Soft throttling (delay instead of block)
- ✅ Custom key generation (IP, user ID, API key)
- ✅ Pluggable stores (in-memory or Redis)
- ✅ Developer-friendly defaults

## 🚀 Installation

```bash
npm install express-smart-throttle