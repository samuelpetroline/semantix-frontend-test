import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Card from '../../shared/Card/Card'
import Input from '../../shared/Input/Input'
import SearchIcon from '../../../assets/icons/SearchIcon'

const List = styled.ul`
    display: block;
    margin-bottom: 5px;
`

const ListItem = styled.li`
    display: block;
    margin-bottom: 10px;
`

const FilterableList = props => {
    const {
        headerTitle,
        onFilter,
        children
    } = props

    return (
        <Card title={headerTitle}>
            <List>
                {
                    React.Children.map(children, (currentChildren) => (
                        <ListItem>
                            {
                                React.cloneElement(currentChildren, {
                                    onChange: onFilter
                                })
                            }
                        </ListItem>
                    ))
                }
            </List>
            <Input type='text' label='label 'placeholder='Buscar' startIcon={<SearchIcon fill='#31B1FF' width='1em' height='1em' />} onChange={onFilter} />
        </Card>
    )
}



FilterableList.propTypes = {
    headerTitle: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

export default FilterableList
