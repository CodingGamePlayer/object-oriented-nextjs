import { ChildSidebarItem, SidebarItem } from "@/theme/abstracts/class-type/AbstractSidebarItem";
import Link from "next/link";
import { ReactNode } from "react";

export enum SidebarItemType {
  Main = "main",
  Child = "child",
}

export class MainItem extends SidebarItem {
  render(): ReactNode {
    return <div className="sidebar-item flex items-center py-2 rounded-md mt-4 font-bold text-gray-400">{this.renderContent()}</div>;
  }
}

export class MainChildItem extends ChildSidebarItem {
  render(): ReactNode {
    return (
      <Link
        href={this.props.path || "#"}
        className="sidebar-item flex items-center p-2 hover:bg-gray-700 rounded-md transition-colors duration-200 ease-in-out w-full text-gray-300 "
      >
        {this.renderContent()}
      </Link>
    );
  }
}
