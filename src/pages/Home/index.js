import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default class Home extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			filmes: []
		};
		this.loadFilmes = this.loadFilmes.bind(this);
	}

	componentDidMount(){
		this.loadFilmes();
	}

	loadFilmes(){
		let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';
		fetch(url)
		.then((r) => r.json())
		.then((json) => {
			this.setState({filmes: json});
		});
	}

	render(){
		return(
			<div className="container">
				<div className="lista-filmes">
					{this.state.filmes.map((item) => {
						return(
							<article key={item.id} className="filme">
								<strong>{item.nome}</strong>
								<img src={item.foto} alt="capa"/>
								<Link to={`/filme/${item.id}`}>Acessar</Link>
							</article>
						);
					})}
				</div>
			</div>
		);
	}
}