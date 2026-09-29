import './Home.css'
import BigInfoBox from '../components/BigInfoBox';
import ccimg from '../assets/temp.png'
import bpimg from '../assets/bpimage.png'

export default function Home() {
    const resumeLink = `${process.env.PUBLIC_URL}/resume v6.pdf`

    return (
        <div>
            <h1 className="home-header">Home</h1>
            <div className="default-container">
                <p>Hello! I am Isidro Godoy, and I'm studying Computer Science & Engineering at UCLA. These are some of the projects I am most proud of: :{'>'}
                </p>
            </div>
            <BigInfoBox
                title="Cloudy Critters [WIP]"
                info1="A roguelike zoo tycoon that takes place in the clouds!"
                info2="I decided the art direction of the game, and led a small team of artists to create a variety of striking 2D and 3D assets that fit that direction! Planned to release Winter 2026."
                img={ccimg}
            />
            <BigInfoBox
                title= {<a href="https://destroh3.itch.io/broken-peaces">Broken Peaces</a>}
                info1="Created in one weekend for the UCLA Fiat Ludum Game Jam, this game won first place for its tight controls and level design, as well as its unique approach to music and narrative."
                info2="I was primarily in charge of creating 3D assets for this game, creating three unique player models, enemy models and animations, and various background props."
                img={bpimg}
            />
            <div className="resume-container">
                <p>Finally, please find my Resumé linked below. My contact information is also listed at the bottom of the website. Thank you for visiting!
                </p>
                <div className="resume-sub-container">
                    <iframe className="pdf" src={resumeLink}></iframe>
                </div>
            </div>

        </div>
    );
}