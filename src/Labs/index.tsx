import Nav from "../Nav";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import store from "./store";
import { Provider } from "react-redux";
import {Routes, Route, Navigate}
  from "react-router";
function Labs() {
//  return (
//    <div>
//      <Nav/>
//      <Routes>
//        <Route path="/"
//         element={<Navigate
//                   to="a3"/>}/>
//        <Route path="a3"
//         element={<Assignment3/>}/>
//        <Route path="a4"
//         element={<Assignment4/>}/>
//      </Routes>
//      <Provider store={store}>
//       <div className="container-fluid">
//         <h1>Labs</h1>
//       </div>
//     </Provider>
//    </div>
//  );
return (
    <Provider store={store}>
        <div>
            {/* <Link to="/Labs/a3">A3</Link> |
            <Link to="/Kanbas">Kanbas</Link> |
            <Link to="/hello">Hello</Link> | */}
            <Nav/>
            <Routes>
                <Route path="/" element={<Navigate to="a3"/>}/>
                <Route path="a3" element={<Assignment3/>}/>
                <Route path="a4" element={<Assignment4/>}/>
            </Routes>
            {/* <Assignment3/> */}
        </div>
    </Provider>
);
}
export default Labs;