export function useI18n(lang, pageOne, pageTwo) {
  const i18n = Object.assign(pageOne, pageTwo);

  return i18n[lang] || i18n.en;
}
