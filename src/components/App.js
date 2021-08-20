import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
    return <div>P1</div>;
};

const PageTwo = () => {
    return <div>P2
        <button>Click</button>
    </div>;
};

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={PageOne} />
                    <Route path='/pagetwo' exact component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;