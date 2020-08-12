import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {

	}

	onChangeComentario=(event)=> {
		this.setState({comentando:event.target.value})
		
	}
	
	
	render() {
		return  <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.comentando}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
