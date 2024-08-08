
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import SummaryApi from './common';
import Context from './context';



function App() {

  const fetchUserDetails = async()=>{
    const dataResponse = await fetch(SummaryApi.current_user.url,{
      method: SummaryApi.current_user.method,
      credentials : 'include'
    })
    const dataApi = await dataResponse.json()
    console.log('data-user',dataResponse);
    
  }
  useEffect(()=>{
    /**user Details */
    fetchUserDetails()
  },[])
  return (
    <>
    <Context.Provider value={{
      fetchUserDetails  //user details fetch
    }}>
    <ToastContainer />
    <Header/>
   <main className='min-h-[calc(100vh-120px)]'>
     <Outlet />  {/* This component renders the component associated with the current route. */}
   </main>
    <Footer/>

    </Context.Provider>
    </>
  );
}

export default App;
