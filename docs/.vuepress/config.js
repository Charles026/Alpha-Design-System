module.exports = {
  title: 'Alpha Design System',
  description: 'Alpha 设计系统',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo: '/logo.png',
    search: false,
    sidebar: [
      '/',
      {
        title: '基础-foundation',
        children: [
          '/foundation/color.md',
          '/foundation/typography.md',
          '/foundation/icon.md',
          '/foundation/illustration.md',
          '/foundation/motion.md',
        ]
      },
      {
        title: '组件-components',
        children: [
          '/components/button.md',
        ]
      },
    ],
  }
}