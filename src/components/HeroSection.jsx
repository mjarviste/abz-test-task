import Button from "../components/Button"

const HeroSection = ({mainHeadingText, subText}) => {
    return (
        <section id="hero-section">
            <div className="hero-section-wrapper">
                <h1>{mainHeadingText}</h1>
                <p>{subText}</p>
                <Button type="yellow" buttonText="Sign up"></Button>
            </div>
        </section>
    )
}
export default HeroSection