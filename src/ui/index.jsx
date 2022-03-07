import React, { StrictMode } from "react"
import ReactDOM from "react-dom"

import 'normalize.css/normalize.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import '@blueprintjs/core/lib/css/blueprint.css'

import Root from './components/Root/Root.jsx'

const rootElement = document.getElementById("root")
ReactDOM.render(
  <StrictMode>
    <Root />
  </StrictMode>,
  rootElement
)