export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
    },
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
    },
    {
      name: 'youtube',
      title: 'Youtube',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'array',
      of: [
        {
          title: 'link',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'url',
              title: 'Url',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'contato',
      title: 'Contato',
      type: 'array',
      of: [
        {
          title: 'Contato',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
