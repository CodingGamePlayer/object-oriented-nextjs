import { Button } from "@/theme/abstracts/AbstractButton";

export class BasicButton extends Button {
    protected getAdditionalClasses(): string {
        return "bg-blue-500 hover:bg-blue-700";
    }
}
