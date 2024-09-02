import React from "react";
import { ButtonProps } from "./abstracts/AbstractButton";
import { CardProps } from "./abstracts/AbstractCard";

export enum ButtonType {
    Basic = 'basic',
    Disabled = 'disabled',
    Emphasized = 'emphasized'
}

export enum CardType {
    Basic = 'basic',
    Image = 'image',
    Profile = 'profile' 
}

export interface ComponentFactoryInterface {
    createButton(type: ButtonType, props: ButtonProps): React.ReactElement;
    createCard(type: CardType, props: CardProps): React.ReactElement;
}