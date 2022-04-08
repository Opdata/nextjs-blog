import { useRouter } from 'next/router';

export default function post() {
  const router = useRouter();
  const id = router.query;
  console.log(id);
  return <h1>id post page.</h1>;
}
