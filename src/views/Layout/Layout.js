import React from 'react'
import styled from 'styled-components'

import AsideMenu from '../../components/shared/AsideMenu/AsideMenu'

const Grid = styled.section`
    display: flex;
`

const Main = styled.main`
    width: 100%;
    margin-left: 20px;
    margin-right: 20px;
`

const Layout = ({ children }) => {
    return (
        <Grid>
            <AsideMenu />
            <Main>
                { children }
            </Main>
        </Grid>
    )
}

export default Layout