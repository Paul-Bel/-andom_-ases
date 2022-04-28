import React from 'react';
import './App.css';
import {Slider} from "./components/Slider/Slider";
import {Canvas} from "./components/Canvas/Canvas";
import {Video} from "./components/video/Video";
import {HashRouter, Route, Routes} from "react-router-dom";
import {NavBar} from "./components/NavBar/NavBar";
import {GetData} from "./components/GetData/GetData";
import {RandomSquare} from "./components/RandomSquare/RandomSquare";
import { Blocks } from './components/Block/Blocks';
import {ShowElement} from "./components/ShowElement/ShowElement";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <NavBar/>
                <Routes>

                    <Route path={'/Slider'} element={<Slider/>}/>
                    <Route path={'/ '} element={<Slider/>}/>
                    <Route path={'/Canvas'} element={<Canvas/>}/>
                    <Route path={'/Video'} element={<Video/>}/>
                    <Route path={'/GetData'} element={<GetData/>}/>
                    <Route path={'/Squares'} element={<RandomSquare/>}/>
                    <Route path={'/Blocks'} element={<Blocks/>}/>
                    <Route path={'/ShowElement'} element={<ShowElement/>}/>

                </Routes>

            </HashRouter>
        </div>
    )
        ;
}

export default App;
