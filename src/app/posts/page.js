import Link from "next/link";
import pg from "pg";
import { db } from "../utils/db";

export default async function PostsPage({ searchParams }) {
    // if I visit /posts?sort=desc, then the searchParams is equal to:
    // { sort: "desc" }
  const result = await db.query(`
      SELECT
          places.id,
          places.city,
          places.region,
          ARRAY_AGG(geography.name) AS geography
      FROM places
      JOIN geography_junction ON places.id = geography_junction.places_id
      JOIN geography          ON geography.id = geography_junction.geography_id
      GROUP BY places.id, places.city, places.region
      `);
  
  const places = result.rows;


    return (
      <div>
        <h2>Posts</h2>
            <button>
              <Link href="/posts/one">Posts one</Link>
            </button>
            <button>
              <Link href="/posts/two">Posts two</Link>
            </button>
            <button>
              <Link href="/posts/three">Post three</Link>
            </button>
            <button>
              <Link href="/posts/four">Post four</Link>
            </button>
            <button>
              <Link href="/posts/five">Post five</Link>
            </button>
            <button>
              <Link href="/posts/six">Post six</Link>
            </button>
      </div>
    );
  }