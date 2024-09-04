import React from "react";
import { ButtonProps } from "./abstracts/class-type/AbstractButton";
import { CardProps } from "./abstracts/class-type/AbstractCard";

export enum ButtonType {
  Basic = "basic",
  Disabled = "disabled",
  Emphasized = "emphasized",
  Tooltip = "tooltip",
}

export enum CardType {
  Basic = "basic",
  Image = "image",
  Profile = "profile",
}

export interface ComponentFactoryInterface {
  createButton(type: ButtonType, props: ButtonProps): React.ReactElement;
  createCard(type: CardType, props: CardProps): React.ReactElement;
}
