import {ButtonProps} from "@/theme/interfaces/Button";

export enum ButtonType {
    Basic = 'basic',
    Disabled = 'disabled',
    Emphasized = 'emphasized'
}

export interface ComponentFactoryInterface {
    createButton(type: ButtonType, props: ButtonProps): React.ReactElement;
}