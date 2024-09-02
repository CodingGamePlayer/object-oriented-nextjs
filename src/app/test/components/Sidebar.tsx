import { sidebarItems } from "@/theme/(version1)/sidebar/SidebarItem";
import SidebarItemComponent from "./SidebarItemComponent";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white p-4 h-screen">
      {sidebarItems.map((item, index) => (
        <SidebarItemComponent key={index} item={item} />
      ))}
    </div>
  );
}
