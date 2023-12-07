import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import About from '../src/components/About';
import { Flex } from '@mantine/core';
import Hero from '../src/components/Hero';
import Education from '../src/components/Education';
import WorkExperience from '../src/components/WorkExperience';
import PersonalProjects from '../src/components/PersonalProjects';
import TechSkills from '../src/components/TechSkills';
import OtherSkills from '../src/components/OtherSkills';
import Languages from '../src/components/Languages';
import Quote from '../src/components/Quote';
import Contact from '../src/components/Contact';
import { data } from '../src/data/harshil-sureja-resume-data';

function Home() {
  return (
    <>
      <Head>
        <title>Harshil Sureja - Resume</title>
        <meta name='description' content='Harshil Sureja - Resume' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Flex direction={'column'} gap={64} p={16}>
        {data && (
          <>
            <Hero personalDetails={data.personalDetails} />
            <About about={data.personalDetails.about} />
            <Education education={data.education} />
            <WorkExperience workExperience={data.workExperience} />
            <PersonalProjects personalProjects={data.personalProjects} />
            <TechSkills techSkills={data.techSkill} />
            <OtherSkills otherSkills={data.otherSkill} />
            <Languages languages={data.languages} />
            <Contact contactDetails={data.contactDetails} />
            <Quote />
          </>
        )}
      </Flex>
    </>
  );
}

export default Home;
