import React from 'react';
import Style from '../about/';
import Window from './Window';
import { Box } from '@mui/material';
import { info } from '../../info/Info';

export default function About() {
  const firstName = info.firstName.toLowerCase();

  function createAboutMeText() {
    return (
      <>
        <p>
          <span></span>About {firstName}
        </p>
        <p>{info.bio}</p>
      </>
    );
  }

  function createSkillsText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}></span>skills/tools
        </p>
        <p>Proficient With:</p>
        <ul className={Style.skills}>
          {info.skills.proficientWith.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
        <p>Exposed To:</p>
        <ul className={Style.skills}>
          {info.skills.exposedTo.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </>
    );
  }

  function createMiscText() {
    return (
      <>
        <p>hobbies/interests:</p>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              <Box component="span" mr="1rem">
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt="3rem">
      <Window text={createAboutMeText()} />
      <Window text={createSkillsText()} />
      <Window text={createMiscText()} />
    </Box>
  );
}
