import {defineField, defineType} from 'sanity'

export const menuLink = defineType({
  name: 'menu-link',
  title: 'Menu Link',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'slug',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
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
