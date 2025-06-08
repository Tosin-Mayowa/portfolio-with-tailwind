"use client"
import {Children, createContext, useState} from 'react'


export const ThemeContext=createContext<{light:boolean, updateMode:()=>void}| undefined>(undefined);

export const ThemeProvider:React.FC<{children:React.ReactNode}>=({children})=>{
    const [light,setLight]=useState<boolean>(true)
const updateMode=()=>{
    setLight(!light)
}
    return (
        <>
        <ThemeContext.Provider  value={{light,updateMode}}>
            {children}
        </ThemeContext.Provider>
        </>
    )
}