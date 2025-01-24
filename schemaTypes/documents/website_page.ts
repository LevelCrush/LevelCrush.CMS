import {defineField, defineType} from 'sanity'

export const websitePage = defineType({
  name: 'website-page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'template',
      type: 'reference',
      to: [{type: 'template-sub'}],
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hero',
      type: 'image',
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
    }),
    defineField({
      name: 'parentPage',
      title: "Parent Page",
      type: 'reference',
      to: [{type: 'website-page'}],
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}, {type: 'youtube'}],
    }),
  ],
})
