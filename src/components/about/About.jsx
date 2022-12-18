import "./about.css";
import {AiOutlineHtml5} from 'react-icons/ai'
import {IoLogoCss3, IoLogoJavascript, IoLogoSass} from 'react-icons/io'
import {SiTailwindcss, SiRedux, SiFirebase, SiReact} from 'react-icons/si'
import about from '../../img/about.jpg';

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={about}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I am a self-taught web developer with a background in subtitle translations for Netflix and in content writing for SEO agencies.
        </p>
        <p className="a-desc">
Now, I decided to take a step ahead and expand my skill set on web development starting with front-end technologies.
I definetly enjoy coming up with creative solutions to complex problems while creating UIs that are pleasing to the eye.
And that's why I begin my software engineering journey with front-end development.
        </p>
        <p className="a-foot">
        But there's more to come in the future for sure; so stay tuned!
        </p>
        <h3 className="a-award-title">Technologies I Use</h3>
        <div className="a-award">
          <div className="a-award-texts">
          <AiOutlineHtml5 fontSize={75} className='icon' />
            <h3 className="a-award-desc">
              HTML
            </h3>
          </div>
          <div className="a-award-texts">
          <IoLogoCss3 fontSize={75} className='icon' />
            <h3 className="a-award-desc">
              CSS
            </h3>
          </div>
          <div className="a-award-texts">
          <IoLogoJavascript fontSize={75} className='icon' />
            <h3 className="a-award-desc">
              Javascript
            </h3>
          </div>
          <div className="a-award-texts">
          <SiReact fontSize={75} className='icon' />
            <h3 className="a-award-desc">
              ReactJS
            </h3>
          </div>
          </div>
          <div className="a-award">
          <div className="a-award-texts">
          <SiRedux fontSize={75} className='icon' />
            <h3 className="a-award-desc">
              ReduxJS
            </h3>
          </div>
          <div className="a-award-texts">
          <IoLogoSass fontSize={75} className='icon' />
            <h3 className="a-award-desc">
              SASS
            </h3>
          </div>
          <div className="a-award-texts">
          <SiTailwindcss fontSize={75} className='icon' />
            <h3 className="a-award-desc">
              Tailwind
            </h3>
          </div>
          <div className="a-award-texts">
          <SiFirebase fontSize={75} className='icon' />
            <h3 className="a-award-desc">
              Firebase
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
