export const AUTH_COOKIE_NAME = "adminToken";

export const DOMAIN_CONFIG = {
  web: process.env.NEXT_PUBLIC_WEB_URL ?? "https://turkmuhendisi.com",
  panel: process.env.NEXT_PUBLIC_PANEL_URL ?? "https://panel.turkmuhendisi.com",
  api: process.env.NEXT_PUBLIC_API_URL ?? "https://api.turkmuhendisi.com",
  cdn: process.env.NEXT_PUBLIC_CDN_URL ?? "https://cdn.turkmuhendisi.com",
} as const;

export const API_ENDPOINTS = {
  adminLogin: "/v1/admin/auth/login",
  contentList: "/v1/content",
  contentCreate: "/v1/content",
} as const;

export const toWebUrl = (path: string) =>
  `${DOMAIN_CONFIG.web}${path.startsWith("/") ? path : `/${path}`}`;

export const toApiUrl = (path: string) =>
  `${DOMAIN_CONFIG.api}${path.startsWith("/") ? path : `/${path}`}`;

export const toCdnUrl = (path: string) =>
  `${DOMAIN_CONFIG.cdn}${path.startsWith("/") ? path : `/${path}`}`;
