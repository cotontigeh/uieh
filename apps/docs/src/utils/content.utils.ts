import { getCollection, render } from "astro:content";
import type { DocsCollectionType } from "../../content.config";

export async function getContentBySlug(slug: string, collection: string) {
  const collectionDocs = (await getCollection(
    collection
  )) as unknown as DocsCollectionType[];

  const page = collectionDocs.find((doc) => doc.slug === slug);

  const { Content } = await render(page);

  return Content;
}
