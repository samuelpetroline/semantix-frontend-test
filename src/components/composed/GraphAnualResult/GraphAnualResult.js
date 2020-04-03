/* eslint-disable no-undef */
import React from 'react'
import PropTypes from 'prop-types'

import Card from '../../shared/Card/Card'
import Graph from '../../shared/Graph/Graph'
import FetchableData from '../../behaviours/FetchableData/FetchableData'

import { fetchAnualResult } from '../../../repositories/ChartRepository/ChartRepository'

const GraphAnualResult = ({ width, height }) => {
    return (
        <FetchableData
            query={fetchAnualResult}
        >
            <Card title='Bar Chart'>
                <FetchableData.Loading><h1>Carregando...</h1></FetchableData.Loading>
                <FetchableData.Error><h1>Deu ruim...</h1></FetchableData.Error>
                <FetchableData.Empty><h1>Vazio...</h1></FetchableData.Empty>
                <FetchableData.Success>
                    {
                        ({ data }) => (
                            <Graph.Bar
                                id='anualResultGraph'
                                width={width}
                                height={height}
                                data={data}
                                colors={['rgb(17,138,202)']}
                            />
                        )
                    }
                </FetchableData.Success>
            </Card>
        </FetchableData>
    )
}

GraphAnualResult.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
}


GraphAnualResult.defaultProps = {
    width: '400px',
    height: '200px'
}


export default GraphAnualResult
