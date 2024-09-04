import { SidebarItemType } from "@/theme/(version1)/sidebar/SidebarItem";
import { ComponentV1Factory } from "@/theme/(version1)/version1-theme";
import { FaCalendarAlt, FaPlus, FaTasks, FaUser } from "react-icons/fa";
import SidebarItemComponent from "./SidebarItemComponent";

const factory = new ComponentV1Factory();

export default function Sidebar() {
  const sidebarItems = [
    factory.createSidebarItem(SidebarItemType.Main, {
      title: "Main Item 1",
      icon: <FaCalendarAlt />,
      children: [
        factory.createSidebarItem(SidebarItemType.Child, {
          title: "Main Child Item 1",
          icon: <FaPlus />,
        }),
      ],
    }),
    factory.createSidebarItem(SidebarItemType.Main, {
      title: "Main Item 2",
      icon: <FaTasks />,
      children: [
        factory.createSidebarItem(SidebarItemType.Child, {
          title: "Main Child Item 2",
          icon: <FaUser />,
        }),
      ],
    }),
    factory.createSidebarItem(SidebarItemType.Main, {
      title: "Main Item 3",
      icon: <FaUser />,
      children: [
        factory.createSidebarItem(SidebarItemType.Child, {
          title: "Main Child Item 3",
          icon: <FaPlus />,
        }),
      ],
    }),
  ];

  return (
    <aside className="w-64 h-screen bg-gray-900 text-gray-500 p-4 fixed left-0 top-0 overflow-y-auto">
      {sidebarItems.map((item, index) => (
        <SidebarItemComponent key={index} item={item} />
      ))}
    </aside>
  );
}
