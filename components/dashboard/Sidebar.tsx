export default function Sidebar() {
    return (
      <aside className="w-64 border-r border-white/10 bg-zinc-950 p-6">
        <h1 className="mb-10 text-2xl font-bold">
          Retail<span className="text-violet-400">OS</span>
        </h1>
  
        <nav className="space-y-2">
          <SidebarItem title="Dashboard" active />
          <SidebarItem title="Inventory" />
          <SidebarItem title="Sales" />
          <SidebarItem title="Customers" />
          <SidebarItem title="Employees" />
          <SidebarItem title="Analytics" />
          <SidebarItem title="AI Assistant" />
          <SidebarItem title="Settings" />
        </nav>
      </aside>
    );
  }
  
  function SidebarItem({
    title,
    active = false,
  }: {
    title: string;
    active?: boolean;
  }) {
    return (
      <button
        className={`w-full rounded-xl px-4 py-3 text-left transition ${
          active
            ? "bg-violet-600 text-white"
            : "text-zinc-400 hover:bg-white/5 hover:text-white"
        }`}
      >
        {title}
      </button>
    );
  }