import React from "react";
import "./RegisterExercise.css";
import registerexercise from "../svg/studentexercise.png";

export default class Registerexercise extends React.Component{
    render(){
        return(
            <div>
                <div className="container-fluid Registerexercise__container">
                    <div className="row Registerexercise__row">
                        <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6 Registerexercise__svg-column1">
                            <div className="Registerexercise__svg">
                                <img src={registerexercise} alt="register-exercise" className="Registerexercise__image" />
                            </div>
                        </div>

                       <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6 Registerexercise__svg-column2">
                           <div className="Registerexercise__heading">
                               Exercise is a must!
                           </div>
                           <div className="Registerexercise__sub-heading">
                               Why exercise is necessary?
                            </div>
                            <div className="Registerexercise__benefits">
                                <p className="Registerexercise__benefit-name">1. Help you control your weight.</p>
                                <p className="Registerexercise__benefit-name">2. Reduce your risk of heart diseases.</p>
                                <p className="Registerexercise__benefit-name">3. Help your body manage blood sugar and insulin levels. </p>
                                <p className="Registerexercise__benefit-name">4. Help you quit smoking.</p>
                                <p className="Registerexercise__benefit-name">5. Strengthen your bones and muscles.</p>
                                <p className="Registerexercise__benefit-name">6. Increase your chances of living longer.</p>
                                <p className="Registerexercise__benefit-name">7. Improve your sleep.</p>
                                <p className="Registerexercise__benefit-name">8. Help keep your thinking, learning, and judgment skills sharp as you age.</p>
                            </div>
                           <form className="Registerexercise__Form-main">
                               <div className="form-row Registerexercise__Form">
                                   <div className="Registerexercise__property">Duration of Everyday Exercise:</div>
                                   <input type="tel" name="exercisetime" id="exercisetime" className="form-control Registerexercise__Time" title="*ENTER INTEGER VALUES ONLY" pattern="[0-9]" placeholder=" " required />
                               </div>
                                
                                <div className="row Registerexercise__Submit-row">
                        <button type="submit" className="btn Registerexercise__Submit-Button">Submit</button>
                        </div>
                           </form>
                           </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}
