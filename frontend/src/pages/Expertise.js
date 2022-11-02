import React from 'react';
import frontend_icon from '../assets/frontend-icon.png';
import backend_icon from '../assets/backend-icon.png';
import Technologie from '../components/Technologie';
import ExpertiseBorder from '../components/ExpertiseBorder';

function Expertise() {
  return (
    <div className="row">
      <div className="col-s"></div>
      <div className="col">
        <div className="expertise">
          <h1 className="section-title">Expertise</h1>
          <div className="expertise-body">
            <ExpertiseBorder
              icon={backend_icon}
              title={'Backend Developer'}
              body={
                'Build scalable and maintainable server applications using modern technology stacks such as : '
              }
              technologie={[
                'Node.js',
                'Express',
                'MongoDB',
                'Laravel',
                'MySQL',
              ]}
            />
            <ExpertiseBorder
              icon={frontend_icon}
              title={'Frontend Developer '}
              body={
                'Build client-side applications with modern features and maintain semantic coding style among other best practices optimisation.'
              }
              inner_body={'Over 3 years of development experience with : '}
              technologie={['HTML', 'Css', 'Javascript', 'React']}
            />
          </div>
        </div>
      </div>
      <div className="col-s"></div>
    </div>
  );
}

export default Expertise;
