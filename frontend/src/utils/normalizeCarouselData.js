export function normalizeCarouselData(contents) {
  if (!Array.isArray(contents)) return [];

  return contents.flatMap((content) => {
    // Caso 1: ComponentDataContentDataContent (tiene data_contents array)
    if (content.data_contents && Array.isArray(content.data_contents)) {
      return content.data_contents.map((dataContent) => ({
        id: `datacontent-${dataContent.Slug}`,
        slug: dataContent.Slug,
        type: 'datacontent',
        image: dataContent.Banner,
        altText: dataContent.Title,
        isExternal: false,
      }));
    }

    // Caso 2: ComponentImageWithLinkLatestNews (tiene Image, Link, Title directamente)
    if (content.Image) {
      let linkProps = {};

      switch (content.TypeOfLink) {
        case 'dataContent':
          linkProps = {
            slug: content.Slug,
            type: 'datacontent',
            isExternal: false,
          };
          break;
        case 'Page':
          linkProps = {
            link: content.Link,
            isExternal: false,
          };
          break;
        case 'ExternalLink':
          linkProps = {
            link: content.Link,
            isExternal: true,
          };
          break;
        default:
          linkProps = {};
      }

      return {
        id: `image-${content.Title}`,
        image: content.Image,
        altText: content.Title,
        ...linkProps,
      };
    }

    return [];
  });
}
