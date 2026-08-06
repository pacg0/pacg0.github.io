

const InfoBox = ({title,info1,info2,info3,img,right}) => {
    if(right){
        return (
            <div className = "default-container">
                    <div className = "default-sub-container">
                        <h2>{title}</h2>
                        <p>
                            {info1} 
                            <br/> <br/>
                            {info2}
                            <br/> <br/>
                            {info3}
                            </p>
                    </div>
                    <div className = "default-sub-container">
                        <img className = "default-image" src = {img}></img>
                    </div>
                </div>

        );
    }
    return (
                <div className = "default-container">
                        <div className = "default-sub-container">
                            <img className = "default-image" src = {img}></img>
                        </div>
                        <div className = "default-sub-container">
                            <h2>{title}</h2>
                            <p>
                                {info1} 
                                <br/> <br/>
                                {info2}
                                <br/> <br/>
                                {info3}
                                </p>
                        </div>
                        
                    </div>

            );
}

export default InfoBox;