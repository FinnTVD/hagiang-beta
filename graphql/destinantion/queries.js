import { gql } from '@apollo/client'

const DESTINATIONS = `
query {
  allDestination {
    nodes {
      name
      slug
    }
  }
}`

const GET_ALL_DESTINATION = gql`
    query GetAllDestination($offset: Int!, $size: Int!, $destinationSlug: [String!]) {
        allDestinations(
            where: {
                offsetPagination: { offset: $offset, size: $size }
                orderby: { field: DATE, order: DESC }
                taxQuery: { taxArray: [{ taxonomy: DESTINATION, operator: IN, terms: $destinationSlug, field: SLUG }] }
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

const GET_DESTINATION_DETAIL = `
query GetDestinationDetail($slug: ID!) {
  destinations(id: $slug, idType: URI) {
    title
    date
    content
    link
    destination{
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
const GET_META_DESTINATION = `
{
  page(id: "cG9zdDo0Mjg=") {
    destination {
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

const GET_OTHER_DESTINATIONS = `
{
allDestinations(
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

const GET_CONTENT_DESTINATIONS = `
{
  page(id: "cG9zdDo0Mjg="){
    destination{
      content{
        item{
          title
          distance
          description
          map
          picture{
            sourceUrl
          }
        }
      }
    }
  }
}
`

export { DESTINATIONS, GET_ALL_DESTINATION, GET_DESTINATION_DETAIL, GET_META_DESTINATION, GET_OTHER_DESTINATIONS, GET_CONTENT_DESTINATIONS }
