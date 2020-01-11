const head = require('./config/headConf');
const nav = require('./config/navbarConf');
const searchConf = require('./config/searchConf');
const plugins = require('./config/pluginsConf');
// const sidebar = require('./config/sidebarConf')

module.exports = {
  host: 'localhost',
  port: 8888,
  title: 'I am a lazy guy',
  description: 'A front end blog',
  themeConfig: {
    logo: '/assets/img/snow.jpg',
    head,
    nav,
    sidebar: 'auto',
    ...searchConf,
    lastUpdated: 'Last Updated',
    smoothScroll: true // 点击左侧链接时平滑滚动
  },
  plugins
};
