import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import { Provider, useDispatch } from 'react-redux';
import Store from './components/Store';
import { Outlet, Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import VideoPage from './components/VideoPage';
import Body from './components/Body';
import { openMenu } from './utilties/sideBarSlice';

const AppRouter = createBrowserRouter([

  {
    path:"/",
    element:<Body/>,
    children :[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"/watch",
        element:<VideoPage/>
      }
    ]
  }
]);

function App() {

  
  return (
    <Provider store={Store}>
     <Header/>
     <RouterProvider router={AppRouter} />
    </Provider>
  );
}



export default App;
