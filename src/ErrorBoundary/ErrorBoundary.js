// UNEXPECTED CURRENTLLY NOT WORKING

import PageErrorThroughErrorBoundary from "./PageErrorThroughErrorBoundary";
import React from "react";
class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
    };
  }
  
  componentDidCatch(error) {
    this.setState = {
      error: true,
    };
  }

  render() {
    if (this.state.error) {
      return <PageErrorThroughErrorBoundary />;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
