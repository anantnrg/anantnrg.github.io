import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    date: z.string().transform((str) => new Date(str)),
    category: z.string(),
    author: z.string(),
  }),
});

export const collections = {
  blog,
};
