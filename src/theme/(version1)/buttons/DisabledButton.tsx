import { Button } from "@/theme/abstracts/AbstractButton";

export class DisabledButton extends Button {
    protected getAdditionalClasses(): string {
        return "bg-gray-500 cursor-not-allowed";
    }
}