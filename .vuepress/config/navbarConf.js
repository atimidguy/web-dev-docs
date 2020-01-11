module.exports = [
  { text: 'Home', link: '/' },
  {
    text: '前端',
    items: [
      { text: 'HTML/CSS', link: '/frontend/html-css/' },
      { text: 'Javascript', link: '/frontend/js/' },
      { text: 'TypeScript', link: '/frontend/ts/' },
      {
        text: '框架',
        items: [
          { text: 'Vue', link: '/frameworks/vue/' },
          { text: 'React', link: '/frameworks/react/' }
        ]
      }
    ]
  },
  {
    text: '后端',

    items: [
      { text: 'Node.js', link: '/nodejs/' },
      {
        text: '框架',
        items: [
          { text: 'Express', link: '/frameworks/express/' },
          { text: 'NestJS', link: '/frameworks/nestjs/' }
        ]
      }
    ]
  },
  {
    text: 'Demos',
    items: [
      {
        text: 'Snippets',
        items: [
          { text: 'CSS demos', link: '/demos/css-demos/' },
          { text: 'JavaScript demos', link: '/demos/javascript-demos/' }
        ]
      }
    ]
  },
  { text: 'Github', link: 'https://github.com/atimidguy' }
];
