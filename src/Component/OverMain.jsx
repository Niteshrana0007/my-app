
import React from "react";
import "../css/Overmain.css";
// import YouTubeIcon from '@material-ui/icons/YouTube';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
const Overmain = () => {
    return (
        <>
            <div className="firstRec">
            <div className="innerRec">

                <div className="topBox">

                    <div className="imgDiv">
                    {/* <div className="imgBox"> */}
                    <img className="img" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="xyz" />
                    {/* </div>  */}
                    

                        <div className="btn_grp"> 
                        <button type="button" class="btn btn-outline-secondary">Yoga</button>
                    <button type="button" class="btn btn-outline-secondary">Fitness</button><br />
                    <button type="button" class="btn btn-outline-secondary">wellness</button>
                        </div>
                    </div>

                    <div className="btn">
                    <button type="button" class="btn btn-primary">Book Trial</button><br />
                    <button type="button" class="btn btn-outline-secondary">Contact Me</button>
                    </div>

                </div>

                <div className="detail">
                <div>
                <h2 className="Name">Jhon Doe</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                </div>
                <div className="social_icon">
                        <h5>Icons</h5>
                </div>
                <hr />
                <div className="location">
                    <span><strong>Lives In</strong>&nbsp;&nbsp;</span> <span>Delhi</span><br />
                    <span><strong>Speaks</strong>&nbsp;&nbsp;</span> <span>English</span> <span>Hindi</span> <span>Punjabi</span>
                </div>

                <div className="videoDetail">
                    <div className="videoTxt"><h3>Check out my video about 30 min of Yoga<br /> for beginners.</h3>
                    <span> <strong>Contact Me :-</strong></span>
                    </div>

                    <div className="video">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                    </div>
                </div>

                <div className="subscribe">
                    <p>Subscribe to my profile and never miss update.</p>
                    <input className="input" type="text" placeholder="Enter Your Email"/>
                    <button type="button" class="btn btn-primary">Subscribe</button><br />
                </div>
                </div>

            </div>
            </div>
        </>
    )
}
export default Overmain;