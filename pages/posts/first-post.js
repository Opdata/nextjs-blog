import Head from 'next/head';
import Script from 'next/script'; // Loading Third-party Script
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload" // 스크립트 로드 타이밍 컨트롤, 'lazyOnload' 브라우저 유휴시간동안 느리게 로드되게 설정
        onLoad={() => {
          console.log(`script loaded correctly, window.FB has been populated`);
          console.log('window.FB', window.FB);
        }}
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
