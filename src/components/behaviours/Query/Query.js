import React, { useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import immer from 'immer'

const initialState = {
    loading: false,
    success: false,
    data: null,
    error: null
}

const actions = {
    'QUERY_PENDING': (state, payload) => {
        state.loading = true
        state.error = null
        state.data = null
    },
    'QUERY_SUCCESS': (state, payload) => {
        state.loading = false
        state.success = true
        state.data = payload.data
    },
    'QUERY_FAILED': (state, payload) => {
        state.loading = false
        state.success = false
        state.error = payload.error
    }
}

const reducer = (state, action) => {
    const currentAction = actions[action.type]

    if (currentAction) {
        return immer(state, draft => currentAction(draft, action.payload))
    }

    throw new Error('Invalid action type')
}

const Query = props => {
    const {
        query,
        onLoading,
        onQuerySuccess,
        onQueryFailed
    } = props

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect()

    return (
        <div>

        </div>
    )
}

Query.propTypes = {
    query: PropTypes.func.isRequired,
    onLoading: PropTypes.func.isRequired,
    onQuerySuccess: PropTypes.func.isRequired,
    onQueryFailed: PropTypes.func.isRequired
}

export default Query
