export const TELEGRAM_URL = "https://t.me/HunMaster";

export const NAV_LINKS = [
  { to: "/", label: "Главная" },
  { to: "/about", label: "О проекте" },
  { to: "/features", label: "Возможности" },
  { to: "/courses", label: "Курсы" },
  { to: "/contacts", label: "Контакты" },
] as const;

export const WORDS = [
  { hu: "Szia", ru: "Привет", hint: "си-я" },
  { hu: "Köszönöm", ru: "Спасибо", hint: "кё-сё-нём" },
  { hu: "Jó reggelt", ru: "Доброе утро", hint: "йо рег-гельт" },
  { hu: "Viszlát", ru: "До встречи", hint: "вис-лат" },
] as const;
