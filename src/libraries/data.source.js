export const NavDataSource = {
  wrapper: { className: 'header home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header-logo',
    children: './assets/logo-with-title.png',
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
    children: './assets/logo.png',
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
    children: './assets/female-developer.svg',
  },
  textWrapper: { className: 'intro-text', md: 14, xs: 24 },
  title: { className: 'intro-title', children: "Let's build awesome technology together!" },
  content: {
    className: 'intro-content',
    children:
      "I am a Software Developer, especially in Front End Developer. I believe software is a great combination between artistry and engineering. Let's see how I can tell you about me first, feel free to check my resume website!",
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
        children: 'Here are technologies that I have ever use while developing application',
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
              './assets/javascript-logo.png',
          },
          textWrapper: { className: 'knowledge-text' },
          title: { className: 'knowledge-title', children: 'Javascript' },
          content: {
            className: 'knowledge-content',
            children:
              'Javascript',
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
              './assets/typescript-logo.png',
          },
          textWrapper: { className: 'knowledge-text' },
          title: { className: 'knowledge-title', children: 'Typescript' },
          content: {
            className: 'knowledge-content',
            children:
              'Typescript',
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
              './assets/react-logo.png',
          },
          textWrapper: { className: 'knowledge-text' },
          title: { className: 'knowledge-title', children: 'React JS' },
          content: {
            className: 'knowledge-content',
            children:
              'React JS',
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
              './assets/next-js-logo.svg',
          },
          textWrapper: { className: 'knowledge-text' },
          title: { className: 'knowledge-title', children: 'Next JS' },
          content: {
            className: 'knowledge-content',
            children:
              'Next JS',
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
              './assets/css-logo.png',
          },
          textWrapper: { className: 'knowledge-text' },
          title: { className: 'knowledge-title', children: 'CSS' },
          content: {
            className: 'knowledge-content',
            children:
              'CSS',
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
              './assets/less-logo.png',
          },
          textWrapper: { className: 'knowledge-text' },
          title: { className: 'knowledge-title', children: 'Less' },
          content: {
            className: 'knowledge-content',
            children:
              'Less',
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
              './assets/sass-logo.png',
          },
          textWrapper: { className: 'knowledge-text' },
          title: { className: 'knowledge-title', children: 'Saas' },
          content: {
            className: 'knowledge-content',
            children:
              'Saas',
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
              './assets/antd-logo.svg',
          },
          textWrapper: { className: 'knowledge-text' },
          title: { className: 'knowledge-title', children: 'Ant Design' },
          content: {
            className: 'knowledge-content',
            children:
              'Ant Design',
          },
        },
      },
    ],
  },
};
export const PortfolioDataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: '客户案例', className: 'title-h1' },
      {
        name: 'content',
        className: 'title-content',
        children: '在这里用一段话介绍服务的案例情况',
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
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
          wrapper: { className: 'content5-block-content' },
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
          wrapper: { className: 'content5-block-content' },
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
          wrapper: { className: 'content5-block-content' },
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
          wrapper: { className: 'content5-block-content' },
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
          wrapper: { className: 'content5-block-content' },
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
          wrapper: { className: 'content5-block-content' },
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
          wrapper: { className: 'content5-block-content' },
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
    className: 'home-page-wrapper content11-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      { name: 'title', children: '丰富的特色展台', className: 'title-h1' },
      {
        name: 'content',
        children:
          '特色展台包括 Ant Design 、AntV、AntG、Egg 等明星产品，更有产品专家',
        className: 'title-content',
      },
      {
        name: 'content2',
        children: '现场问诊，为你答疑解难',
        className: 'title-content',
      },
    ],
  },
  button: {
    className: '',
    children: { a: { className: 'button', href: '#', children: '立即报名' } },
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
    ],
  },
};
