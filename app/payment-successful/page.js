import dynamic from 'next/dynamic'

const PaymentSuccessFulPage = dynamic(() => import('@/components/payment-successful'), { ssr: false })
export default function PaymentSuccessFul({ searchParams }) {
  return <PaymentSuccessFulPage searchParams={searchParams} />
}
