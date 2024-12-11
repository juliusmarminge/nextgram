export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="layout">
      <h1>Dashboard layout</h1>
      {children}
    </div>
  );
}
