import { sizeBlog } from '@/utils'
import { gql } from '@apollo/client'

const CATEGORIES = `
query {
  categories {
    nodes {
      name
      slug
    }
  }
}`

const GET_ALL_BLOG = gql`
  query GetAllPost($offset: Int!, $size: Int!, $categorySlug: [String!]) {
    posts(
      where: {
        offsetPagination: { offset: $offset, size: $size }
        orderby: { field: DATE, order: DESC }
        taxQuery: { taxArray: [{ taxonomy: CATEGORY, operator: IN, terms: $categorySlug, field: SLUG }] }
      }
    ) {
      nodes {
        id
        excerpt
        title
        slug
        date
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
      pageInfo {
        offsetPagination {
          total
        }
      }
    }
  }
`
const GET_ALL_BLOG_V2 = (offset = 0, listSlug = []) => {
  return `
        {posts(
            where: {
                offsetPagination: { offset: ${offset}, size: ${sizeBlog} }
                orderby: { field: DATE, order: DESC }
                taxQuery: { taxArray: [{ taxonomy: CATEGORY, operator: IN, terms: ${listSlug}, field: SLUG }] }
            }
        ) {
            nodes {
                id
                excerpt
                title
                slug
                date
                featuredImage {
                    node {
                        altText
                        sourceUrl
                    }
                }
            }
            pageInfo {
                offsetPagination {
                    total
                }
            }
        }
    }
`
}

const GET_BLOG_DETAIL = `
query GetBlogDetail($slug: ID!) {
  post(id: $slug, idType: SLUG) {
    title
    date
    content
    categories{
      nodes{
        name
      }
    }
    featuredImage {
      node {
        altText
        sourceUrl
      }
    }
  }
}`

const GET_META_BLOG = `
{
  page(id: "cG9zdDo0MjQ=") {
    blog {
      meta {
        title
        description
      }
    }
    featuredImage {
      node {
        sourceUrl
        altText
        title
      }
    }
  }
}
`

const GET_OTHER_POST = `
{
  posts(
    first: 5
    where: {orderby: {field: DATE, order: DESC}}
  ) {
    nodes {
      slug
    title
    date
    featuredImage {
      node {
        title
        altText
        sourceUrl
      }
    }
      excerpt
    }
  }
}

`

export { CATEGORIES, GET_ALL_BLOG, GET_BLOG_DETAIL, GET_META_BLOG, GET_OTHER_POST, GET_ALL_BLOG_V2 }
