import './Games.css'
import InfoBox from '../components/InfoBox'
import skyzooimg from '../assets/temp.png'
import bpimage from '../assets/bpimage.png'
import oceandemoimg from '../assets/temp.png'

export default function Games() {

    return (
        <div>
            <h1 className="games-header">Game Projects</h1>
            <div className = "default-container">
                <p>Most of my games can be played on my <a href="https://pacg0.itch.io/">itch.io</a> page. Here is a selection of my very best games !</p>
            </div>

            <InfoBox 
                title="Cloudy Critters (2026)" 
                info1="[WIP] As art director, I created 3D and 2D assets for this game, while also steering the general art direction and managing a team of 5 artists of various skill levels. I also made several contributions to the codebase, mostly involving the island's procedural generation system." 
                info2={<div><b>Tools used :</b>
                       <br/>
                       Unity engine
                       <br/>
                       Blender</div>}       
                img={skyzooimg}
            />
            <InfoBox 
                title="Broken Peaces (2026)" 
                info1="The first-place winner of the UCLA Fiat Ludum 2026 Game Jam, Broken Peaces tells the stories of three soldiers in a post-apocalyptic world." 
                info2={<div><b>Tools used :</b>
                       <br/>
                       Unreal Engine
                       <br/>
                       Blender</div>}    
                info3={<div>You can download and play it <a href="https://destroh3.itch.io/broken-peaces">here!</a></div>}   
                img={bpimage}
            />
            <InfoBox 
                title="Submarine of Doom and Destruction (2026)" 
                info1="Working with a team of 2 others, I created a simple game that features simulated fish predation behaviors, immersive submarine controls, and a fully-destructible underwater environment!" 
                info2={<div>I was involved in implementing the submarine controls, as well as modelling and texturing the submarine itself.<br/><br/><b>Tools used :</b>
                       <br/>
                       tinygraphics.js library
                       <br/>
                       Blender</div>}    
                info3={<div>You can play it <a href="https://pacg0.itch.io/submarine-of">Here!</a></div>}   
                img={oceandemoimg}
                right={true}
            />
            <div className='default-container'>
                <h2> Other Games </h2>        
            </div>
            <div className='compact-container'>
                <div className = 'compact-sub-container'>
                    <h3> Prime Weaver (2025)</h3>
                    <p>A 3D Action/Adventure game with dozens of unqiue spells and effects! Made in Unreal Engine.
                        <br/>
                        Play it <a href="https://destroh3.itch.io/prime-weaver">here!</a>
                    </p>
                </div>
                <div className = 'compact-sub-container'>
                    <h3> SlimeSara (2025)</h3>
                    <p>A simple 2D puzzle-platforming game. Created for UCLA's Fiat Ludum 2025 Game Jam.
                        <br/>
                        Play it <a href="https://destroh3.itch.io/slimesara">here!</a>
                    </p>
                </div>
            </div>           
        </div>
    );
}