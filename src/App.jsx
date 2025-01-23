import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import BatchList from './components/Batches/BatchList'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home';

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Header />
        <Routes>
          <Route 
            path="/" 
            element={<Home/>}
          />
          <Route 
            path="/batch_list" 
            element={<BatchList/>} 
          />
          {/* <Route
          path="" 
          element={} 
          />
          <Route 
            path="" 
            element={} 
          /> */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
