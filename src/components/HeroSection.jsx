import Button from "../components/Button"

const HeroSection = ({mainHeadingText, subText}) => {

    const onSignUpBtnClick = () => {
        const signUpEl = document.querySelector('#add-user-section')
        signUpEl.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    return (
        <section id="hero-section">
            <div className="hero-section-wrapper">
                <h1>{mainHeadingText}</h1>
                <p>{subText}</p>
                <Button functionName={onSignUpBtnClick} type="yellow" buttonText="Sign up"></Button>
            </div>
        </section>
    )
}
export default HeroSection