import React from "react";
import './Home.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import ActionCard from './ActionCard';
import cardPomodoroImg from '../assets/images/card_pomodoro.jpg';
import cardLottoImg from '../assets/images/card_lotto.jpg';
import cardTimerImg from '../assets/images/card_timer.jpg';
import cardWordCounterImg from '../assets/images/card_wordcounter.jpg';


function Home() {
    const githubUrl = 'https://github.com/azurerr/YouTils'; // Replace 'your-username' with your actual GitHub username

    return (
        <>
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

        <div className="card-container">
            <ActionCard 
            link="/pomodoro"
            imgUrl={cardPomodoroImg} 
            alt="Pomodoro Clock Image" 
            title="Pomodoro Clock" 
            desc="A popular time management technique that breaks work into intervals" />
            <ActionCard 
            link="/lottery"
            imgUrl={cardLottoImg} 
            alt="Lottery Numbers Image" 
            title="Lottery Numbers" 
            desc="Reliable and customizable random numbers, ideal for lottery selections" />
            <ActionCard 
            link="/timer"
            imgUrl={cardTimerImg} 
            alt="Timer Image" 
            title="Timer" 
            desc="Effortlessly manage your frequently used timings with precision" />
            <ActionCard 
            link="/wordcounter"
            imgUrl={cardWordCounterImg} 
            alt="Word Counter Image" 
            title="Word Counter" 
            desc="Securely tallies the number of words and character" />
        </div>
        </>
    )
}

export default Home;