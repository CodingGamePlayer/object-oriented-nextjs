import { Card } from "@/theme/abstracts/class-type/AbstractCard";

export class BasicCard extends Card {
  protected getAdditionalClasses(): string {
    return "bg-white";
  }
}
