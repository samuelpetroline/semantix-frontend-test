/* eslint-disable no-undef */
import React from 'react'
import PropTypes from 'prop-types'

import Card from '../../shared/Card/Card'
import Graph from '../../shared/Graph/Graph'
import FetchableData from '../../behaviours/FetchableData/FetchableData'

import { fetchTimeData } from '../../../repositories/ChartRepository/ChartRepository'

const GraphTimeData = ({ width, height }) => {
    return (
        <FetchableData
            query={fetchTimeData}
        >
            <Card title='Line Chart'>
                <FetchableData.Loading><h1>Carregando...</h1></FetchableData.Loading>
                <FetchableData.Error><h1>Deu ruim...</h1></FetchableData.Error>
                <FetchableData.Empty><h1>Vazio...</h1></FetchableData.Empty>
                <FetchableData.Success>
                    {
                        ({ data }) => (
                            <Graph.Line
                                id='timeDataGraph'
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

GraphTimeData.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
}


GraphTimeData.defaultProps = {
    width: '400px',
    height: '200px'
}


export default GraphTimeData
