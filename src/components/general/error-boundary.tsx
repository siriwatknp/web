import React, { Component } from 'react'

type ErrorBoundaryState = {
  hasError: boolean
}

export class ErrorBoundary extends Component<{}, ErrorBoundaryState> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    console.error(error)
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <p>Error</p>
    }
    return this.props.children
  }
}
