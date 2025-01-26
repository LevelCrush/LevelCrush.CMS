import {defineField, defineType} from 'sanity'

export const websitePage = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tabName',
      title: "Tab Name",
      type: 'string',
      validation: (rule) => rule.required(),
    }),
      defineField({
      name: 'metaDescription',
      title: "Meta Description",
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'template',
      type: 'reference',
      to: [{type: 'template-sub'}],
    }),
    defineField({
      name: "route",
      type: "slug",
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
      name: 'body',
      type: 'array',
      of: [{type: 'block'}, {type: 'youtube'}],
    }),
  ],
})
