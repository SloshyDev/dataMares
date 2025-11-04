import type { Schema, Struct } from '@strapi/strapi';

export interface ImageWithLinkLatestNews extends Struct.ComponentSchema {
  collectionName: 'components_image_with_link_latest_news';
  info: {
    displayName: 'Latest News';
    icon: 'layout';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Link: Schema.Attribute.String;
    Title: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'image-with-link.latest-news': ImageWithLinkLatestNews;
    }
  }
}
