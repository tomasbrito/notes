import { AppRouter } from "./router/AppRouter"
import { BrowserRouter } from "react-router-dom"
import { Navbar } from "./ui/components/Navbar"
import { Provider } from 'react-redux';
import {store} from './store'

export const MainApp = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </Provider>
    )
}
