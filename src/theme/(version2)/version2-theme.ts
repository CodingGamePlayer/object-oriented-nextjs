import { ButtonType, CardType, ComponentFactoryInterface } from "@/theme/theme.interface";
import { ButtonProps } from "../abstracts/class-type/AbstractButton";
import { CardProps } from "../abstracts/class-type/AbstractCard";
import { SidebarItem } from "../abstracts/class-type/AbstractSidebarItem";
import React from "react";
import { SidebarItemType } from "../(version1)/sidebar/SidebarItem";
import { BasicButton, TooltipButton, TooltipButtonProps } from "./buttons/BasicButton";
import { EmphasizedButton } from "../(version1)/buttons/EmphasizedButton";
import { DisabledButton } from "./buttons/DisabledButton";

export const ButtonFactoryV1 = (type: ButtonType, props: TooltipButtonProps) => {
  switch (type) {
    case ButtonType.Basic:
      return React.createElement(BasicButton, props);
    case ButtonType.Emphasized:
      return React.createElement(EmphasizedButton, props);
    case ButtonType.Disabled:
      return React.createElement(DisabledButton, props);
    case ButtonType.Tooltip:
      return React.createElement(TooltipButton, props);
    default:
      throw new Error(`Unsupported button type: ${type}`);
  }
};

export class ComponentV2Factory implements ComponentFactoryInterface {
  createButton(type: ButtonType, props: TooltipButtonProps): React.ReactElement {
    switch (type) {
      case ButtonType.Basic:
        return React.createElement(BasicButton, props);
      case ButtonType.Emphasized:
        return React.createElement(EmphasizedButton, props);
      case ButtonType.Disabled:
        return React.createElement(DisabledButton, props);
      case ButtonType.Tooltip:
        return React.createElement(TooltipButton, props);
      default:
        throw new Error(`Unsupported button type: ${type}`);
    }
  }

  createCard(type: CardType, props: CardProps): React.ReactElement {
    throw new Error("Method not implemented.");
    // switch (type) {
    //   case CardType.Basic:
    //     return new BasicCard({ ...props }).render();
    //   case CardType.Image:
    //     return new ImageCard({ ...props }).render();
    //   case CardType.Profile:
    //     return new ProfileCard({ ...props }).render();
    //   default:
    //     throw new Error(`Unsupported card type: ${type}`);
    // }
  }

  createSidebarItem(type: SidebarItemType, props: any): SidebarItem {
    throw new Error("Method not implemented.");
    // switch (type) {
    //   case SidebarItemType.Main:
    //     return new MainItem({ ...props });
    //   case SidebarItemType.Child:
    //     return new MainChildItem({ ...props });
    //   default:
    //     throw new Error(`Unsupported sidebar item type: ${type}`);
    // }
  }
}
