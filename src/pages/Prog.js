import './Prog.css'

import opengl_image from '../assets/temp.png'

import visualizer_image from '../assets/visgif.gif'
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
            <div className = "default-container">
                <div className = "default-sub-container">
                    <h2>Vulkan Renderer (2026)</h2>
                    <p>This shit lowkey pisses me the Fuck Off. </p>
                </div>
                <div className = "default-sub-container">
                    <img className = "default-image" src = {opengl_image}></img>
                </div>
            </div>
            <div className = "default-container">
                <div className = "default-sub-container">
                    <img className = "default-image" src = {opengl_image}></img>
                </div>
                <div className = "default-sub-container">
                    <h2><a href="https://github.com/pacg0/openGL-test">OpenGL Renderer (2025) </a></h2>
                    <p>Written in C++, I created a simple rendering engine using OpenGL, which incorporates a model loader, a Unity-like object hierarchy system, and a simple asset manager.
                        <br/> <br/>
                        Largely based on the <a href="https://learnopengl.com/">"Learn OpenGL" </a> Tutorial, by <a href="https://twitter.com/JoeyDeVriez">Joey De Vries</a>.
                    </p>
                    <p><b>Tools used :</b> <br/> OpenGL <br/> GLSL <br/> C++</p>
                </div>
                
            </div>
            <div className = "default-container">
                <div className = "default-sub-container">
                    <h2><a href="https://yeadamk.github.io/3d-audio-visualizer/">3D Audio Visualizer (2024)</a></h2>
                    <p>Together with a team of 2 others, I created a simple app that accepts audio files or mic input and dynamically transforms the audio data into mesh and color transformations. </p>
                    <p><b>Tools used :</b> <br/> 3.js <br/></p>
                    <p><a href="https://github.com/yeadamk/3d-audio-visualizer">Github Repository</a></p>
                </div>
                <div className = "default-sub-container">
                    <img className = "default-image" src = {visualizer_image}></img>
                </div>
            </div>
        
        </div>
    );
}