const PositionButtons = ({positions, handlePositionChange}) => {
    return positions.map(position => 
        <div key={position.id} className="radio-button-wrapper">
            <input className="radio-button" type="radio" id={`position-choice-${position.id}`} name="position" value={position.id} onChange={handlePositionChange}/>
            <span className="checkmark"></span>
            <label htmlFor={`position-choice-${position.id}`}>{position.name}</label>
        </div>
    )
}

export default PositionButtons