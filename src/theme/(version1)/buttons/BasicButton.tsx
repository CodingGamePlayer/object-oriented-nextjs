import { ButtonProps } from "@/components/ui/button";
import { Button } from "@/theme/abstracts/class-type/AbstractButton";

export class BasicButton extends Button {
  protected getAdditionalClasses(): string {
    return "bg-blue-500 hover:bg-blue-700";
  }
}
