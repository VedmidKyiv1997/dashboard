import Link from "next/link";
import AuthButtons from '~/app/_components/authButtons';

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b bg-white/80 p-4 text-xl font-semibold">
      <div className="flex h-full gap-4">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
      <div
        className="flex-flow flex items-center gap-4"
        suppressHydrationWarning
      >
        <AuthButtons />
      </div>
    </nav>
  );
}
