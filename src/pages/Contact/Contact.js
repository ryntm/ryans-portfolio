import React from 'react';
import Nav from '../../components/Nav/Nav';
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer';


function Home() {
    return (
        <div>
            <Nav />
            <Main>
                <div className="resume-area">
                    <span>My contact information can be found in my resume.</span>
                    <br />
                    <a href="https://github.com/ryntm/ryans-portfolio/raw/master/assets/Ryan-Tam_Resume.pdf">
                        <button className="button-primary resume-button">
                            RESUME
                        </button>
                    </a>
                </div>
            </Main>
            <Footer />
        </div>
    )
}

export default Home
