import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    published: z.date(),
  }),
});

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        order: z.number(),
        title: z.string(),
        links: z.array(z.object({
            text: z.string(),
            url: z.string().url()
        })),
    })
})

const galleries = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        published: z.date(),
        photos: z.array(z.object({
            description: z.string(),
            src: z.string(),
            width: z.number(),
            height: z.number(),
            alt: z.string()
        }))        
    })
})

export const collections = {
  'blog': blog,
  'projects': projects,
  'galleries': galleries
};