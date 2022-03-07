import React, { StrictMode } from "react"
import ReactDOM from "react-dom"

import Root from './components/Root/Root.jsx'

const rootElement = document.getElementById("root")
ReactDOM.render(
  <StrictMode>
    <Root />
  </StrictMode>,
  rootElement
)