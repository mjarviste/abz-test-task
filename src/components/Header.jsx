import Logo from "../components/Logo"
import Button from "../components/Button"

const Header = () => {

    const onUsersBtnClick = () => {
        const usersEl = document.querySelector('#users-section')
        usersEl.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    const onSignUpBtnClick = () => {
        const signUpEl = document.querySelector('#add-user-section')
        signUpEl.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    return (
        <header className="headerEl">
            <Logo></Logo>
            <div className="header-buttons">
                <Button functionName={onUsersBtnClick} type="yellow" buttonText="Users"></Button>
                <Button functionName={onSignUpBtnClick} type="yellow" buttonText="Sign up"></Button>
            </div>
        </header>
    )
}

export default Header