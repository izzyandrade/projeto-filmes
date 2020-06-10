import React from 'react';
import { Link } from 'react-router-dom';

export default class Erro extends React.Component{
	render(){
		return(
			<div>
				<h1>Pagina não encontrada</h1>
				<Link to='/'>Voltar a tela inicial</Link>
			</div>
		);
	}
}