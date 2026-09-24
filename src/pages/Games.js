import './Games.css'
import InfoBox from '../components/InfoBox'
import skyzooimg from '../assets/temp.png'

export default function Games() {

    return (
        <div>
            <h1 className="games-header">Game Projects</h1>
            <div className = "default-container">
                <p>Most of my games can be played on my <a href="https://pacg0.itch.io/">itch.io</a> page. Here is a selection of my very best games !</p>
            </div>

            <InfoBox 
                title="Cloudy Critters (2026)" 
                info1="[WIP] As art director, I created 3D and 2D assets for this game, while also steering the general art direction and managing a team of 5 artists of various skill levels." 
                info2={<div><b>Tools used :</b>
                       <br/>
                       Unity engine
                       <br/>
                       Blender</div>}       
                img={skyzooimg}
            />
        </div>
    );
}