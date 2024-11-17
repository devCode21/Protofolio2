import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './store.js';
import About from './About.jsx';
import SkillGrp from './components/SkillGrp.jsx';
import Contact from './components/contact.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path="about" element=<About/> />
      <Route path='skill' element=<SkillGrp/>/>
      <Route path='Project' element=<Contact/> />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
