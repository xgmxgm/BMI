'use client'

import { useEffect, useState } from "react"
import { DesktopHeader } from "../DesktopHeader"
import { MobileHeader } from "../MobileHeader"

export const Header = () => {
    const [widthScreen, setWidthScreen] = useState<number>(0)

    useEffect(() => {
        setWidthScreen(typeof window !== 'undefined' && window.innerWidth || 0)
    }, [])

    return (
        <>
        { widthScreen >= 740 ? <DesktopHeader /> : <MobileHeader /> }
        </>
    )
}