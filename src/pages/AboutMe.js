import './AboutMe.css'
import profile from '../assets/profile_image.jpg'

export default function AboutMe() {

    return (
        <div className="abt-me-page">
            <h1 className="abt-me-header">About Me</h1>
            <div className="abt-me-container">
                <p className="abt-me-blurb" >
                    Hello! My name is Isidro (Paco) Godoy. 
                    I've been playing games for almost as long as I can remember.. 
                    I believe that beyond being a fun way to pass time, video games are a unique way to tell stories, and when done effectively, can be as thought-provoking as any other artistic medium! 
                    I've dedicated my life to learning the art of developing video games so that I can inspire others with stories of my own ...
                    <br/> <br/>
                    To this end, I am currently pursuing a Computer Science & Engineering degree at the University of California - Los Angeles. 
                    During my time here, I've met many like-minded people with the same passion that I have, most notably through the student organization <b>ACM Studio</b>. 
                    Through my involvement with Studio, I have been able to participate in numerous game jams, workshops, and other activities, which have developed a mild interest into a burning passion!! 
                    I've even risen to the rank of Workshop Chair, which gives me the opportunity to host educational workshops for other interested students, and develop my interpersonal skills.
                    My game projects can be viewed on this website and on my <a href="https://pacg0.itch.io/"> itch.io</a> page.
                    <br/><br/>
                    Although I am a Computer Science student, I also enjoy the artistic aspect of game development. 
                    In fact, I'd say that the part of game development that interests me most as a profession is its role as an intersection of art and technology..  
                    as part of this interest, I've contributed my artistic "talents" to many game projects, primarily through the creation of 3D assets.
                    The ones I'm most proud of can be viewed by visiting the <a href="/3d-projects">3D Projects</a> page on this website.
                    <br/><br/>
                    Outside of game development activities, I also dabble in graphics programming!
                    I've experimented with the OpenGL, WebGL, and Vulkan libraries, using them to implement object loading, hierarchical object trees, terrain, etc.
                    Screenshots of (and more details about) these experiments can be viewed by visiting the <a href="/programming-projects">Programming Projects</a> page on this website.
                    Obviously, I've also done some web development, which mostly comprises of this website and some other abandoned sites :P
                    <br/><br/>
                    In any case, thank you for visiting ! o7

                </p>
                <img src={profile} className="pr-img" alt="The image of me is not loading. please pretend for now."/>
            </div>
        </div>
    );
}