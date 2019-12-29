import React, { lazy, Suspense } from 'react';
import { Router } from "react-router-dom";



const HookA = lazy(() => import("./componments/HookA"));
const HookB = lazy(() => import('./componments/HookB'));


function App() {
  return (
    <div className="app">
      <h1 className="coldpedia-title">COLDPEDIA v2</h1>
   
        <Suspense>
          <Router>
            <HookA path="albums" />
            <HookB path="voting" />
          </Router>
        </Suspense>
    </div>
  );
}

export default App;