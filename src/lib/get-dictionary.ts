

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  pl: () => import('../dictionaries/pl.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  const loader = (dictionaries as any)[locale] || dictionaries.en
  return loader()
}
