import { BasicButton } from "@/theme/(version1)/buttons/BasicButton";
import { DisabledButton } from "@/theme/(version1)/buttons/DisabledButton";
import { EmphasizedButton } from "@/theme/(version1)/buttons/EmphasizedButton";
import { ButtonType, CardType, ComponentFactoryInterface } from "@/theme/theme.interface";
import { CardProps } from "../abstracts/AbstractCard";
import { BasicCard } from "./cards/BasicCard";
import { ImageCard } from "./cards/ImageCard";
import { ProfileCard } from "./cards/ProfileCard";
import { ButtonProps } from "../abstracts/AbstractButton";

export class ComponentV1Factory implements ComponentFactoryInterface {
    createButton(type: ButtonType, props: ButtonProps): React.ReactElement {
        switch (type) {
            case ButtonType.Basic:
                return new BasicButton({ ...props }).render();
            case ButtonType.Disabled:
                return new DisabledButton({ ...props }).render();
            case ButtonType.Emphasized:
                return new EmphasizedButton({ ...props }).render();
            default:
                throw new Error(`Unsupported button type: ${type}`);
        }
    }

    createCard(type: string, props: CardProps): React.ReactElement {
        switch (type) {
            case CardType.Basic:
                return new BasicCard({ ...props }).render();
            case CardType.Image:
                return new ImageCard({ ...props }).render(); 
            case CardType.Profile:
                return new ProfileCard({
                    ...props
                }).render();
            default:
                throw new Error(`Unsupported card type: ${type}`);
        }
    }
}