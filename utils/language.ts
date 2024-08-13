export interface Language {
  code: string
  name: string
  flag: string
}

export const languages: Language[] = [
  { code: 'en', name: 'EN - English', flag: '/en.svg' },
  { code: 'es', name: 'ES - Español', flag: '/es.svg' },
  { code: 'fr', name: 'FR - French', flag: '/fr.svg' },
]