import {SchemaPluginOptions, Template} from 'sanity'
import {productSchema} from './documents/product'
import {postType} from './postType'
import { youtube } from './youtubeType';

export const schemaTypes = [postType, productSchema, youtube];
export const templates = (templates: Template<string,string>[]) => templates.filter((template) => template.schemaType !== 'product');