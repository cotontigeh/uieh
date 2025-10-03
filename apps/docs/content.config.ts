import { defineCollection, z } from "astro:content";

export type UiCollectionType = {
  id: string;
  slug: string;
  data: {
    title: string;
    author: string;
    pubDate: Date;
    updatedDate?: Date;
  };
};

const ui = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = {
  ui,
};
