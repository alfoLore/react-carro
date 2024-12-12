import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SingIn from '../SingIn'
import './App.css';


function App() {
 return(
  <div className="text-3xl font-bold underline bg-orange-100">
  <Home />
  <MyAccount />
  <MyOrder />
  <MyOrders />
  <NotFound />
  <SingIn />
</div>
 )
}

export default App
