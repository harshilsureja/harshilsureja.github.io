import { IData } from '../types';

const data: IData = {
  personalDetails: {
    name: 'Harshil Sureja',
    profile: 'Full-Stack Developer',
    about:
      'I am a full-stack web developer, with a primary interest in backend development. I have extensive experience working with ReactJS and NodeJS and am enthusiastic about embracing new technologies. I am eager to secure a position where I can fully leverage and expand upon my skill set.',
    profileImage: 'harshilsureja.jpg',
  },

  education: {
    colleges: [
      {
        name: 'Indus University, Ahmedabad',
        courseTag: 'MCA',
        course: 'Master of Computer Application',
        year: {
          start: 2020,
          end: 2022,
        },
      },
      {
        name: "St.Xavier's College(Autonomous), Ahmedabad",
        courseTag: 'BCA',
        course: 'Bachelor of Computer Application',
        year: {
          start: 2017,
          end: 2020,
        },
      },
    ],
  },

  workExperience: {
    jobs: [
      {
        name: 'AllianceTek',
        position: 'Full-Stack developer',
        description:
          'I specialized in backend development using Node.js, while handling frontend tasks with React, AngularJS, and Next.js.',
        duration: 'Running',
        year: {
          start: 2022,
          end: 0,
        },
      },
      {
        name: 'AllianceTek',
        position: 'Intern',
        description:
          'I successfully developed a material tracking tool project using React, Node.js, and MySQL.',
        duration: '6 Months',
        year: {
          start: 2022,
          end: 2022,
        },
      },
      {
        name: 'NG Forest',
        position: 'Freelancer',
        description:
          "I'm currently engaged in client projects while actively exploring and learning new technologies this year.",
        duration: 'Just learning',
        year: {
          start: 2020,
          end: 2022,
        },
      },
    ],
  },

  personalProjects: {
    tagLine: '{{codding}} is belong from Array.hobbies',
    projects: [
      {
        name: 'EnlightUp',
        stack: 'PERN Stack',
        description:
          'Our web app centralizes customer feedback, empowering businesses to gather valuable insights in one location, aiding in informed product decisions.',
        link: 'https://enlightup.io',
        year: 2024,
        status: 1,
      },
      {
        name: 'Mock Studio',
        stack: 'React Js',
        description:
          'Our web app has the capability to generate Safari-style mock screenshots using uploaded images.',
        link: 'https://mockstudio.vercel.app',
        year: 2023,
        status: 1,
      },
      {
        name: 'Tweet to image',
        stack: 'MERN Stack',
        description:
          'Our web app enables users to effortlessly create visually appealing tweet images, which can be easily shared across various social media platforms.',
        link: 'https://tweet-to-img.vercel.app',
        year: 2022,
        status: 1,
      },
      {
        name: 'Digital Store Web App',
        stack: 'MERN Stack',
        description:
          'This platform operates on a digital catalog model, empowering retailers to create personalized websites showcasing products categorized for easy navigation and display.',
        year: 2021,
        status: 0,
      },
      {
        name: 'Community Web App',
        stack: 'MEAN Stack',
        description:
          'This app functions as a private community platform, offering features akin to Slack, including channel-based messaging, member and family management capabilities, as well as journaling, a directory, and an array of additional features.',
        year: 2020,
        status: 1,
      },
      {
        name: 'Online Coaching Institute Management Web App',
        stack: 'MEAN Stack',
        description:
          'This app encompasses various functionalities, including attendance tracking, result management, timetable organization, fee administration, and numerous other features tailored for online classes.',
        year: 2019,
        status: 2,
      },
    ],
  },

  techSkill: {
    frontEnd: ['React', 'Next.js'],
    backEnd: ['Node.js', 'koa'],
    database: ['Postgres', 'MongoDB', 'MySQL'],
  },

  otherSkill: {
    cloud: ['AWS', 'GCP', 'Supabase', 'Firebase', 'CI/CD'],
  },

  languages: ['Gujarati', 'Hindi', 'English'],

  contactDetails: [
    {
      platform: 'Phone',
      text: '+91 9099682234',
      link: 'tel://919099682234',
    },
    {
      platform: 'Email',
      text: 'harshilsureja@gmail.com',
      link: 'mailto://harshilsureja@gmail.com',
    },
    {
      platform: 'LinkedIn',
      text: '@harshilsureja',
      link: 'https://www.linkedin.com/in/harshilsureja/',
    },
    {
      platform: 'WhatsApp',
      text: '+91 9099682234',
      link: 'https://wa.me/919099682234/',
    },
    {
      platform: 'Telegram',
      text: '@harshilsureja',
      link: 'https://t.me/harshilsureja',
    },
  ],
};

export { data };
