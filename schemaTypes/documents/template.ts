import {defineField, defineType} from 'sanity'

export const templateSub = defineType({
  name: 'template-sub',
  title: 'Sub Template',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
    }),
  ],
})
