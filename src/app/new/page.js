import Link from "next/link";
export default function NewPostPage() {
    return (
      <div>
        <h2>New Post</h2>
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