import React from 'react'
import styled from 'styled-components'

import PageTitle from '../../components/shared/PageTitle/PageTitle'

import GraphTimeData from '../../components/composed/GraphTimeData/GraphTimeData'

const GraphContainer = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const SubPage = () => {
    return (
        <section>
            <PageTitle
                title='Página de teste 2'
                subtitle='Description'
            />
            <SubPageGraphs />
        </section>
    )
}

const SubPageGraphs = () => {
    return (
        <GraphContainer>
            <GraphTimeData />
        </GraphContainer>
    )
}

export default SubPage
