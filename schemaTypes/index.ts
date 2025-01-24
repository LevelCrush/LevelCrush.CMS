import {SchemaPluginOptions, Template} from 'sanity'
import {productSchema} from './documents/product'
import {postType} from './postType'

export const schemaTypes = [postType, productSchema];
export const templates = (templates: Template<string,string>[]) => templates.filter((template) => template.schemaType !== 'product');