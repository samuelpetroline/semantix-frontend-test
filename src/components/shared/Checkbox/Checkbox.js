import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Font from '../Font/Font'

const CheckBoxWrapper = styled.div`
    display: flex;
    align-items: center;
`

const CheckboxField = styled.input`
    margin: 0;
    appearance: none;
    border: 1px solid #94999C;
    border-radius: 3px;
    width: 14px;
    height: 14px;
    margin-right: 10px;
    position: relative;

    &:checked {
        &::after {
            content: '';
            /* background: red; */
            position: absolute;
            width: 100%;
            height: 100%;
            display: block;
            left: 3px;
            top: 0;
            width: 5px;
            height: 10px;
            border: solid #6d6d6d;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
        }
    }
`

const CheckboxLabel = styled(Font.Label)`
    display: inline-flex;
    align-items: center;
    width: 100%;
`

const CheckboxIcon = styled.i`
    margin-left: auto;
`

const Checkbox = props => {
    const {
        children,
        name,
        value,
        checked,
        endIcon,
        onChange
    } = props

    return (
        <CheckBoxWrapper>
            <CheckboxLabel>
                <CheckboxField type='checkbox' name={name} value={value} checked={checked} onChange={onChange} />
                <span>{ children }</span>
            </CheckboxLabel>
            { endIcon &&
                <CheckboxIcon>{ endIcon }</CheckboxIcon>
            }
        </CheckBoxWrapper>
    )
}

Checkbox.propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    checked: PropTypes.bool,
    endIcon: PropTypes.node,
    onChange: PropTypes.func
}

export default Checkbox
