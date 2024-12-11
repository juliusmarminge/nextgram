export default function DashboardLayout({ children, modal }: { children: React.ReactNode, modal: React.ReactNode }) {
  return <div>
    <nav>Nested layour</nav>
    {children}        {modal}
        <div id="modal-root" /></div>;
}
