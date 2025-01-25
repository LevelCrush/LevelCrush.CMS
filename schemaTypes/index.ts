import {SchemaPluginOptions, Template} from 'sanity'
import {productSchema} from './documents/product'
import {postType} from './documents/postType'
import { youtube } from './youtubeType';
import { category } from './documents/category';
import { websitePage } from './documents/page';
import { templateSub } from './documents/template';

export const schemaTypes = [websitePage, category, postType, productSchema, templateSub, youtube];
export const templates = (templates: Template<string,string>[]) => templates.filter((template) => template.schemaType !== 'product');