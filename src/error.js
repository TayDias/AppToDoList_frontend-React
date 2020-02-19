import { PureComponent } from 'react'
import t from 'prop-types'

class ErrorBoundary extends PureComponent {
    state = { hasError: false }

    static getDeriveStateFromError (error) {
        console.log('error getDerivedStateFromError'. error.message)
        return { hasError: true }
    }

    componentDidCatch (error, errorInfo) {
        console.log(error)
        console.log(errorInfo.componentStack)
    }

    render () {
        return this.props.children
    }
}

ErrorBoundary.propTypes = {
    children: t.node.isRequired
}

export default ErrorBoundary