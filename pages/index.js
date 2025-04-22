import Head from 'next/head'
import dynamic from 'next/dynamic'

const BigFiveForm = dynamic(() => import('../components/BigFiveForm'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Big Five 성격검사</title>
        <meta name="description" content="당신의 성격을 5가지 요인으로 분석해보세요!" />
      </Head>
      <main className="p-4">
        <BigFiveForm />
      </main>
    </>
  )
}
