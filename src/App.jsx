import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {store} from './store';
import {Provider} from 'react-redux';

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>Vite + React</h1>
                    <p>
                        <button onClick={() => setCount(count => count + 1)}>
                            count is {count}
                        </button>
                    </p>
                    <p>
                        Edit <code>App.jsx</code> and save to test HMR updates.
                    </p>
                    <p>
                        <a
                            className="App-link"
                            href="https://react.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                        {' | '}
                        <a
                            className="App-link"
                            href="https://vitejs.dev/guide/features.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Vite Docs
                        </a>
                    </p>
                </header>
            </div>
        </Provider>
    );
};

export default App;
