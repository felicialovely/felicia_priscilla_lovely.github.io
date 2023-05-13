export const NavDataSource = {
  wrapper: { className: 'header home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header-logo',
    children: './assets/website-logo/logo-with-title.png',
    href: '/',
  },
  menu: {
    className: 'header-menu',
    children: [
      {
        name: 'home',
        className: 'header-item',
        children: {
          href: '/',
          children: [{ children: 'Home', name: 'text' }],
        },
      },
      {
        name: 'profile',
        className: 'header-item',
        children: {
          href: 'profile',
          children: [{ children: 'Profile', name: 'text' }],
        },
      },
      {
        name: 'contact',
        className: 'header-item',
        children: {
          href: 'contact',
          children: [{ children: 'Contact', name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header-mobile-menu' },
};
export const BannerDataSource = {
  wrapper: { className: 'banner lh2zqh8ajvq-editor_css' },
  textWrapper: { className: 'banner-text-wrapper' },
  title: {
    className: 'banner-title',
    children: './assets/website-logo/logo-white.png',
  },
  content: {
    className: 'banner-content',
    children: 'Felicia Lovely - Software Engineer',
  },
  button: { className: 'banner-button', children: 'View More' },
};
export const IntroDataSource = {
  wrapper: { className: 'home-page-wrapper intro-wrapper' },
  OverPack: { className: 'home-page intro', playScale: 0.3 },
  imgWrapper: { className: 'intro-img', md: 10, xs: 24 },
  img: {
    children: './assets/intro-image.jpg',
  },
  textWrapper: { className: 'intro-text', md: 14, xs: 24 },
  title: { className: 'intro-title', children: "Hello and welcome to my website!" },
  content: {
    className: 'intro-content',
    children:
      "My name is Felicia, and I'm a Front End Engineer based in Indonesia. I'm passionate about software engineering especially front end side, and I love using my skills and experience to build any application. On this website, you'll find more information about my background, experience, and interests, as well as examples of my work and projects. Whether you're here to learn more about me or to explore some of my work, I hope you find what you're looking for. If you'd like to get in touch, please don't hesitate to reach out using the contact form on this website or through my social media profiles. I'm always interested in meeting new people and discussing new opportunities. Thank you for visiting, and I hope you enjoy your time here!",
  },
};
export const KnowledgeDataSource = {
  wrapper: { className: 'home-page-wrapper knowledge-wrapper' },
  page: { className: 'home-page knowledge' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: 'Skills',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children:
          "I have developed a range of skills throughout my professional journey, and I'm excited to showcase some of my key competencies here. In the following section, you'll find a list of some of my core skills and competencies.",
      },
    ],
  },
  block: {
    className: 'knowledge-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'knowledge-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'knowledge-icon',
            children:
              './assets/knowledge-logo/javascript-logo.png',
          },
          textWrapper: { className: 'knowledge-text' },
          title: { className: 'knowledge-title', children: 'Javascript' },
          content: {
            className: 'knowledge-content',
            children:
              'Programming Language',
          },
        },
      },
      {
        name: 'block1',
        className: 'knowledge-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'knowledge-icon',
            children:
              './assets/knowledge-logo/typescript-logo.png',
          },
          textWrapper: { className: 'knowledge-text' },
          title: { className: 'knowledge-title', children: 'Typescript' },
          content: {
            className: 'knowledge-content',
            children:
              'Programming Language',
          },
        },
      },
      {
        name: 'block2',
        className: 'knowledge-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'knowledge-icon',
            children:
              './assets/knowledge-logo/react-logo.png',
          },
          textWrapper: { className: 'knowledge-text' },
          title: { className: 'knowledge-title', children: 'React JS' },
          content: {
            className: 'knowledge-content',
            children:
              'Front End Library',
          },
        },
      },
      {
        name: 'block3',
        className: 'knowledge-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'knowledge-icon',
            children:
              './assets/knowledge-logo/next-js-logo.svg',
          },
          textWrapper: { className: 'knowledge-text' },
          title: { className: 'knowledge-title', children: 'Next JS' },
          content: {
            className: 'knowledge-content',
            children:
              'Front End Framework',
          },
        },
      },
      {
        name: 'block4',
        className: 'knowledge-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'knowledge-icon',
            children:
              './assets/knowledge-logo/css-logo.png',
          },
          textWrapper: { className: 'knowledge-text' },
          title: { className: 'knowledge-title', children: 'CSS' },
          content: {
            className: 'knowledge-content',
            children:
              'Styling',
          },
        },
      },
      {
        name: 'block5',
        className: 'knowledge-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'knowledge-icon',
            children:
              './assets/knowledge-logo/less-logo.png',
          },
          textWrapper: { className: 'knowledge-text' },
          title: { className: 'knowledge-title', children: 'Less' },
          content: {
            className: 'knowledge-content',
            children:
              'Styling',
          },
        },
      },
      {
        name: 'block6',
        className: 'knowledge-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'knowledge-icon',
            children:
              './assets/knowledge-logo/sass-logo.png',
          },
          textWrapper: { className: 'knowledge-text' },
          title: { className: 'knowledge-title', children: 'Sass' },
          content: {
            className: 'knowledge-content',
            children:
              'Styling',
          },
        },
      },
      {
        name: 'block6',
        className: 'knowledge-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'knowledge-icon',
            children:
              './assets/knowledge-logo/antd-logo.svg',
          },
          textWrapper: { className: 'knowledge-text' },
          title: { className: 'knowledge-title', children: 'Ant Design' },
          content: {
            className: 'knowledge-content',
            children:
              'UI Library',
          },
        },
      },
      {
        name: 'block7',
        className: 'knowledge-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'knowledge-icon',
            children:
              './assets/knowledge-logo/figma-logo.png',
          },
          textWrapper: { className: 'knowledge-text' },
          title: { className: 'knowledge-title', children: 'Figma' },
          content: {
            className: 'knowledge-content',
            children:
              'Design and Prototyping Tool',
          },
        },
      },
    ],
  },
};
export const PortfolioDataSource = {
  wrapper: { className: 'home-page-wrapper portfolio-wrapper' },
  page: { className: 'home-page portfolio' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: 'Portfolio', className: 'title-h1' },
      {
        name: 'content',
        className: 'title-content',
        children: "In this section, you'll find a selection of some of my favorite projects, along with a brief description of each project and the skills and technologies I used to complete them. I hope you find these examples informative and inspiring, and I'm always excited to discuss new opportunities and projects.",
      },
    ],
  },
  block: {
    className: 'portfolio-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'portfolio-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'portfolio-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: 'Ant Motion' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'portfolio-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'portfolio-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: 'Ant Motion' },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'portfolio-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'portfolio-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: 'Ant Motion' },
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'portfolio-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'portfolio-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: 'Ant Motion' },
        },
      },
    ],
  },
};
export const ContactDataSource = {
  OverPack: {
    className: 'home-page-wrapper contact-me-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: 'Contact Me', className: 'title-h1' },
      {
        name: 'content',
        children:
          "I'm always open to new opportunities and connections",
        className: 'title-content',
      },
      {
        name: 'content2',
        children: "If you would like to get in touch, please don't hesitate to send me a message",
        className: 'title-content',
      },
    ],
  },
  button: {
    className: '',
    children: { a: { className: 'button', href: '/contact', children: 'Click Here for Sending Message to Me' } },
  },
};
export const FooterDataSource = {
  wrapper: { className: 'home-page-wrapper footer-wrapper' },
  OverPack: { className: 'home-page footer', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: [
      {
        name: 'copyright',
        children: "Felicia Lovely's Personal Website  | Copyright © 2023",
        className: 'copyright-text',
      },
    ],
  },
  links: {
    className: 'links',
    children: [
      {
        name: 'linkedin',
        href: 'https://www.linkedin.com/in/felicia-priscilla-lovely/',
        className: 'links-item',
        children: 'LinkedinOutlined',
      },
      {
        name: 'github',
        href: 'https://github.com/felicialovely',
        className: 'links-item',
        children: 'GithubOutlined',
      },
      {
        name: 'instagram',
        href: 'https://www.instagram.com/felicia_priscilla_lovely/',
        className: 'links-item',
        children: 'InstagramOutlined'
      },
      {
        name: 'email',
        href: 'mailto:feliciapriscillalovely.fpl@gmail.com',
        className: 'links-item',
        children: 'MailOutlined'
      },
    ],
  },
};

