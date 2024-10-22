import {lazy} from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

const App = lazy(() => import('./App'));

export const routes = [
    {
        index: true,
        path: '/',
        element: (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
]
