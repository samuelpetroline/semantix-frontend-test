import React from 'react'
import PropTypes from 'prop-types'

import Font from '../Font/Font'
import styled from 'styled-components'

const Header = styled.header`
    margin-top: 10vh;
`

const PageTitle = ({ title, subtitle }) => {
    return (
        <Header>
            <Font.Title font='Cairo'>{ title }</Font.Title>
            <Font.Subtitle>{ subtitle }</Font.Subtitle>
        </Header>
    )
}

PageTitle.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

export default PageTitle