import React from 'react'
import styled from 'styled-components'

import PageTitle from '../../components/shared/PageTitle/PageTitle'

import GraphAnualResult from '../../components/composed/GraphAnualResult/GraphAnualResult'
import GraphAnualPercentage from '../../components/composed/GraphAnualPercentage/GraphAnualPercentage'
import GraphTimeData from '../../components/composed/GraphTimeData/GraphTimeData'

const GraphContainer = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const MainPage = () => {
    return (
        <section>
            <PageTitle
                title='Página de teste 1'
                subtitle='Description'
            />
            <MainPageGraphs />
        </section>
    )
}

const MainPageGraphs = () => {
    return (
        <GraphContainer>
            <GraphAnualResult />
            <GraphAnualPercentage />
            <GraphTimeData />
        </GraphContainer>
    )
}

export default MainPage
