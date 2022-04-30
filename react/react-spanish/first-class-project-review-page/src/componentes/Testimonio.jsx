import React from 'react';
import '../stylesheets/testimonio.css';

class Testimonio extends React.Component {
	render() {
		return (
			<div className="contenedor-testimonio" >
			<img className="imagen-testimonio" src={require(`../imagenes/testimonio-${this.props.img}.png`)} alt={`foto de ${this.props.img}`} />
			<div className='contenedor-texto-testimonio'>
				<p className='nombre-pais-testimonio' ><strong>{this.props.name}</strong> in {this.props.country}</p>
				<p className='cargo-testimonio' >{this.props.job} at <strong>{this.props.company}</strong></p>
				<p className='texto-testimonio'>
					"
					{this.props.testimonyBefore}
					<strong>{this.props.testimonyBold}</strong>
					{this.props.testimonyAfter}
					"
				</p>
			</div>
		</div>
		)
	}
};

export default Testimonio;