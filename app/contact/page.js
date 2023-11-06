import IndexContact from '@/components/contact'
import { GET_DATA_CONTACT, GET_META_CONTACT, GET_NAV_AND_FOOTER } from '@/graphql/contact/queries'
import { GET_DATA_HOME } from '@/graphql/home/queries'
import getData from '@/utils/getData'

export async function generateMetadata() {
  const data = await getData(GET_META_CONTACT)
  if (!data) return
  const contact = data?.data?.page?.contact
  const featuredImage = data?.data?.page?.featuredImage

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
    title: contact?.meta?.metaTitle,
    description: contact?.meta?.metaDescription,
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
      title: contact?.meta?.metaTitle,
      description: contact?.meta?.metaDescription,
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
      title: contact?.meta?.metaTitle,
      description: contact?.meta?.metaDescription,
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

export default async function page() {
  const data = await getData(GET_DATA_CONTACT)
  const dataFooter = await getData(GET_NAV_AND_FOOTER)
  const dataHome = await getData(GET_DATA_HOME)
  return (
    <IndexContact
      data={data?.data?.page?.contact}
      dataFooter={dataFooter}
      dataHome={dataHome}
    />
  )
}
