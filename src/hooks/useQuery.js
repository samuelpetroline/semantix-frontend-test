import { useReducer, useEffect } from 'react'

const initialState = {
    fetching: false,
    success: false,
    data: null,
    error: null
}

const actions = {
    'QUERY_PENDING': (state, payload) => {
        return {
            ...state,
            fetching: true,
            success: null,
            error: null,
            data: null
        }
    },
    'QUERY_SUCCESS': (state, payload) => {
        return {
            ...state,
            fetching: false,
            success: true,
            error: null,
            data: payload.data
        }
    },
    'QUERY_FAILED': (state, payload) => {
        return {
            ...state,
            fetching: false,
            success: false,
            error: payload.error,
            data: null
        }
    }
}

const reducer = (state, action) => {
    const currentAction = actions[action.type]

    if (currentAction) {
        return currentAction(state, action.payload)
    }

    throw new Error('Invalid action type')
}

const useQuery = ({ query }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleExecution = () => {
        dispatch({ type: 'QUERY_PENDING' })

        query()
            .then(response => dispatch({ type: 'QUERY_SUCCESS', payload: response }))
            .catch(error => dispatch({ type: 'QUERY_FAILED', payload: error }))
    }

    useEffect(handleExecution, [query])

    return { ...state, retryQuery: handleExecution }
}

export { useQuery }
