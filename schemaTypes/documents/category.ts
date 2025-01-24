import {defineField, defineType} from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'route',
      type: 'string',
      initialValue: 'auto',
      options: {
        list: [
          {
            title: 'Auto',
            value: 'auto',
          },
          {
            title: 'Root',
            value: 'root',
          },
          {
            title: 'Nested',
            value: 'nested',
          },
        ],
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'template',
      type: 'reference',
      to: [{type: 'template-sub'}],
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
    }),
    defineField({
      name: 'hero',
      type: 'image',
    }),
    defineField({
      name: 'shortBody',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}, {type: 'youtube'}],
    }),
  ],
})
