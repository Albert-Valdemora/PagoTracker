
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import { AuthRouter } from './AuthRouter'
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { PagoTrackerScreen } from "../components/screens/PagoTrackerScreen";



export const AppRouter = () => {

  

  return (

    <BrowserRouter>

      <Routes>

        <Route path='/auth/*' element={
          <PublicRoute>
            <AuthRouter />
          </PublicRoute>
          } />
          

        {/* <Route path='/auth/*' element={
         
            <AuthRouter />
         
          } /> */}

        {/* <Route path="/"  element={
      
            <PagoTrackerScreen />
       
          } /> */}

        <Route path="/"  element={
          <PrivateRoute>
            <PagoTrackerScreen />
          </PrivateRoute>
          } />

      </Routes>
    </BrowserRouter>

  )
}
