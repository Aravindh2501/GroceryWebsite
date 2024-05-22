import AppRoutes from "./Routes/AppRoutes"
import "./Styles/index.scss"
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Provider } from "react-redux";

// store
import store from "./Redux/Store";

// plugin
gsap.registerPlugin(ScrollTrigger);


const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <AppRoutes />
      </div>
    </Provider>
  )
}

export default App