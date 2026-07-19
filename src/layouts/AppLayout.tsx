import { Outlet } from "react-router-dom";

import Header from "@/components/Header/Header";

function AppLayout() {
  return (
    <div className="min-h-screen bg-[#F1EBE1]">
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;