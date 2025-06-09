"use client"
import {createContext, useState} from 'react'


export const ThemeContext=createContext<{light:boolean, scrolled:boolean,updateMode:()=>void, handleScroll:(val:boolean)=>void}| undefined>(undefined);

export const ThemeProvider:React.FC<{children:React.ReactNode}>=({children})=>{
    const [light,setLight]=useState<boolean>(true);
     const [scrolled, setScrolled] = useState(false);
const updateMode=()=>{
    setLight(!light)
}
const handleScroll=(val:boolean)=>{
    setScrolled(val);
}
    return (
        <>
        <ThemeContext.Provider  value={{light,scrolled,updateMode,handleScroll}}>
            {children}
        </ThemeContext.Provider>
        </>
    )
}