export const ProfileDataSource = {
  wrapper: { className: 'home-page-wrapper profile-wrapper' },
  OverPack: { playScale: 0.3, className: 'home-page profile' },
  BannerAnim: {
    className: 'banner-anim',
    children: [
      {
        name: 'elem0',
        className: 'profile-banner-user-elem',
        titleWrapper: {
          className: 'profile-content-wrapper',
          children: [
            {
              name: 'image',
              children:
                './assets/profile-picture.jpeg',
              className: 'profile-image',
            },
            {
              name: 'content',
              children:
                'As a front-end engineer with expertise in developing responsive and user-friendly interfaces, I aim to create innovative and engaging web experiences that leave a lasting impression on users',
              className: 'profile-content',
            },
            { name: 'title', children: 'Felicia Priscilla Lovely', className: 'profile-h1' },
            {
              name: 'content2',
              children: 'Front End Software Engineer',
              className: 'profile-content',
            },
          ],
        },
      },
    ],
  },
};

export const WorkingExperienceDataSource = {
  wrapper: { className: 'home-page-wrapper working-experience-wrapper' },
  page: { className: 'home-page working-experience' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: 'Working Experience', className: 'title-h1' },
    ],
  },
  block: {
    className: 'timeline',
    children: [
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              './assets/working-experience-logo/logo-shopee.png',
          },
          name: { className: 'block-name', children: 'Front End Engineer' },
          post: { className: 'block-post', children: 'Shopee Indonesia' },
          time: { className: 'block-time', children: '' },
          title: { className: 'block-title', children: 'April 2022 - Present' },
          content: { className: 'block-content', children: 'Building Front End of applications using React JS and Next JS with Typescript, while the design is styled using Saas and Ant Design Library.' },
        },
      },
      {
        name: 'block1',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              './assets/working-experience-logo/logo-nexsoft.jpg',
          },
          name: { className: 'block-name', children: 'Front End Developer' },
          post: { className: 'block-post', children: 'PT. Paramadaksa Teknologi Nusantara / Nexsoft' },
          time: { className: 'block-time', children: '' },
          title: { className: 'block-title', children: 'May 2021 -  March 2022' },
          content: { className: 'block-content', children: 'Building Front End of applications that implements Single Page Application (SPA), using React JS, while the design is styled using CSS and Ant Design Library.' },
        },
      },
      {
        name: 'block2',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              './assets/working-experience-logo/logo-nexsoft.jpg',
          },
          name: { className: 'block-name', children: 'Back End Developer' },
          post: { className: 'block-post', children: 'PT. Paramadaksa Teknologi Nusantara / Nexsoft' },
          time: { className: 'block-time', children: '' },
          title: { className: 'block-title', children: 'Jan 2021 - May 2021' },
          content: { className: 'block-content', children: 'Building and developing API using Go Programming Language' },
        },
      },
      {
        name: 'block3',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              './assets/working-experience-logo/logo-nexsoft.jpg',
          },
          name: { className: 'block-name', children: 'Full Stack Developer' },
          post: { className: 'block-post', children: 'PT. Paramadaksa Teknologi Nusantara / Nexsoft' },
          time: { className: 'block-time', children: '' },
          title: { className: 'block-title', children: 'May 2020 - Dec 2020' },
          content: { className: 'block-content', children: 'Developing web application using Java and Java Server Page (JSP)' },
        },
      },
      {
        name: 'block4',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              './assets/working-experience-logo/logo-winning-soft.jpg',
          },
          name: { className: 'block-name', children: 'Full Stack Developer Intern' },
          post: { className: 'block-post', children: 'PT. Datacaraka Solusindo' },
          time: { className: 'block-time', children: '' },
          title: { className: 'block-title', children: 'Jun 2019 - Sep 2019' },
          content: { className: 'block-content', children: 'Building web application using PHP and Javascript' },
        },
      },
    ],
  },
};