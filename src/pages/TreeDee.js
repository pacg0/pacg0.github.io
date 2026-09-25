import './TreeDee.css'
import { useState } from 'react';
import ModelViewport from '../components/ModelViewport';
import dogModelUrl from '../assets/mesh/dog.glb';
import poolUrl from '../assets/mesh/pool set.glb';
import baseUrl from '../assets/mesh/desmascene.glb';

export default function TreeDee() {
    const [model, setModel] = useState(dogModelUrl);
    return (
        <div>
            <h1 className="trd-header">3D Art Projects</h1>
            <div className = "default-container">
                <p>I have been learning each step of the 3D art pipeline on the side while at University! <br/> I primarily use Blender, 3D Paint Textura, and Adobe Substance Painter.</p>
            </div>
            <div className="default-container">
                <ModelViewport
                    title="Dog"
                    modelUrl={model}
                />
                <div className="default-sub-container">
                    projects
                    <div className="default-container" onClick={() => setModel(dogModelUrl)}>
                        big bottone
                    </div>
                    <div className="default-container" onClick={() => setModel(poolUrl)}>
                        goga bottone
                    </div>
                    <div className="default-container" onClick={() => setModel(baseUrl)}>
                        baba bottone
                    </div>
                </div>
            </div>

        </div>
    );
}