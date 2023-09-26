import 'index.css'
import { render } from 'preact'
import App from 'App';
import { BrowserRouter } from 'preact-router';

render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>), document.getElementById('root') as Element)
