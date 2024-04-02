'use client'

import { PropsWithChildren, useEffect, useState, createContext, useMemo } from "react"

export const TestProvider = createContext({});

export const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  const [test, setTest] = useState(0)

  useEffect(() => {
    setTest(1)
  }, [])

  return <TestProvider.Provider value={{}}>{children}</TestProvider.Provider>
}