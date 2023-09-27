import 'index.css'
import { h, render } from 'preact'
import { useEffect } from 'preact/hooks';
import App from 'App';
import BrowserRouter from 'preact-router';

render((<App/>), document.getElementById('root') as Element)
