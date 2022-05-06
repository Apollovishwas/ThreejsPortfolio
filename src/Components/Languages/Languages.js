import React from 'react';
import './Languages.css';
import 'animate.css';
import AnimatedSphere from "../AnimatedSphere/AnimatedSphere";

class Languages extends React.Component {

    render(){
    return (
        <div className='Languages'>
            <div className='content'>
            <div className='theWholeDivContainer'>
            <div className="random animate__animated animate__pulse animate__infinite	animate__delay-2s" id="a">Python</div>
    <div className="random extra animate__animated animate__pulse animate__infinite" id="a">Javascript</div>
    <div className="random animate__animated animate__pulse animate__infinite animate__delay-2s" id="a">Java</div>
    <div className="random animate__animated animate__pulse animate__infinite animate__delay-2s" id="a">Swift</div>
    <div className="random " id="a">HTML</div>
            </div>

            <div className='theWholeDivContainerTwo'>
            <div className="random extra animate__animated animate__pulse animate__infinite animate__delay-2s" id="a">Tensorflow</div>
    <div className="random animate__animated animate__pulse animate__infinite animate__delay-2s" id="a">numpy</div>
    <div className="random animate__animated animate__pulse animate__infinite animate__delay-2s" id="a">Java</div>
    <div className="random animate__animated animate__pulse animate__infinite animate__delay-2s" id="a">pandas</div>
    <div className="random animate__animated animate__pulse animate__infinite animate__delay-2s" id="a">Keras</div>
    <div className="random extra animate__animated animate__pulse animate__infinite animate__delay-2s" id="a">typescript</div>
    <div className="random animate__animated animate__pulse animate__infinite animate__delay-2s" id="a">opencv</div>
            </div>

            <div className='theWholeDivContainerThree'>
            <div className="random" id="a">C++</div>
    <div className="random animate__animated animate__pulse animate__infinite animate__delay-2s" id="a">Tableu</div>
    <div className="random animate__animated animate__pulse animate__infinite animate__delay-2s" id="a">Firebase</div>
    <div className="random animate__animated animate__pulse animate__infinite animate__delay-2s" id="a">MySQL</div>
    <div className="random animate__animated animate__pulse animate__infinite animate__delay-2s" id="a">NLP</div>
            </div>


            <h1 className='LanguageHeading'>Languages</h1>
            </div>
           
        </div>
    )


    }




}

export default Languages;