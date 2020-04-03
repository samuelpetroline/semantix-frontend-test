import React, { useRef, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import Chart from 'chart.js'
import styled from 'styled-components'

import { transformDataToCategory, transformDataToTimeSeries } from './GraphUtils'

const Canvas = styled.canvas`
    max-width: 100%;
`

const Graph = props => {

    const {
        id,
        height,
        width,
        type,
        data,
        options,
        colors,
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
        console.log(Chart.defaults)
        // if (Array.isArray(chartInstance.current.config.data.datasets)) {
        //     chartInstance.current.config.data.datasets[0].backgroundColor = colors

            chartInstance.current.update()
        // }
    }, [node, type, data, options, transformData, colors])

    useEffect(renderChart, [type, data])

    return (
        <Canvas
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
    data: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]).isRequired,
    options: PropTypes.object,
    colors: PropTypes.array.isRequired,
    transformData: PropTypes.func
}

Bar.propTypes =
Line.propTypes =
Pie.propTypes = {
    id: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    data: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]).isRequired,
    options: PropTypes.object,
    colors: PropTypes.array
}

Graph.defaultProps = {
    colors: ['rgb(171,225,250)', 'rgb(17,138,202)', 'rgb(3,90,39)']
}

export default Graph