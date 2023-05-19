import { Link } from 'react-router-dom';
export function Home() {
  return (
    <Link
      to="/store"
      className="border bg-info text-dark p-2 rounded-pill w-50% text-decoration-none"
    >
      Go to store page to see products
    </Link>
  );
}
