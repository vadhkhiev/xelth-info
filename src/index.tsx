import './index.css';
import reportWebVitals from './reportWebVitals';
import {createRoot} from "react-dom/client";
import {AppRoutes} from "./app/routing/AppRoutes";
import store from "./app/redux/store";
import {Provider} from "react-redux";
import "./_xelth-info/assets/style/custom.scss"

const container = document.getElementById('root');

if (container) {
    createRoot(container).render(
        <Provider store={store}>
            <AppRoutes/>
        </Provider>
    )
}

reportWebVitals();