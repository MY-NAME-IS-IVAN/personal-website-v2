import RobotPicture from '../../assets/emojis/robot.png';
import AlientPicture from '../../assets/emojis/alien.png';
import OctopusPicture from '../../assets/emojis/octopus.png';
import OwlPicture from '../../assets/emojis/owl.png';
import UnicornPicture from '../../assets/emojis/unicorn.png';
import PigPicture from '../../assets/emojis/pig.png';
import CoalaPicture from '../../assets/emojis/coala.png';
import CockPicture from '../../assets/emojis/cock.png';
import DinosaurPicture from '../../assets/emojis/dinosaur.png';
import DragonPicture from '../../assets/emojis/dragon.png';
import GhostPicture from '../../assets/emojis/ghost.png';
import MyMemojiPicture from '../../assets/emojis/me.png';
import PandaPicture from '../../assets/emojis/panda.png';
import SkullPicture from '../../assets/emojis/skull.png';

import { FaArrowsRotate } from 'react-icons/fa6';
import { useState } from 'react';

const Summary = () => {
  const [pictureIndexes, setPictureIndexes] = useState({
    currentIndex: 0,
    previousIndex: 0,
  });

  const picturesList = [
    UnicornPicture,
    RobotPicture,
    AlientPicture,
    OctopusPicture,
    OwlPicture,
    PigPicture,
    CoalaPicture,
    CockPicture,
    DinosaurPicture,
    DragonPicture,
    GhostPicture,
    MyMemojiPicture,
    PandaPicture,
    SkullPicture,
  ];

  const switchPicture = () => {
    let newPictureIndex = pictureIndexes.currentIndex;

    while (
      newPictureIndex == pictureIndexes.currentIndex ||
      newPictureIndex == pictureIndexes.previousIndex
    ) {
      newPictureIndex = Math.floor(Math.random() * picturesList.length);
    }

    setPictureIndexes({
      currentIndex: newPictureIndex,
      previousIndex: pictureIndexes.currentIndex,
    });
    console.log(pictureIndexes.currentIndex, newPictureIndex);
  };

  return (
    <div className='grid-block summary'>
      <div className='top-container'>
        <div className='emoji-container'>
          <img
            src={picturesList[pictureIndexes.currentIndex]}
            alt=''
            className='emoji-picture'
          />
        </div>
        <button className='default-button' onClick={switchPicture}>
          <FaArrowsRotate size={12} />
          <p>Switch</p>
        </button>
      </div>
      <div className='bottom-container'>
        <p>
          Hi, my name is{' '}
          <strong className='gradient-text-background description-name'>
            Ivan
          </strong>
          . I am a front-end developer skilled in <strong>React</strong>,{' '}
          <strong>TypeScript</strong>, and <strong>API integration</strong>.
          Developed and launched a highly rated{' '}
          <strong>application with 2000+ sales</strong> and{' '}
          <strong>secured a publishing deal for major platforms</strong>.
          Certified in <strong>IBM Full-Stack Software Development</strong> and
          currently pursuing <strong>Meta Front-End Development</strong>{' '}
          certification. These credentials demonstrate my strong foundation in
          modern web technologies and commitment to continuous learning.
        </p>
      </div>
    </div>
  );
};

export default Summary;
