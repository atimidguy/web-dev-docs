// module.exports = [
//   [
//     // Provides support for clean urls in your VuePress site.
//     'vuepress-plugin-clean-urls',
//     {
//       normalSuffix: '',
//       indexSuffix: '/',
//       notFoundPath: '/404.html'
//     }
//   ]
// ];
module.exports = {
  '@vuepress/back-to-top': true, // back-to-top button on the botttom right corner
  '@vuepress/medium-zoom': true, // zoom image like medium.com
  '@vuepress/google-analytics': {
    ga: 'UA-156078436-1' // UA-00000000-0
  },
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容可用.",
      buttonText: "刷新"
    }
  }
};
