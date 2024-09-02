import { sidebarItems } from "@/theme/(version1)/sidebar/SidebarItem";
import SidebarItemComponent from "./SidebarItemComponent";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-gray-500 p-4 fixed left-0 top-0 overflow-y-auto">
      {sidebarItems.map((item, index) => (
        <SidebarItemComponent key={index} item={item} />
      ))}
    </aside>
  );
}
