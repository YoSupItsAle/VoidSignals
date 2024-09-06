"use client"

import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'
function ThemeSelector() {
    const { setTheme, theme } = useTheme()
    const [rendered, setRendered] = useState(false);
    
    useEffect(() => {
        setRendered(true)
    },[])

    const changeTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }    

    if(!rendered) return null;
    
    return (
        <div className='flex items-center justify-center bg-primary text-primary-foreground h-9 w-9 rounded-md'>
            {theme==="dark" ? <Sun onClick={changeTheme}/> : <Moon onClick={changeTheme}/>} 
        </div>
    )
}

export default ThemeSelector
