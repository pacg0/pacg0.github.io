
import './Home.css'

export default function Home() {
    return (
        <div className="home-page">
            <h1 className="home-header">Home</h1>
            <div className="home">
                <p className="home-blurb" style={{flexGrow:2}}>My name is Isidro Godoy, and I am a 21-year old Computer Science student at UCLA, with a STRONG passion for game development!!  Please see some of my best works on this page and the rest of this site :{'>'}
                </p>
                <img className="home-blurb" style={{flexGrow:1}}src={"../assets/profile_img.png"} alt="   this is not an image of me. please pretend for now."></img>
            </div>
        </div>
    );
}