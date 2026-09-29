import './TreeDee.css'
import { useState } from 'react';
import ModelViewport from '../components/ModelViewport';
import dogModelUrl from '../assets/mesh/dog.glb';
import poolUrl from '../assets/mesh/pool set.glb';
import baseUrl from '../assets/mesh/desmascene.glb';

export default function TreeDee() {
    const dogDesc = "This is a simple dog model I made for Broken Peaces. It also has a simple run and walk animation."
    const tableDesc = "A pool set.. Made for one of my classes."
    const baseDesc = "A secret base! Made for another small-scale game. My first time experimenting with cloth simulation on a real project."
    const [model, setModel] = useState(dogModelUrl);
    const [desc, setDesc] = useState(dogDesc);
    return (
        <div>
            <h1 className="trd-header">3D Art Projects</h1>
            <div className = "default-container">
                <p>In addition to my various coding projects, I also do some 3D modelling on the side.<br/> I primarily use Blender, 3D Paint Textura, and Adobe Substance Painter.<br/><br/>
                Please use the mouse buttons to rotate, pan and otherwise inspect the models in the embedded model viewer.</p>
            </div>
            <div className="default-container">
                <div>
                <ModelViewport
                    title="Dog"
                    modelUrl={model}
                />
                <div className="default-sub-container">
                    {desc}
                </div>
                </div>
                <div className="default-sub-container">
                    Simple Projects
                    <div className="selection-button" onClick={() => {setModel(dogModelUrl); setDesc(dogDesc)}}>
                        Dog
                    </div>
                    <div className="selection-button" onClick={() => {setModel(poolUrl); setDesc(tableDesc)}}>
                        Pool Set
                    </div>
                    <div className="selection-button" onClick={() => {setModel(baseUrl); setDesc(baseDesc)}}>
                        Secret Base
                    </div>
                </div>
            </div>

        </div>
    );
}