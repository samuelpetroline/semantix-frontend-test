import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Box = styled.div`
    padding: 4px 7px;
    border: 1px solid #94999C;
    border-radius: 7px;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    color: #94999C;
`

const CounterBox = ({ children, onClick }) => {
    return (
        <Box onClick={onClick}>
            { children }
        </Box>
    )
}

CounterBox.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
}

export default CounterBox
