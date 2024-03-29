import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Font = ({ children }) => {
    return children
}

const BaseFontStyle = css`
    font-family: ${props => props.font ? props.font : 'Open Sans'}, sans-serif;
    color: #4A4A4A;
`

const Title = styled.h1`
    ${BaseFontStyle}
    font-size: 29px;
    font-weight: 600;
    line-height: 29px;
    letter-spacing: 0.3px;
`

const Subtitle = styled.h2`
    ${BaseFontStyle}
    font-size: 16px;
    line-height: 23px;
`

const Label = styled.label`
    ${BaseFontStyle}
`

Font.Title = Title
Font.Subtitle = Subtitle
Font.Label = Label

Font.propTypes = {
    children: PropTypes.node.isRequired
}

export default Font
