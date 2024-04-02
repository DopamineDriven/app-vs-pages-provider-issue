import Link from "next/link";

export default function RootPage() {
  return (
    <main className="w-full h-screen flex items-center justify-center gap-10">
      <Link href={'/pages-router'} className="text-xl underline text-green-400">To Pages router without issue</Link>

      <Link href={'/app-router'} className="text-xl underline text-red-400">To App router with issue</Link>
    </main>
  );
}
