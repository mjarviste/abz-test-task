import PositionButtons from '../components/PositionButtons'
import Button from '../components/Button'
import successImg from '../assets/success-image.svg'

const AddUserSection = ({positions, addUserHeadingText, addUser, handleNameChange, handleEmailChange, handleNumberChange, handlePositionChange, handleImgFileChange, imgFileName}) => {

    const chooseFile = (e) => {
        e.preventDefault()
        const filesEl = document.querySelector("#file-input")
        filesEl.click()
    }

    return (
        <section id="add-user-section">
            <h1>{addUserHeadingText}</h1>
            <form className="form">
                <input className="input-el" type="text" placeholder="Your name" onChange={handleNameChange} required></input>
                <input className="input-el" type="email" placeholder="Email" onChange={handleEmailChange} required></input>
                <input className="input-el" type="text" placeholder="Phone" onChange={handleNumberChange} required></input>
                <label id="number-pattern">+38 (XXX) XXX - XX - XX</label>
                <legend>Select your position</legend>
                <fieldset id="radio-buttons-container">
                    <PositionButtons positions={positions} handlePositionChange={handlePositionChange} />
                </fieldset>
                <div className="input-el input-file-wrapper">
                    <button className="upload-button" onClick={chooseFile}>Upload</button>
                    <span>{imgFileName}</span>
                    <input id="file-input" className="input-file-el" type="file" accept="image/jpg, image/jpeg" placeholder="Upload" onChange={handleImgFileChange} required/>
                </div>
                <input className="submit-button grey" onClick={addUser} type="submit" value="Sign up"/>
            </form>
            <img id="form-submitted" src={successImg}></img>
        </section>
    )
}

export default AddUserSection