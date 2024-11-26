import Link from "next/link";
export default function SinglePostPage() {
    return (
      <div>
        <header>Single Post</header>
        <p>
          <button>
            <Link href="editpost">Edit</Link>
          </button>
          <button>
            <Link href="deletepost">Delete</Link>
          </button>
        </p>
      </div>
    );
  }