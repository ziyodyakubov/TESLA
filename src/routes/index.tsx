import 'react';
import './../index.scss'
import { Routes, Route } from "react-router-dom";
import {Header} from '@components';
import { Panels,Roof,Model3,ModelS,ModelX,ModelY} from '@pages';


function TeslaRoutes() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Header/>}>
            <Route path="/" element={<ModelX/>}></Route>
            <Route path="/model_3" element={<Model3/>}/>
            <Route path="/model_x" element={<ModelX/>}/>
            <Route path="/model_s" element={<ModelS/>}/>
            <Route path="/model_y" element={<ModelY/>}/>
            <Route path="/solar_roof" element={<Roof/>}/>
            <Route path="/solar_panels" element={<Panels/>}/>
        </Route>
      </Routes>

    </>
  )
}

export default TeslaRoutes;