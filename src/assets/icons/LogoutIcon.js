import React from 'react'
import PropTypes from 'prop-types'

const LogoutIcon = ({ fill, width, height }) => {
    return (
        <svg version="1.1" id="Layer_2_1_" x="0px" y="0px" viewBox="0 0 64 64" fill={fill} width={width} height={height}>
            <g>
                <path d="M30.1,41.9c0.5,0.5,1.3,0.8,1.9,0.8s1.3-0.3,1.9-0.8l7.5-6.9c0.8-0.8,1.3-1.9,1.3-2.9c0-1.1-0.5-2.1-1.3-2.9l-7.5-6.9
                    c-1.1-1.1-2.7-1.1-3.7,0c-1.1,1.1-1.1,2.7,0,3.7l3.7,3.5H10.7C9.1,29.3,8,30.4,8,32c0,1.6,1.1,2.7,2.7,2.7h23.2l-3.7,3.5
                    C29.1,39.2,29.1,40.8,30.1,41.9z"/>
                <path d="M50.7,0h-16c-2.9,0-5.3,2.4-5.3,5.3V16c0,1.6,1.1,2.7,2.7,2.7c1.6,0,2.7-1.1,2.7-2.7V5.3h16v53.3h-16V48
                    c0-1.6-1.1-2.7-2.7-2.7c-1.6,0-2.7,1.1-2.7,2.7v10.7c0,2.9,2.4,5.3,5.3,5.3h16c2.9,0,5.3-2.4,5.3-5.3V5.3C56,2.4,53.6,0,50.7,0z"/>
            </g>
        </svg>

    )
}

LogoutIcon.propTypes = {
    fill: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
}

LogoutIcon.defaultProps = {
    fill: '#ABE1FA',
    width: '20px',
    height: '20px'
}

export default LogoutIcon
