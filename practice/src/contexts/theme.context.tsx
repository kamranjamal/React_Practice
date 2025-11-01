import React, { createContext } from "react";
export interface ThemeContextInterface {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const themeContextApi = createContext<ThemeContextInterface | null>(null);

export function AppTheme({ children }: { children: React.ReactNode }) {
    const [theme,setTheme]=React.useState<string>("dark")
    
    return (
        <themeContextApi.Provider value={{theme,setTheme}}>
            {children}
        </themeContextApi.Provider>
    )
}