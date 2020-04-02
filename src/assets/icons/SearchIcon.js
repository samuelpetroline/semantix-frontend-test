import React from 'react'
import PropTypes from 'prop-types'

const SearchIcon = ({ fill, width, height }) => {
    return (
        <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 64 64" fill={fill} width={width} height={height}>
            <path d="M62.6,51.2L47.7,36.2c-1.9-1.9-5.1-1.9-6.9,0l-0.3,0.3L35.9,32c5.9-7.7,5.3-19.2-1.9-26.1c-7.7-7.7-20.5-7.7-28.3,0
                s-7.7,20.5,0,28.3c4,4,9.1,5.9,14.1,5.9c4.3,0,8.5-1.3,12-4l4.5,4.5l-0.3,0.3c-1.9,1.9-1.9,5.1,0,6.9l14.9,14.9
                c1.1,1.1,2.1,1.3,3.5,1.3c1.3,0,2.4-0.5,3.5-1.3l4.3-4.3C64.5,56.2,64.5,53.3,62.6,51.2z M9.5,30.4c-5.6-5.6-5.6-14.9,0-20.8
                c2.9-2.9,6.7-4.3,10.4-4.3s7.5,1.3,10.4,4.3c5.6,5.6,5.6,14.9,0,20.8C24.5,36,15.4,36,9.5,30.4z M54.9,58.6L40.5,44.2l3.7-3.7
                l14.4,14.4L54.9,58.6z"/>
        </svg>
    )
}

SearchIcon.propTypes = {
    fill: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
}

SearchIcon.defaultProps = {
    fill: '#ABE1FA',
    width: '20px',
    height: '20px'
}

export default SearchIcon
