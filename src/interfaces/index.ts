export enum FilterOperator {
  EQUALS = 'EQUALS',
  LT = 'LT',
  GT = 'GT',
  LTE = 'LTE',
  GTE = 'GTE',
  CONTAINS = 'CONTAINS',
  OR = 'OR',
  AND = 'AND',
}

export interface SearchFilter {
  operator?: FilterOperator;
  attribute_id?: string;
  conditions?: SearchFilter[];
  tag_ids?: string[];
  entity_ids?: string[];
  entity_incr_ids?: string[];
  text_value?: string | string[];
  number_value?: number;
  boolean_value?: boolean;
  locale_id?: string;
  reference_value?: string;
  file_value?: string;
}

export interface FeedSearchOptions {
  filters?: SearchFilter[];
  search?: string;
  searchable_attributes?: string[];
  locale_id?: string;
  size: number;
  page: number;
}

export interface FeedResponse {
  hits: {[key: string]: any}[]
  attributes?: Attribute[]
  attribute_groups?: AttributeGroup[]
  tags?: Tag[]
  custom_types?: CustomType[]
}

export interface FeedEntityResponse {
  entity: {[key: string]: any}
  attributes?: Attribute[]
  attribute_groups?: AttributeGroup[]
  tags?: Tag[]
  custom_types?: CustomType[]
}

export interface CustomType {
  id: string;
  name: string;
  created_at: string;
  default_label_attribute_id?: string;
  default_image_attribute_id?: string;
  default_image_id?: string;
}

export interface EnhancedTag extends Tag {
  tag_group_name?: string;
  tag_group_color?: string;
}

export interface Tag {
  id: string;
  custom_type_id: string;
  name: string;
  tag_group_id?: string;
}

export interface AttributeGroup {
  id: string;
  name?: string;
  custom_type_id: string;
  position?: number;
}

export enum TextAttributeEditor {
  COMBOBOX = 'COMBOBOX',
  HTML = 'HTML',
  MARKDOWN = 'MARKDOWN',
  SIMPLE = 'SIMPLE',
  TIPTAP = 'TIPTAP'
}

export interface AttributeTypeRelatedAttribute {
  default_unit?: string;
  measure_type?: string;
  is_measure?: boolean;
  editor?: TextAttributeEditor;
}

export interface Attribute extends AttributeTypeRelatedAttribute {
  id: string;
  name: string;
  type: AttributeType;
  custom_type_id: string;
  attribute_group_id?: string;
  position?: number;
  is_list: number;
  custom_key?: string;
}

export enum AttributeType {
  TEXT = 'TEXT',
  TRANSLATED_TEXT = 'TRANSLATED_TEXT',
  NUMBER = 'NUMBER',
  BOOLEAN = 'BOOLEAN',
  REFERENCE = 'REFERENCE',
  FILE = 'FILE',
}
