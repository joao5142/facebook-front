import { USER_COLLECTION, USER_PERFIL_THEME_COLLECTION, USER_THEME_COLLECTION } from '@/storage'
import { PosibleThemesTypes, PerfilThemeTypes } from '~/theme'

const collectionStoredName = `${USER_COLLECTION}`

export async function createNewUser(user: any) {
  try {
    await localStorage.setItem(collectionStoredName, user)
  } catch (error) {
    throw error
  }
}

export function getStoredUser() {
  try {
    const user = localStorage.getItem(collectionStoredName) || []

    return user
  } catch (error) {
    throw error
  }
}

export function getUserTheme(): PosibleThemesTypes {
  const theme = JSON.parse(localStorage.getItem(USER_THEME_COLLECTION) || '')

  if (!theme) {
    return 'light'
  }
  return theme
}

export function setUserTheme(value: PosibleThemesTypes) {
  const theme = localStorage.setItem(USER_THEME_COLLECTION, JSON.stringify(value))

  return theme
}

export function getUserPerfilTheme(): PerfilThemeTypes | '' {
  const theme = JSON.parse(localStorage.getItem(USER_PERFIL_THEME_COLLECTION) || '')

  if (!theme) {
    return ''
  }

  return theme
}

export function setUserPerfilTheme(value: PerfilThemeTypes) {
  const theme = localStorage.setItem(USER_PERFIL_THEME_COLLECTION, JSON.stringify(value))

  return theme
}
