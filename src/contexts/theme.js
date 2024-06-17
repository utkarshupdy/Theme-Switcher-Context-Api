import { useContext , createContext } from "react"



export const ThemeContext = createContext({
  themeMode : "light",
  darktheme : ()=>{},
  lightheme : ()=>{},


})
export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){   // basically this hook is writtem so that in every file , we dont have to import usecontext and user context both , instead of this , we just have to importusetheme fxn wghich automatically import usecontext and themecontext both 
  return useContext(ThemeContext)
}