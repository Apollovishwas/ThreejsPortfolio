import React from 'react';
import './Languages.css';
import 'animate.css';
import AnimatedSphere from "../AnimatedSphere/AnimatedSphere";

class Languages extends React.Component {

    render(){
    return (
        <div className='Languages'>
            <div className='content'>
            <div className='theWholeDivContainer thelangdiv'>
            <div className="random animate__animated animate__pulse animate__infinite	animate__delay-2s" id="a"><p className='langP'>Python</p></div>
    <div className="random extra animate__animated animate__pulse animate__infinite" id="a"><p className='langP'>Javascript</p></div>
    <div className="random animate__animated animate__pulse animate__infinite animate__delay-2s" id="a"><p className='langP'>Java</p></div>
    <div className="random animate__animated animate__pulse animate__infinite animate__delay-2s" id="a"><p className='langP'>Swift</p></div>
    <div className="random " id="a"><p className='langP'>HTML</p></div>
            </div>

            <div className='theWholeDivContainerTwo thelangdiv'>
            <div className="random extra animate__animated animate__pulse animate__infinite animate__delay-2s" id="a"><p className='langP'>Tensorflow</p></div>
    <div className="random animate__animated animate__pulse animate__infinite animate__delay-2s" id="a"><p className='langP'>numpy</p></div>
    <div className="random animate__animated animate__pulse animate__infinite animate__delay-2s" id="a"><p className='langP'>Java</p></div>
    <div className="random animate__animated animate__pulse animate__infinite animate__delay-2s" id="a"><p className='langP'>pandas</p></div>
    <div className="random animate__animated animate__pulse animate__infinite animate__delay-2s" id="a"><p className='langP'>Keras</p></div>
    <div className="random extra animate__animated animate__pulse animate__infinite animate__delay-2s" id="a"><p className='langP'>typescript</p></div>
    <div className="random animate__animated animate__pulse animate__infinite animate__delay-2s" id="a"><p className='langP'>opencv</p></div>
            </div>

            <div className='theWholeDivContainerThree thelangdiv'>
            <div className="random" id="a"><p className='langP'>C++</p></div>
    <div className="random animate__animated animate__pulse animate__infinite animate__delay-2s" id="a"><p className='langP'>Tableu</p></div>
    <div className="random animate__animated animate__pulse animate__infinite animate__delay-2s" id="a"><p className='langP'>Firebase</p></div>
    <div className="random animate__animated animate__pulse animate__infinite animate__delay-2s" id="a"><p className='langP'>MySQL</p></div>
    <div className="random animate__animated animate__pulse animate__infinite animate__delay-2s" id="a"><p className='langP'>NLP</p></div>
            </div>


            <h1 className='LanguageHeading'>Languages</h1>
            </div>
           
        </div>
    )


    }




}

export default Languages;