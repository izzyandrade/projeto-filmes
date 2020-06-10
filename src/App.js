import React from 'react';
import './style.css';
import Routes from './routes';

export default class App extends React.Component{
	render(){
		return(
			<div className="app">
				<Routes/>
			</div>
		);
	}
}