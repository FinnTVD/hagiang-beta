const GET_META_FAQ= `
{
  page(id: "cG9zdDo0NTI=") {
    faq{
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
export {GET_META_FAQ}