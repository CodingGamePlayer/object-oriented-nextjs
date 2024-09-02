import React from "react";
import { ButtonProps } from "./abstracts/AbstractButton";

export enum ButtonType {
    Basic = 'basic',
    Disabled = 'disabled',
    Emphasized = 'emphasized'
}

export interface ComponentFactoryInterface {
    createButton(type: ButtonType, props: ButtonProps): React.ReactElement;
}