import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';

function Home() {
    const githubUrl = 'https://github.com/azurerr/YouTils'; // Replace 'your-username' with your actual GitHub username


    return (
        < div className="home-body" >
            <h3>YouTils: short for Your Utilities</h3>
            <div className="home-desc">
                YouTils is a versatile website offering <br />
                a comprehensive collection of helpful utilities <br />
                to assist you in various tasks.
                <br />
                I am continuously working to expand our features, <br />
                so stay tuned for more exciting tools to come.<br />
                Any suggestions are welcome!

            </div>
            <div className='home-git' >
                <span className='home-icon' ><GitHubIcon /></span>
                <span ><a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    GitHub
                </a></span>
            </div>
        </div >
    )
}

export default Home;