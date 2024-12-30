// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// Define the schema for notes
const notesSchema = z.object({
  title: z.string(),
  description: z.optional(z.string()),
  date: z.date().default(new Date()),
  // tags: z.array(z.string()),
  // image: z.string().optional(),
});

// Define the collection
const notesCollection = defineCollection({
  type: 'content',
  schema: notesSchema,
});

// Export collections object
export const collections = {
  'notes': notesCollection, // This will handle all content under the notes directory
};