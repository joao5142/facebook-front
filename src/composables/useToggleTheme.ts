import { useTheme } from 'vuetify'
import { getUserTheme, setUserTheme } from '../storage/modules/user'
import { ThemeTypes, PosibleThemesTypes } from '@/theme'

export function useToggleTheme() {
  const theme = useTheme()

  const myThemes: ThemeTypes = ['light', 'dark']

  const selectedTheme = ref<PosibleThemesTypes>(myThemes[0])

  function setTheme(userChoice: PosibleThemesTypes) {
    theme.global.name.value = userChoice
    selectedTheme.value = userChoice

    setUserTheme(userChoice)
  }

  function initTheme() {
    const theme = getUserTheme()
    selectedTheme.value = theme

    setTheme(theme)
  }

  return { initTheme, selectedTheme: readonly(selectedTheme), setTheme }
}
