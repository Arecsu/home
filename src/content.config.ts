// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// Define the schema for reflections
const reflectionsSchema = z.object({
  title: z.string(),
  description: z.optional(z.string()),
  date: z.date().default(new Date()),
  // tags: z.array(z.string()),
  // image: z.string().optional(),
});

// Define the collection
const reflectionsCollection = defineCollection({
  type: 'content',
  schema: reflectionsSchema,
});

// Export collections object
export const collections = {
  'reflections': reflectionsCollection, // This will handle all content under the reflections directory
};