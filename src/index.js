import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Area from './Area'
import Welcome from './welcome'
import AppDetail from './AppDetail'
import AreaDetail from './AreaDetail'
import {
	Router,
	Route,
	browserHistory,

} from 'react-router'
import registerServiceWorker from './registerServiceWorker';



const routes = (
	<Router history={browserHistory}>
	<Route path="/" component={Welcome} />
	<Route path="main" component={App} />
	<Route path="area" component={Area}/>
	<Route path="main/:index_id" component={AppDetail}/>
	<Route path="area/:index_id" component={AreaDetail}/>
	
	</Router>
)
ReactDOM.render(routes, document.getElementById('root'));
// ReactDOM.render(<Welcome />, document.getElementById('root'));
registerServiceWorker();