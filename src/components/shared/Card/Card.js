import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Font from '../Font/Font'

const CardTitle = styled(Font.Subtitle)`
    text-transform: uppercase;
    color: #035A27;
    margin-bottom: 20px;
    font-weight: 600;
`

const Card = ({ title, children }) => {
    return (
        <article>
            <CardTitle as='header'>
                { title }
            </CardTitle>
            { children }
        </article>
    )
}

Card.propTypes = {

}

export default Card
