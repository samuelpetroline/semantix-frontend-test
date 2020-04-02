import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const AsideMenuContext = React.createContext()

const AsideMenuProvider = ({ children }) => {
    const location = useLocation()
    const [currentPage, setCurrentPage] = useState(location.pathname)

    return (
        <AsideMenuContext.Provider value={{
            currentPage,
            setCurrentPage
        }}>
            { children }
        </AsideMenuContext.Provider>
    )
}

export { AsideMenuContext, AsideMenuProvider }