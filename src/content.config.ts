import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { blogSchema } from 'starlight-blog/schema'

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: (context) => {
        // 合并博客 schema 和自定义字段
        const baseSchema = blogSchema(context);
        return baseSchema.extend({
          thumbnail: z.string().optional(),
          featured: z.boolean().optional(),
          category: z.string().optional(),
          tags: z.union([z.string(), z.array(z.string())]).optional(),
          giscus: z.boolean().optional().default(false),
        });
      }
    })
  }),
};
