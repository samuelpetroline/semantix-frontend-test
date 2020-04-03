import React from 'react'
import styled from 'styled-components'

import PageTitle from '../../components/shared/PageTitle/PageTitle'

import GraphAnualResult from '../../components/composed/GraphAnualResult/GraphAnualResult'
import GraphAnualPercentage from '../../components/composed/GraphAnualPercentage/GraphAnualPercentage'
import FilterableList from '../../components/composed/FilterableList/FilterableList'
import Checkbox from '../../components/shared/Checkbox/Checkbox'
import CounterBox from '../../components/shared/CounterBox/CounterBox'

const Container = styled.div`
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
`

const ContentSection = styled.div`
    margin-right: 20px;

    &:last-of-type {
        margin-right: 0;
    }

    @media screen and (max-width: 768px) {
        & + & {
            margin-right: 0;
            margin-top: 20px
        }
    }
`

const MainPage = () => {
    return (
        <section>
            <PageTitle
                title='Página de teste 1'
                subtitle='Description'
            />
            <MainPageContent />
        </section>
    )
}

const MainPageContent = () => {
    return (
        <Container>
            <ContentSection>
                <GraphAnualResult width='400px' height='255px' />
            </ContentSection>
            <ContentSection>
                <GraphAnualPercentage width='400px' height='255px' />
            </ContentSection>
            <ContentSection>
                <FilterableList headerTitle='Title Filter' onFilter={(event) => console.log(event)}>
                    <Checkbox endIcon={<CounterBox>99</CounterBox>}>Label</Checkbox>
                    <Checkbox endIcon={<CounterBox>99</CounterBox>}>Label</Checkbox>
                    <Checkbox endIcon={<CounterBox>99</CounterBox>}>Label</Checkbox>
                    <Checkbox endIcon={<CounterBox>99</CounterBox>}>Label</Checkbox>
                    <Checkbox endIcon={<CounterBox>99</CounterBox>}>Label</Checkbox>
                    <Checkbox endIcon={<CounterBox>99</CounterBox>}>Label</Checkbox>
                </FilterableList>
            </ContentSection>
        </Container>
    )
}

export default MainPage
