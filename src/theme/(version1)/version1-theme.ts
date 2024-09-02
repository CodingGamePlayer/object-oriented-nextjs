import {BasicButton} from "@/theme/(version1)/buttons/BasicButton";
import {ButtonProps} from "@/theme/interfaces/Button";
import {DisabledButton} from "@/theme/(version1)/buttons/DisabledButton";
import {EmphasizedButton} from "@/theme/(version1)/buttons/EmphasizedButton";
import { ButtonType, ComponentFactoryInterface} from "@/theme/theme.interface";

export class ComponentV1Factory implements ComponentFactoryInterface {
    createButton(type: ButtonType, props: ButtonProps): React.ReactElement {
        switch (type) {
            case ButtonType.Basic:
                return new BasicButton({...props}).render();
            case ButtonType.Disabled:
                return new DisabledButton({...props}).render();
            case ButtonType.Emphasized:
                return new EmphasizedButton({...props}).render();
            default:
                throw new Error(`Unsupported button type: ${type}`);
        }
    }
}