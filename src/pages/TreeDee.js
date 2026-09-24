import './TreeDee.css'
import ModelViewport from '../components/ModelViewport';
import dogModelUrl from '../assets/mesh/dog.glb';

export default function TreeDee() {

    return (
        <div>
            <h1 className="trd-header">3D Art Projects</h1>
            <div className = "default-container">
                <p>I have been learning each step of the 3D art pipeline on the side while at University! <br/> I primarily use Blender, 3D Paint Textura, and Adobe Substance Painter.</p>
            </div>
            <div className="default-container">
                <ModelViewport
                    title="Dog"
                    modelUrl={dogModelUrl}
                />
                <div className="default-sub-container">
                    gabagool
                </div>
            </div>

        </div>
    );
}