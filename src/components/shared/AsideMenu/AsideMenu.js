import React, { useContext, useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { AsideMenuProvider, AsideMenuContext } from './AsideMenuContext'
import { Aside, AsideNav, AsideList, AsideListItem, AsideLogo, AsideListItemIcon } from './AsideMenuStyles'

import { ROUTES } from '../../../config/routes'

import logo from '../../../assets/images/logo.png'
import SearchIcon from '../../../assets/icons/SearchIcon'
import LogoutIcon from '../../../assets/icons/LogoutIcon'
import FolderIcon from '../../../assets/icons/FolderIcon'

const AsideMenu = () => {

    return (
        <AsideMenuProvider>
            <Aside>
                <AsideNav>
                    <AsideList>
                        <AsideItem>
                            <AsideLogo alt="logo da Semantix" src={logo}/>
                        </AsideItem>
                        <AsideItem href={ROUTES.main} icon={FolderIcon}>
                            Page 1
                        </AsideItem>
                        <AsideItem href={ROUTES.sub} icon={SearchIcon}>
                            Page 2
                        </AsideItem>
                        <AsideItem icon={LogoutIcon}>
                            Logout
                        </AsideItem>
                    </AsideList>
                </AsideNav>
            </Aside>
        </AsideMenuProvider>
    )
}

const AsideItem = ({ href, icon: Icon, children }) => {
    const { currentPage, setCurrentPage } = useContext(AsideMenuContext)
    const history = useHistory()
    const isActive = href === currentPage

    const onClick = useCallback(() => {
        if (href) {
            setCurrentPage(href)
            history.push(href)
        }
    }, [setCurrentPage, href, history])

    return (
        <AsideListItem active={isActive} onClick={onClick}>
            { Icon &&
                <AsideListItemIcon>
                    <Icon width='24px' height='24px' fill={isActive ? '#FFF' : undefined} />
                </AsideListItemIcon>
            }
            <span>{ children }</span>
        </AsideListItem>
    )
}

export default AsideMenu