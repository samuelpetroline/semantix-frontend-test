import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import * as Icons from '../../../assets/icons'

console.log(Icons)

const ImageIcon = styled.img`
    display: inline-flex;
    width: ${props => props.width};
    height: ${props => props.height};
`

const Icon = ({ name, width, height }) => {
    return (
        <ImageIcon
            width={width}
            height={height}
        />
    )
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
}

Icon.defaultProps = {
    width: '1em',
    height: '1em'
}

export default Icon
