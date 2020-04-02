import React from 'react'
import PropTypes from 'prop-types'

const FolderIcon = ({ fill, width, height }) => {
    return (
        <svg version="1.1" x="0px" y="0px" viewBox="0 0 64 64" fill={fill} width={width} height={height}>
            <path d="M58.7,8H30.4l-0.3-1.1c-0.5-1.1-1.6-1.6-2.7-1.6H2.7C1.1,5.3,0,6.4,0,8v48c0,1.6,1.1,2.7,2.7,2.7h58.7
                c1.6,0,2.7-1.1,2.7-2.7V21.3v-8C64,10.4,61.6,8,58.7,8z M58.7,13.3v5.3h-24l-2.1-5.3H58.7z M58.7,53.3H5.3V10.7h20.3l4,9.9
                c0.8,2.1,2.7,3.5,5.1,3.5h24V53.3z"/>
        </svg>
    )
}

FolderIcon.propTypes = {
    fill: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
}

FolderIcon.defaultProps = {
    fill: '#ABE1FA',
    width: '20px',
    height: '20px'
}
export default FolderIcon
