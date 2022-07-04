import gsap from 'gsap-trial'
import './index.scss'

const IntroAnimation = () => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
    tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
    tl.to(".introa", { y: "-100%", duration: 1 }, "-=1");
    tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
    
    return (
      <>
        <div className="introa">
            <div className="intro-text">
                <h1 className="hide">
                    <span className="text">Creating inovation</span>
                </h1>
                <h1 className="hide">
                    <span className="text">For Everyday</span>
                </h1>
                <h1 className="hide">
                    <span className="text">people.</span>
                </h1>
            </div>
        </div>
      </>
    )
  }
  
  export default IntroAnimation
  