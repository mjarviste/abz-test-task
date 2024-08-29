import Logo from "../components/Logo"
import Button from "../components/Button"

const Header = () => {
    return (
        <header className="headerEl">
            <Logo></Logo>
            <div className="header-buttons">
                <Button type="yellow" buttonText="Users"></Button>
                <Button type="yellow" buttonText="Sign up"></Button>
            </div>
        </header>
    )
}

export default Header