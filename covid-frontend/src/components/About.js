import React from 'react';
import './About.css';

function About(){
    return(
        <nav className="about">
            <div>
                <h1 className="title">ABOUT THE MODEL</h1>
                <p className="about_desc">
                    This is a tool to help understand COVID-19 transmission risk to students and teachers/professors 
                    due to transmission by microscopic airborne particles (i.e. aerosols) in classroom settings. 
                    This is not an infectious disease dynamics model, but rather a model that predicts airborne virion 
                    concentrations within a classroom, taking into account exhalation of virion-containing aerosols 
                    by infected individuals and the loss of these particles due to various processes. Probabilities of 
                    infection are calculated based on the virion dose inhaled (accounting for use of masks) by 
                    uninfected people in the classroom.
                    <br/><br/>
                    The risk calculations here are only for disease transmission by the airborne aerosol route, and do 
                    not account for transmission by droplets or from contaminated surfaces. The implicit assumption is 
                    that appropriate social distancing and hygiene protocols are strictly adhered to in the classroom. 
                    To the extent that this is not true, the risk of infection will be higher than predicted by these 
                    calculations. Users should also also bear in mind that the absolute estimates of predicted risk from 
                    this model are quite uncertain because of uncertainties in our knowledge of key parameters such as 
                    the exhalation rate of virion-containing aerosols by infected individuals and the percentage of 
                    infected individuals in the classroom. The model is nevertheless useful to explore the relative 
                    effects of control measures (e.g. more ventilation, fewer people, shorter duration, masks vs no 
                    masks) on COVID-19 transmission by aerosols in classrooms.
                </p>
            </div>
            <div>
                <h3 className="team_title">THE TEAM</h3>
                <p className="team_desc">
                    This probabilistic Monte Carlo framework was developed by <strong>Prasad Kasibhatla</strong>, as 
                    an offshoot of the COVID-19 risk estimator developed by Jose Jimenez.
                    <br/>
                    <p className="team_subtitle"><strong>FRONT END</strong><br/>Donghan Park, Helen Xiao, Kevin Yin, Jennifer Schultz, Ayush Garg</p>
                    <p className="team_subtitle"><strong>BACK END</strong><br/>Akash Mullick, Ameya Rao</p>
                    <p className="team_subtitle"><strong>MOBILE DEVELOPMENT</strong><br/>Jerry Hou, Isabel Garfinkel</p>
                </p>
            </div>
        </nav>
    )
}

export default About;