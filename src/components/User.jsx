const User = ({imgSrc, name, position, email, phone}) => {
    return (
        <div className="user-wrapper">
            <img className="user-img" src={imgSrc}></img>
            <p className="name">{name}</p>
            <p className="position">{position}</p>
            <p className="email">{email}</p>
            <p className="phone">{phone}</p>
        </div>
    )
}

export default User