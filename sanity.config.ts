import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes, templates} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Level Crush',

  projectId: 'krm9o82b',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
    templates: templates
  },
})
