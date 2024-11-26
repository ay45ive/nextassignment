import Link from "next/link";
import { db } from "./utils/db";



export default async function PostListPage({ searchParams }) {
  console.log("searchParams", searchParams);
  const response = await db.query (`SELECT * from places`);
  const places = response.rows;

  if (searchParams.sort === "desc") {
    posts.reverse();
  }
 console.log (places)
  return (
    <div>
      <h2>Posts list</h2>
      <Link href="/places?sort=asc">Sort ascending</Link> - <Link href="/place?sort=desc">
        Sort descending 
      </Link>
      <ul>
        {places.map((places) => (
          <li key={places.id}>
            <Link href={`/places/${places.id}`}>{places.city}</Link>
          </li>
        )
        )}
      </ul>
    </div>
  );
}