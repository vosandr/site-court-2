import 'index.css'
import { render } from 'preact'
import App from 'App';
import { Router } from 'preact-router';

render(<App/>, document.getElementById('root') as Element)
