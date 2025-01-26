import {defineField, defineType} from 'sanity'

export const menu = defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'string',
    }),
    defineField({
      name: 'parent',
      title: 'Parent',
      type: 'reference',
      to: [{type: 'menu'}],
    }),
    defineField({
      name: 'order',
      title: 'order',
      type: 'number',
      initialValue: (v) => 0,
    }),
    defineField({
      name: 'loginOnly',
      title: 'Logged In Only',
      type: 'boolean',
    }),
    defineField({
      name: 'visible',
      title: 'Visible',
      type: 'boolean',
      initialValue: (v) => true,
    }),
  ],
})
