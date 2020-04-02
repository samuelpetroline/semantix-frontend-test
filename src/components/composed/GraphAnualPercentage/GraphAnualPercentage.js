/* eslint-disable no-undef */
import React from 'react'
import PropTypes from 'prop-types'

import Card from '../../shared/Card/Card'
import Graph from '../../shared/Graph/Graph'
import FetchableData from '../../behaviours/FetchableData/FetchableData'

import { fetchAnualPercentage } from '../../../repositories/ChartRepository/ChartRepository'

const GraphAnualPercentage = ({ width, height }) => {
    return (
            <FetchableData
                query={fetchAnualPercentage}
            >
                <Card title='Pie Chart'>
                    <FetchableData.Loading><h1>Carregando...</h1></FetchableData.Loading>
                    <FetchableData.Error><h1>Deu ruim...</h1></FetchableData.Error>
                    <FetchableData.Empty><h1>Vazio...</h1></FetchableData.Empty>
                    <FetchableData.Success>
                        {
                            ({ data }) => (
                                <Graph.Pie
                                    id='anualPercentageGraph'
                                    width={width}
                                    height={height}
                                    data={data}
                                />
                            )
                        }
                    </FetchableData.Success>
                </Card>
            </FetchableData>
    )
}

GraphAnualPercentage.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
}


GraphAnualPercentage.defaultProps = {
    width: '500px',
    height: '200px'
}


export default GraphAnualPercentage
