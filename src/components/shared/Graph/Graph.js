import React, { useRef, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import Chart from 'chart.js'

import { transformDataToCategory, transformDataToTimeSeries } from './GraphUtils'

const Graph = props => {

    const {
        id,
        height,
        width,
        type,
        data,
        options,
        transformData
    } = props

    const node = useRef(null)
    const chartInstance = useRef(null)

    const renderChart = useCallback(() => {
        chartInstance.current = new Chart(node.current, {
            type,
            data: transformData ? transformData(data) : data,
            options
        })
    }, [node, type, data, options, transformData])

    useEffect(renderChart, [type, data])

    return (
        <canvas
            id={id}
            ref={node}
            height={height}
            width={width}
        />
    )
}

const Bar = props => {
    return (
        <Graph
            { ...props }
            transformData={transformDataToCategory}
            type='bar'
        />
    )
}

const Line = props => {
    return (
        <Graph
            { ...props }
            transformData={transformDataToTimeSeries}
            type='line'
        />
    )
}

const Pie = props => {
    return (
        <Graph
            { ...props }
            transformData={transformDataToCategory}
            type='pie'
        />
    )
}

Graph.Bar = Bar
Graph.Line = Line
Graph.Pie = Pie

Graph.propTypes = {
    id: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['bar', 'line', 'pie']).isRequired,
    data: PropTypes.object.isRequired,
    options: PropTypes.object,
    transformData: PropTypes.func
}

Bar.propTypes =
Line.propTypes =
Pie.propTypes = {
    id: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    options: PropTypes.object
}

export default Graph