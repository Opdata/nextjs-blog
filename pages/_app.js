// 최상위 컴포넌트이며, global CSS 파일 로드는 App 에서 => 다른곳에서는 global css 파일을 못가져온다. => 전역 CSS가 다른곳에 다 영향을 주기때문
// App을 거쳐서 네비게이션시 상태를 유지시킬수있다.

import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
