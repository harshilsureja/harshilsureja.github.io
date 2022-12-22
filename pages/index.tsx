import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import About from '../src/components/About';
import { Box, Flex, Loader, LoadingOverlay, Image } from '@mantine/core';
import Hero from '../src/components/Hero';
import Education from '../src/components/Education';
import WorkExperience from '../src/components/WorkExperience';
import PersonalProjects from '../src/components/PersonalProjects';
import TechSkills from '../src/components/TechSkills';
import OtherSkills from '../src/components/OtherSkills';
import Languages from '../src/components/Languages';
import Quote from '../src/components/Quote';
import Contact from '../src/components/Contact';
import { fetchResume } from '../src/store/actions/resume.action';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

function Home() {
  const dispatch = useDispatch();
  const ResumeData = useSelector((state: any) => state.resumeReducer);
  const { loading, error, data } = ResumeData;

  useEffect(() => {
    dispatch(fetchResume());
  }, []);

  return (
    <>
      <Head>
        <title>Harshil Sureja - Resume </title>
        <meta name='description' content='Harshil Sureja - Resume' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* className={inter.className} */}
      <Flex
        justify={'center'}
        align={'center'}
        direction={'column'}
        gap={64}
        p={16}
      >
        {/* {loading && <Loader />} */}
        <LoadingOverlay visible={loading} overlayBlur={4} />
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

// const mapStateToProps = (state: any) => ({
//   resumeData: state.resumeData,
// });

// const mapDispatchToProps = (dispatch: any) => ({
//   fetchResume: () => dispatch(fetchResume()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;
