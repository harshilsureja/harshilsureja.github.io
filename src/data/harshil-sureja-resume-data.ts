import { IData } from '../types';

const data: IData = {
  data: {
    personalDetails: {
      name: 'Harshil Sureja',
      profile: 'Full-Stack Developer',
      about:
        'I am a full-stack web developer. But I am more interested in backend. The technologies I have mainly used are ReactJS & NodeJS and ready to learn new technology as well. I wish to get a position where my skill is utilized as much as possible.',
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
            'I built the backend with Node js and Postgres of one tracking project.',
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
            'I built material tracking tool project with React, Node js and MySQL.',
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
            "Working on client's projects. I am just exploring and learning new technologies in this years.",
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
          name: 'Tweet to image',
          stack: 'MERN Stack',
          description:
            'Web app can create beautiful tweet image and you can share it on any other social media.',
          link: 'https://tweet-to-img.vercel.app',
          year: 2022,
          status: 1,
        },
        {
          name: 'Digital Store Web App',
          stack: 'MERN Stack',
          description:
            'Similar to digital catalog concept. Retails can create own website and display categories wise products.',
          year: 2021,
          status: 0,
        },
        {
          name: 'Community Web App',
          stack: 'MEAN Stack',
          description:
            'Private community app. Just like slack messages with channel functionality, members & family members management and journal, directory and loaded with many other features.',
          year: 2020,
          status: 1,
        },
        {
          name: 'Online Coaching Institute Management Web App',
          stack: 'MEAN Stack',
          description:
            'This app is all about managing attendance, result, timetable, fees management and many more features of online classes.',
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
  },
};

export default data;