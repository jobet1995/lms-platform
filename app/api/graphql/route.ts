import { createSchema, createYoga } from 'graphql-yoga';

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featuredImage?: string;
  author?: string;
  createdAt: string;
  updatedAt?: string;
  published: boolean;
}

const blogs: Blog[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js 14',
    slug: 'getting-started-nextjs-14',
    excerpt: 'Learn the basics of Next.js 14 and the App Router.',
    content: 'Next.js 14 introduces several new features including enhanced Server Components...',
    featuredImage: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec',
    author: 'Admin',
    createdAt: new Date().toISOString(),
    published: true,
  },
  {
    id: '2',
    title: 'GraphQL API with Yoga',
    slug: 'graphql-api-yoga',
    excerpt: 'A guide to building GraphQL APIs with Yoga and Next.js.',
    content: 'GraphQL Yoga is a fully-featured GraphQL Server that focus on setup ease...',
    featuredImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    author: 'Editor',
    createdAt: new Date().toISOString(),
    published: true,
  },
];

const typeDefs = `
  type Blog {
    id: ID!
    title: String!
    slug: String!
    excerpt: String
    content: String!
    featuredImage: String
    author: String
    createdAt: String!
    updatedAt: String
    published: Boolean!
  }

  type Query {
    blogs: [Blog!]!
    blog(slug: String!): Blog
    latestBlogs(limit: Int): [Blog!]!
  }
`;

const resolvers = {
  Query: {
    blogs: () => blogs,
    blog: (_: unknown, { slug }: { slug: string }) => blogs.find((b) => b.slug === slug),
    latestBlogs: (_: unknown, { limit }: { limit?: number }) => blogs.slice(0, limit || 5),
  },
};

const schema = createSchema({
  typeDefs,
  resolvers,
});

const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response },
});

export { handleRequest as GET, handleRequest as POST };
