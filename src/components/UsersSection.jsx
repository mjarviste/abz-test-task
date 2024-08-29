import Button from "./Button"
import User from "./User"
import useState from 'react'

const UsersSection = ({usersHeadingText, users, usersToShow, showMore, showLess, showMoreUsers, showMoreText}) => {

    return (
        <section id="users-section">
            <h1>{usersHeadingText}</h1>
            <div className="users-container">
                {users.slice(0, usersToShow).map(user => (
                    <User key={user.id} imgSrc={user.photo} name={user.name} position={user.position} email={user.email} phone={user.phone} />
                ))}
            </div>
            <Button functionName={showMoreUsers ? showMore : showLess} type="yellow box-shadow" buttonText={showMoreText} />
        </section>
    )
}

export default UsersSection