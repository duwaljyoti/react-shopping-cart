import React, {useEffect} from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import {useDispatch, useSelector} from "react-redux";
import Notification from "./components/Notifications";
import {uiActions} from "./store/uislice";
let isFirstRender = true;

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    const sendRequest = async() => {
      dispatch(uiActions.showNotification({open: true, message: 'Sending request', type: 'warning'}))
      const res = await fetch('https://react-redux-d7286-default-rtdb.firebaseio.com/cartItems.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      })
      const data = await res.json()
      dispatch(uiActions.showNotification({open: true, message: 'Sent to DB successfully', type: 'success'}))
    }

    sendRequest().catch(err => {
      dispatch(uiActions.showNotification({open: true, message: 'Sending Failed', type: 'error'}))
    });
  }, [cart])

  return (
    <div className="App">
      {notification && <Notification type={notification.type} message={notification.message} />}
      { !isLoggedIn && <Auth />}
      { isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
