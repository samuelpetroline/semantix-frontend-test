import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useOnLocationChange = (onChange) => {
    const location = useLocation()

    useEffect(onChange, [location.pathname])
}

export { useOnLocationChange }