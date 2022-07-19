import React from 'react';
import Section from './Section';
import {
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3,
  FaWordpress,
  FaDatabase,
  FaLinux,
  FaCheck,
  FaTrophy,
} from 'react-icons/fa';

import { BiChevronsRight } from 'react-icons/bi';

import { TEXTS } from '../constants/Texts';
import { ICON_PATHS } from '../constants/IconPaths';
import SocialIcon from './SocialIcon';
import CsharpLogo from '../assets/csharp-logo.svg';
import { detailType } from '../components/ListDetailItem';
import ListItem from './ListItem';

function Main() {
  return (
    <div className="mt-16 md:w-3/4">
      <Section isMain={true} id="about">
        <a
          href="mailto:cagrisakaoglu@gmail.com"
          className="text-2xl underline uppercase text-slate-500 font-saira"
        >
          cagrisakaoglu@gmail.com
        </a>
        <p className="mt-16 text-gray-600">{TEXTS.profileSummary}</p>
        <div className="flex py-4 gap-7">
          <SocialIcon iconDrawPath={ICON_PATHS.LINKEDIN2}></SocialIcon>
          <SocialIcon iconDrawPath={ICON_PATHS.GITHUB}></SocialIcon>
          <SocialIcon iconDrawPath={ICON_PATHS.TWITTER}></SocialIcon>
          <SocialIcon iconDrawPath={ICON_PATHS.FACEBOOK}></SocialIcon>
        </div>
      </Section>
      <Section title="education" id="education">
        <h3 className="text-2xl font-saira font-bold">
          {TEXTS.education.university}
        </h3>
        <h3 className="font-saira text-2xl text-gray-600 font-semibold">
          {TEXTS.education.bachelor}
        </h3>
        <h5 className="text-gray-600">{TEXTS.education.major}</h5>
        <h5 className="text-gray-600">{TEXTS.education.gradDate}</h5>
      </Section>
      <Section title="skills" id="skills">
        <h3 className="font-saira text-2xl font-semibold text-gray-600">
          PROGRAMMING LANGUAGES & TOOLS
        </h3>
        <div className="mt-5 flex h-12 mb-5 w-max gap-2 overflow-hidden">
          <img src={CsharpLogo} alt="csharp-logo" className="opacity-80" />
          <FaJs className="opacity-60" size={'100%'}></FaJs>
          <FaPython className="opacity-60" size={'100%'}></FaPython>
          <FaCss3 className="opacity-60" size={'100%'}></FaCss3>
          <FaHtml5 className="opacity-60" size={'100%'}></FaHtml5>
          <FaWordpress className="opacity-60" size={'100%'}></FaWordpress>
          <FaDatabase className="opacity-60" size={'100%'}></FaDatabase>
          <FaLinux className="opacity-60" size={'100%'}></FaLinux>
        </div>
        <ListItem
          listIcon={<FaCheck />}
          detailType={detailType.plainText}
          text="Data Structures and Algorithms"
        />
        <ListItem
          listIcon={<FaCheck />}
          detailType={detailType.plainText}
          text="Design Patterns"
        />
      </Section>
      <Section title="projects" id="projects">
        <ListItem
          listIcon={<BiChevronsRight size={30} />}
          detailType={detailType.linked}
          title="Nöbetçi Eczane"
          text={TEXTS.projects.eczane.text}
          url={TEXTS.projects.eczane.url}
        />
        <ListItem
          listIcon={<BiChevronsRight size={30} />}
          detailType={detailType.linked}
          title="MovieDB"
          text={TEXTS.projects.movie.text}
          url={TEXTS.projects.movie.url}
        />
        <ListItem
          listIcon={<BiChevronsRight size={30} />}
          detailType={detailType.linked}
          title="ChatAPP"
          text={TEXTS.projects.chat.text}
          url={TEXTS.projects.chat.url}
        />
        <ListItem
          listIcon={<BiChevronsRight size={30} />}
          detailType={detailType.linked}
          title="drcanancaliskan.com"
          text={TEXTS.projects.canan.text}
          url={TEXTS.projects.canan.url}
        />
      </Section>
      <Section title="certifications" id="certificates">
        <ListItem
          listIcon={<FaTrophy className="fill-orange-500" />}
          detailType={detailType.detailed}
          title="Microsoft"
          text={TEXTS.certificates.aspnet}
        />
        <ListItem
          listIcon={<FaTrophy className="fill-orange-500" />}
          detailType={detailType.detailed}
          title="Microsoft"
          text={TEXTS.certificates.cssHtml}
        />
        <ListItem
          listIcon={<FaTrophy className="fill-orange-500" />}
          detailType={detailType.detailed}
          title="Bilge Adam"
          text={TEXTS.certificates.bilgeAdam}
        />
        <ListItem
          listIcon={<FaTrophy className="fill-orange-500" />}
          detailType={detailType.detailed}
          title="Udemy"
          text={TEXTS.certificates.flutter}
        />
      </Section>
    </div>
  );
}

export default Main;
