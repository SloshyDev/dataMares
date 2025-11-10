import type { Schema, Struct } from '@strapi/strapi';

export interface DataContentDataContent extends Struct.ComponentSchema {
  collectionName: 'components_data_content_data_contents';
  info: {
    displayName: 'dataContent';
    icon: 'apps';
  };
  attributes: {
    data_contents: Schema.Attribute.Relation<
      'oneToMany',
      'api::data-content.data-content'
    >;
  };
}

export interface ImageWithLinkLatestNews extends Struct.ComponentSchema {
  collectionName: 'components_image_with_link_latest_news';
  info: {
    displayName: 'Latest News';
    icon: 'layout';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Link: Schema.Attribute.String;
    Title: Schema.Attribute.String;
    TypeOfLink: Schema.Attribute.Enumeration<
      ['dataContent', 'ExternalLink', 'Page', 'Story']
    > &
      Schema.Attribute.DefaultTo<'dataContent'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'data-content.data-content': DataContentDataContent;
      'image-with-link.latest-news': ImageWithLinkLatestNews;
    }
  }
}
