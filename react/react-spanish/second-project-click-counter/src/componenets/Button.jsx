
function Button({esCickButton, counterChange, text}) {
    return(
        <div className="button-container" >
            <button className={esCickButton ? 'click-button' : 'clear-button'}onClick={counterChange} >{text}</button>
        </div>
    )
}

export default Button