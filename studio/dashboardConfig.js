export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6240b3fcc49160799b1a4e35',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-g8ggvrni',
                  apiId: '0687ab27-4a45-4727-bf72-7aba6e1b5980'
                },
                {
                  buildHookId: '6240b3fc8add3f1831582a85',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-5y6u4tyr',
                  apiId: '81803b38-33d5-47a0-9b08-663f3021171e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jareddarkweb/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-5y6u4tyr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
