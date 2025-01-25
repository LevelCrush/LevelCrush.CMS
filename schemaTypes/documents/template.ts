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
    defineField({
      name: 'metadata',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'key', type: 'string', title: 'Key', "validation" : (rule) => rule.required()  },
            {name: 'value', type: 'string', title: 'Value'},
          ],
        },
      ],
    }),
  ],
})
