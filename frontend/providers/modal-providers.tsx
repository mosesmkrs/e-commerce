"use client"

import PreviewModal from "@/components/preview-modal"
import { useState, useEffect } from "react"


const ModalProvider = () => {

    const [isMouted, setIsMouted] = useState(false)

    useEffect(() => {
        setIsMouted(true)
    }, [])

    if (!isMouted) {
        return null
    }
    return (
        <>
        <PreviewModal />
        </>
    )
}

export default ModalProvider