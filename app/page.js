import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <Link href="/countdown-timer">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go To Countdown Timer Page
        </button>
      </Link>
    </div>
  );
}
