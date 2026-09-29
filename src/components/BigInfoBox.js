

const BigInfoBox = ({title,info1,info2,img}) => {
    return (
        <div className="big-container">
            <div className="big-sub-container">
                <h2>{title}</h2>
                <p>{info1}</p>
                <br/>
                <p>{info2}</p>
                <br/><br/>
                <img className="big-image" src={img}></img>
            </div>
        </div>

    );
}

export default BigInfoBox;