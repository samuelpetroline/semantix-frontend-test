import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    border: 1px solid #909090;
    padding: 7px 9px;
    border-radius: 7px;
`

const InputField = styled.input`
    background: none;
    outline: none;
    appearance: none;
    border: none;
    font-size: 1rem;
    width: 100%;
    color: #4A4A4A;
`

const InputIcon = styled.i`
    display: inline-flex;
`

const InputIconStart = styled(InputIcon)`
    margin-right: 8px;
`

const InputIconEnd = styled(InputIcon)`
    margin-left: 8px;
`

const Input = props => {

    const {
        type,
        placeholder,
        value,
        disabled,
        onChange,
        startIcon,
        endIcon,
        ...other
    } = props

    return (
        <InputWrapper>
            { startIcon &&
                <InputIconStart>{ startIcon }</InputIconStart>
            }
            <InputField type={type} placeholder={placeholder} value={value} disabled={disabled} onChange={onChange} {...other} />
            { endIcon &&
                <InputIconEnd>{ endIcon }</InputIconEnd>
            }
        </InputWrapper>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.any,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    startIcon: PropTypes.node,
    endIcon: PropTypes.node
}

Input.defaultProps = {
    type: 'text',
    disabled: false
}

export default Input
