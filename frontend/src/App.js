import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import Layout from './components/Layout';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import store from './store'
import { Provider } from 'react-redux'
import Upload from './components/Upload';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route exact path='' element={<PrivateRoute />}>
              <Route path="upload" element={<Upload />} />
              <Route index element={<Index />} />
            </Route>
            <Route exact path='' element={<PublicRoute />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="about" element={<About />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
