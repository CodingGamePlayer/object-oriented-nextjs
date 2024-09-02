import { Card } from "@/theme/abstracts/AbstractCard";

export class BasicCard extends Card {
    protected getAdditionalClasses(): string {
        return "bg-white";
    }
}
