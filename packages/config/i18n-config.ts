export const i18n = {
  defaultLocale: "uz",
  locales: ["uz", "ru", "en"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
