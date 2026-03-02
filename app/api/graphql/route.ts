import { createSchema, createYoga } from 'graphql-yoga';

import prisma from '@/lib/prisma';

const typeDefs = `
  type Author {
    id: ID!
    name: String!
    avatar: String
  }

  type Blog {
    id: ID!
    title: String!
    slug: String!
    excerpt: String
    content: String!
    category: String!
    readTime: String
    featuredImage: String
    author: String
    authorDetails: Author
    published: Boolean!
    createdAt: String!
    updatedAt: String
  }

  type Course {
    id: ID!
    title: String!
    description: String
    category: String
    instructor: String
    rating: Float
    students: Int
    duration: String
    image: String
    difficulty: String
    published: Boolean!
  }

  type Query {
    blogs: [Blog!]!
    blog(slug: String!): Blog
    latestBlogs(limit: Int): [Blog!]!
    courses: [Course!]!
    course(id: ID!): Course
  }
`;

const resolvers = {
  Query: {
    blogs: async () => {
      const dbBlogs = await prisma.blogPost.findMany({
        include: { author: true },
        orderBy: { createdAt: 'desc' },
      });
      return dbBlogs.map((b) => ({
        ...b,
        author: b.author.name,
        authorDetails: b.author,
        createdAt: b.createdAt.toISOString(),
        updatedAt: b.updatedAt?.toISOString(),
      }));
    },
    blog: async (_: unknown, { slug }: { slug: string }) => {
      const b = await prisma.blogPost.findUnique({
        where: { slug },
        include: { author: true },
      });
      if (!b) return null;
      return {
        ...b,
        author: b.author.name,
        authorDetails: b.author,
        createdAt: b.createdAt.toISOString(),
        updatedAt: b.updatedAt?.toISOString(),
      };
    },
    latestBlogs: async (_: unknown, { limit }: { limit?: number }) => {
      const dbBlogs = await prisma.blogPost.findMany({
        include: { author: true },
        take: limit || 5,
        orderBy: { createdAt: 'desc' },
      });
      return dbBlogs.map((b) => ({
        ...b,
        author: b.author.name,
        authorDetails: b.author,
        createdAt: b.createdAt.toISOString(),
        updatedAt: b.updatedAt?.toISOString(),
      }));
    },
    courses: async () => {
      return prisma.course.findMany({
        where: { published: true }
      });
    },
    course: async (_: unknown, { id }: { id: string }) => {
      return prisma.course.findUnique({
        where: { id }
      });
    },
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

export async function GET(request: Request) {
  return handleRequest(request, {});
}

export async function POST(request: Request) {
  return handleRequest(request, {});
}
