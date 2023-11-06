const GET_META_CONTACT = `{
    page(id:"cG9zdDo0NzQ="){
        title
        featuredImage{
            node{
                sourceUrl
                altText
                title
            }
        }
        contact{
            meta{
                metaTitle
                metaDescription
            }
        }
    }
}
`

const GET_DATA_CONTACT = `
{
  page(id:"cG9zdDo0NzQ="){
    contact{
      header{
        backgroundPc{
          sourceUrl
          altText
          title
        }
        backgroundMobile{
          sourceUrl
          altText
          title
        }
        title
      }
      section1{
        subtitle
        title
        heading
        map
      }
    }
  }
}
`

const GET_NAV_AND_FOOTER = `
{
  page(id: "cG9zdDoyMQ==") {
    homeHG {
      header{
				logo{
          sourceUrl
          title
          altText
        }
        phoneNumber
        facebook{
          url
        }
        youtube{
          url
        }
        vietnamCheersHostel{
          url
        }
      }
      footer{
        contactUs{
          peopleContact{
            numberPhone
            name
          }
          email
          address
          global
        }
      }
  }
  }
  allTourHG {
    nodes {
      title
      slug
      featuredImage {
        node {
          sourceUrl
          altText
          title
        }
      }
      tourHaGiangDetail {
        price {
          selfDriving
          localDriver
          pickUp{
          province
          listAddress{
            address
          }
        }
        droff{
          province
          listAddress{
            address
          }
        }
          longTimeTourDay
        }
        header {
          pickUpFrom
          groupSize
          transport
        }
      }
    }
  }
}`
export { GET_DATA_CONTACT, GET_META_CONTACT, GET_NAV_AND_FOOTER }
