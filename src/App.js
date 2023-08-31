import './App.css'

import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages'

function App() {
  return (
    <Router>
      {/* <Routes>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact /> */}
      <Home />
      {/* </Routes> */}
    </Router>
  )
}

export default App
