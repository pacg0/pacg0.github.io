

const PageBanner = ({banner_image,page_title}) => {
    return (
        <div className="pgbanner" style={{backgroundImage: "../banner.jpg"}}>
            {page_title}            
        </div>

    );


}

export default PageBanner;