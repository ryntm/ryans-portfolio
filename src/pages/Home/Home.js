import React from 'react';
import Nav from '../../components/Nav/Nav';
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer';
import Photo from '../../components/Photo/Photo';


function Home() {
    return (
        <div>
            <Nav />
            <Main>
                <Photo />       
                {/* <h1>Hi, my name is Ryan!</h1> */}
                <p className="learn">Learn - Make - Repeat</p>

                <p>Hi my name is <span className="punc">Ryan</span>. I have been working in marketing and contract management for the past 12 years, but more recently, I've been leveling up my technical skills.</p>

                <p>I started by learning <span className="punc">SQL</span> in order to create my own reports in order to make data informed decisions with the contracts that I managed. </p>

                <p>After seeing how powerful and useful it was to learn a technical skill, I continued down that path by enrolling in the University of Washington's <span className="punc"> Full Stack Bootcamp</span>.
                </p>

                <p>As I began working on personal projects after the bootcamp, a real interest in the front end elements of website formed. There is something about seeing something being build piece by piece and something reacting to each line of code that you write that is very satisfying and rewarding.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque aut iusto pariatur non quos hic dolore praesentium, laborum facere voluptatem? Dolore deserunt aspernatur quos unde ullam nihil vel magni?</p>
            
            </Main>
            <Footer />
        </div>
    )
}

export default Home