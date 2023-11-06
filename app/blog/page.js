import { CATEGORIES, GET_ALL_BLOG_V2, GET_META_BLOG } from '@/graphql/blog/queries'
import getData from '@/utils/getData'
import { GET_DATA_HOME } from '@/graphql/home/queries'
import IndexBlog from '@/components/blog'
import { sizeBlog } from '@/utils'

export async function generateMetadata() {
  const data = await getData(GET_META_BLOG)
  if (!data) return
  const featuredImage = data?.data?.page?.featuredImage
  const blog = data?.data?.page?.blog
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
    title: blog?.meta?.title,
    description: blog?.meta?.description,
    applicationName: process.env.SITE_NAME,
    keywords: [
      'Cheers Tour',
      'Ha Giang Tour',
      'Ha Giang Loop',
      'Cheers',
      'Cheers Hostel Official Site',
      'Cheers Hostel',
    ],
    openGraph: {
      title: blog?.meta?.title,
      description: blog?.meta?.description,
      url: process.env.DOMAIN,
      siteName: process.env.SITE_NAME,
      images: [
        {
          url: featuredImage?.node?.sourceUrl || '/images/bg-header.jpg',
          alt: featuredImage?.node?.altText || featuredImage?.node?.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: blog?.meta?.title,
      description: blog?.meta?.description,
      creator: process.env.SITE_NAME,
      images: [
        {
          url: featuredImage?.node?.sourceUrl || '/images/bg-header.jpg',
          alt: featuredImage?.node?.altText || featuredImage?.node?.title,
        },
      ],
    },
  }
}

async function page({ params, searchParams }) {
  const categories = await getData(CATEGORIES)
  const data = await getData(GET_DATA_HOME)

  const offset = searchParams?.page ? (Number(searchParams?.page) - 1) * sizeBlog : 0
  const listSlugCategories = []
  if (searchParams?.category) {
    listSlugCategories.push(searchParams?.category)
  } else {
    categories?.data?.categories?.nodes?.map((e) => listSlugCategories.push(e?.slug))
  }

  const blogs = await getData(GET_ALL_BLOG_V2(offset, JSON.stringify(listSlugCategories)))

  return (
    <IndexBlog
      dataHome={data?.data?.page?.homeHG}
      allTourHG={data?.data?.allTourHG}
      categories={categories?.data?.categories?.nodes}
      blogs={blogs?.data?.posts}
    />
  )
}

export default page
