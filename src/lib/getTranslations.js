// Server-side only - used in getStaticProps
// DO NOT import this in client components

import en from '../../locales/en.json';
import fr from '../../locales/fr.json';
import de from '../../locales/de.json';

const translations = { en, fr, de };

export function getTranslations(locale = 'en') {
  return translations[locale] || translations.en;
}
