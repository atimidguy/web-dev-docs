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
    repo: 'atimidguy/web-dev-docs',
    repoLabel: '查看源码',
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'atimidguy/web-dev-docs',
    // 假如文档不是放在仓库的根目录下：
    // docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '编辑文档！',
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
