import React from 'react';
import NeoContextProvider from './store/context';
import Figures from './components/figures/Figures.component'
import ToolBox from './components/toolbox/toolbox.component'

import './App.scss';

const App=()=> {
  return(
    <div className="main">
      <NeoContextProvider>
        <Figures />
        <ToolBox />
      </NeoContextProvider>

    </div>
  )}

export default App;
