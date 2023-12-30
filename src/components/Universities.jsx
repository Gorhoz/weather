import '../styles/Universities.css'
import { CiLink } from "react-icons/ci";
import { GiGraduateCap } from "react-icons/gi";



function Universities(props) {
    if (props.country) {
      return (
        <div>
          <div className="university-country">
            Universities Of {props.country}
          </div>
          <div className="universities">
            {props.universities.map((university, index) => {
              return (
                <div className="university" key={index}>
                  <div className="university-container">
                    <div className="university-name">{university.name}</div>
                    <h1 className='grad-icon'><GiGraduateCap /></h1>
                    <div className="university-webpage">
                        <span className='link-icon'><CiLink /></span>
                      <a
                        href={university.web_pages}
                        target="blank"
                        className="link"
                      >
                        {university.web_pages}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    return null;
  }
  
  export default Universities;