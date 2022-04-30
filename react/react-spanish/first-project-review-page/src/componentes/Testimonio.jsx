import '../stylesheets/testimonio.css'

export function Testimonio(props) {
	return(
		<div className="contenedor-testimonio" >
			<img className="imagen-testimonio" src={require(`../imagenes/testimonio-${props.img}.png`)} alt={`foto de ${props.img}`}/>
			<div className='contenedor-texto-testimonio' >
				<p className='nombre-pais-testimonio' ><strong>{props.name}</strong> in {props.country}</p>
				<p className='cargo-testimonio' >{props.job} at <strong>{props.company}</strong></p>
				<p className='texto-testimonio' >
					"
					{props.testimonyBefore}
					<strong>{props.testimonyBold}</strong>
					{props.testimonyAfter}
					"
				</p>
			</div>
		</div>
	)
}

