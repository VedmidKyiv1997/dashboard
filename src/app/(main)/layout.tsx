import { TopNav } from "~/app/_components/topnav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] ">
      <TopNav />
      <main>{children}</main>
    </div>
  );
}
