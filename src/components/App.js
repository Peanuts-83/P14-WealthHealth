import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../style/app.css';
import Header from './Header'
import Footer from './Footer'
import Create from '../pages/Create'
import View from '../pages/View'
import Error from '../pages/Error'
import { EmployeeProvider } from '../context/employeesCtx'

function App() {
  return (
    <EmployeeProvider>
      <BrowserRouter basename="/P14-wealth_health">
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Create />} />
            <Route path='/view' element={<View />} />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </EmployeeProvider>
  );
}

export default App;
