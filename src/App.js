import React from 'react';
import routes from './routes'
import { useRoutes } from 'react-router-dom';
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  let route = useRoutes(routes)
  return (
   
  <div  className='bg-[#09090B] text-[#8A96B1] font-yekanmed flex'   dir='rtl'>
    <div className="sticky h-[100vh] top-0 flex-1 right-0 w-64">

      <Sidebar />
    </div>

    <div className='w-full  '>
      <Topbar />
      
      {route}
    </div>
  </div>
   
  );
}

export default App;
