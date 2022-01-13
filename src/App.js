import React from 'react'
import Links from './components/Links'
import LinkForm from './components/LinkForm'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='container p-4'>
      <ToastContainer/>
      <div className="row">
        <div className="list-group text-white">
            <h1 className='fw-bold text-center'>Websites catcher</h1>
            <p className='lead'>If you wanna save or attach some websites, you can do it here.</p>
        </div>
        <LinkForm/>
        <Links/>
      </div>
    </div>
  );
}

export default App;
