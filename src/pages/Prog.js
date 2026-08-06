import './Prog.css'
import InfoBox from '../components/InfoBox';

import opengl_image from '../assets/temp.png'

import visualizer_image from '../assets/visgif.gif'
import Info from 'three/src/renderers/common/Info.js';
// guy who is a CS major but doesnt program : buhhhhh uhhhhhggthhhh thuhhhhhhhhhhhhhhhhhhh uuhhhhh
//programming projects :
// openGL renderer
// audio visualizer
// 


export default function Prog() {
    return (
        <div>
            <h1 className="prog-header">Programming Projects</h1>
            <div className = "default-container">
                <p> As a practitioner of Computer Science, I do have some programming projects not tied specifically to game development. Most of them focus on computer graphics and rendering.</p>
            </div>
            <InfoBox 
                title="Vulkan Renderer (2026)"
                info1="This shit lowkey pisses me the Fuck Off."
                img={opengl_image}
            ></InfoBox>
            <InfoBox 
                title={<a href="https://github.com/pacg0/openGL-test">OpenGL Renderer (2025) </a>}
                info1="Written in C++, I created a simple rendering engine using OpenGL, which incorporates a model loader, a Unity-like object hierarchy system, and a simple asset manager."
                info2={<p>Largely based on the <a href="https://learnopengl.com/">"Learn OpenGL" </a> Tutorial, by <a href="https://twitter.com/JoeyDeVriez">Joey De Vries</a>.
                    </p>}
                info3={<p><b>Tools used :</b> <br/> OpenGL <br/> GLSL <br/> C++</p>}
                img={opengl_image}
                right={true}
            ></InfoBox>
            <InfoBox 
                title={<a href="https://yeadamk.github.io/3d-audio-visualizer/">3D Audio Visualizer (2024)</a>}
                info1="Together with a team of 2 others, I created a simple app that accepts audio files or mic input and dynamically transforms the audio data into mesh and color transformations. "
                info2={<p><a href="https://github.com/yeadamk/3d-audio-visualizer">Github Repository</a></p>}
                info3={<p><b>Tools used :</b> <br/> 3.js <br/></p>}
                img={visualizer_image}
            ></InfoBox>        
        </div>
    );
}