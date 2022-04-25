import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../style/App.css';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Create from '../pages/Create'
import View from '../pages/View'
import Error from '../pages/Error'

function App() {
  return (
    <BrowserRouter>
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
  );
}

export default App;
