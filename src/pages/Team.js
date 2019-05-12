import React, { Component } from 'react';
import TeamOne from '../assets/team1.png';
import TeamTwo from '../assets/team2.jpg';
import TheLogo from '../assets/logo.svg';
export default class Team extends Component {
  render() {
    return (
      <div className="team-page">
        <section className="team-area pt-100 pb-100" id="team">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 mx-auto text-center">
                <div className="section-title">
                  <h4>The team</h4>
                  <p>Youth Social Activists</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="single-team">
                  <img src={TeamOne} alt="" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-team">
                  <img src={TheLogo} alt="" />
                  <div className="team-hover">
                    <h4>
                      We are <span>WeForHealth</span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-team">
                  <img src={TeamTwo} alt="" />
                </div>
              </div>
            </div>
            <div className="about-us">
              <h2>About Us </h2>
              <p>
                WeForHealth is a group of youth social activists who care more
                about the life of the people, we are fighting for the change in
                society, that’s why we brought to you a platform that acts as an
                intermediate between drug & alcohol addicts and
                counselor/therapist to connect in a confidential way. This
                platform also gives room for the testimonies of people who would
                like to share with the community how they were helped by
                therapist and encouraging others to do so.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
