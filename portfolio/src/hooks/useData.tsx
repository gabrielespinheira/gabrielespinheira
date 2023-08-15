import { createContext, useContext } from 'react'

import useTheme, { ThemeType } from './useTheme'

interface IDataContextType {
  theme: ThemeType | null
}

export const DataContext = createContext({} as IDataContextType)

export function DataContextProvider({ children }: any) {
  const [theme] = useTheme()

  return <DataContext.Provider value={{ theme }}>{children}</DataContext.Provider>
}

export const useData = () => {
  return useContext(DataContext)
}
