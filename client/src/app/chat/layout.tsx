import Sidebar from "../../components/shared/sidebar/Sidebar";

export default function ChatLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <Sidebar />
      {children}
    </section>
  );
}
