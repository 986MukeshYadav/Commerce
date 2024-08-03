
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
    <>
    <Header/>
   <main className='min-h-[calc(100vh-120px)]'>
     <Outlet />  {/* This component renders the component associated with the current route. */}
   </main>
    <Footer/>
    </>
  );
}

export default App;
