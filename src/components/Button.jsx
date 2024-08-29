const Button = ({functionName , buttonText, type}) => {
    return (
        <>
            <button onClick={functionName} className={type}>{buttonText}</button>
        </>
    )
}

export default Button