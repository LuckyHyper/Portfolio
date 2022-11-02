import React, { useState } from 'react';
import MediaLink from '../components/MediaLink';
import linkedin_icon from '../assets/linkedin-icon.png';
import linkedin_icon_g from '../assets/linkedin-icon-green.png';
import instagram_icon from '../assets/instagram-icon.png';
import instagram_icon_g from '../assets/instagram-icon-green.png';
import github_icon from '../assets/github-icon.png';
import github_icon_g from '../assets/github-icon-green.png';

function MainRightSection() {
  const [isHovering, setIsHovering] = useState({
    github: false,
    linkedin: false,
    instagram: false,
  });
  const handleMouseOver = (e) =>
    setIsHovering({ ...isHovering, [e.target.alt]: true });
  const handleMouseOut = (e) =>
    setIsHovering({ ...isHovering, [e.target.alt]: false });

  return (
    <div className="main-right-icons">
      {!isHovering.github ? (
        <MediaLink
          alt={'github'}
          src={github_icon}
          handleMouse={handleMouseOver}
          link={'https://github.com/LuckyHyper'}
        />
      ) : (
        <MediaLink
          alt={'github'}
          src={github_icon_g}
          link={'https://github.com/LuckyHyper'}
          handleMouse={handleMouseOut}
        />
      )}

      {!isHovering.linkedin ? (
        <MediaLink
          alt={'linkedin'}
          src={linkedin_icon}
          link={'https://www.linkedin.com/in/hechmi-benhadjali-743677208/'}
          handleMouse={handleMouseOver}
        />
      ) : (
        <MediaLink
          alt={'linkedin'}
          src={linkedin_icon_g}
          link={'https://www.linkedin.com/in/hechmi-benhadjali-743677208/'}
          handleMouse={handleMouseOut}
        />
      )}

      {!isHovering.instagram ? (
        <MediaLink
          alt={'instagram'}
          src={instagram_icon}
          link={'https://www.instagram.com/hechmi_benhadjali/'}
          handleMouse={handleMouseOver}
        />
      ) : (
        <MediaLink
          alt={'instagram'}
          src={instagram_icon_g}
          link={'https://www.instagram.com/hechmi_benhadjali/'}
          handleMouse={handleMouseOut}
        />
      )}
    </div>
  );
}

export default MainRightSection;
