import React from 'react'
import PropTypes from 'prop-types'

import { useQuery } from '../../../hooks/useQuery'

const FetchableDataContext = React.createContext()

const useFetchableDataContext = () => {
    const context = React.useContext(FetchableDataContext)

    if (!context) {
        throw new Error('FetchableData compound components cannot be rendered outside the FetchableData component')
    }

    return context
}

const FetchableData = ({ children, query }) => {
    const state = useQuery({ query })

    return (
        <FetchableDataContext.Provider value={state}>
            { children }
        </FetchableDataContext.Provider>
    )
}

const Loading = ({ children }) => {
    const { fetching } = useFetchableDataContext()

    return fetching
        ? children
        : null
}

const InnerError = ({ children }) => {
    const { fetching, success, error, retryQuery } = useFetchableDataContext()

    return !fetching && !success && error
        ? typeof children === 'function'
                ? children({ error, retryQuery })
                : children
        : null
}

const Empty = ({ children }) => {
    const { fetching, success, data } = useFetchableDataContext()

    return !fetching && success && !data
        ? children
        : null
}

const Success = ({ children }) => {
    const { fetching, success, data } = useFetchableDataContext()

    return !fetching && success && data
        ? children({ data })
        : null
}

FetchableData.Loading = Loading
FetchableData.Error = InnerError
FetchableData.Empty = Empty
FetchableData.Success = Success

FetchableData.propTypes = {
    children: PropTypes.any.isRequired,
    query: PropTypes.func.isRequired
}

export default FetchableData
