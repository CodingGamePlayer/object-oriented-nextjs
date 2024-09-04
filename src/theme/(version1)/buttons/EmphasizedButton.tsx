import { Button } from "@/theme/abstracts/class-type/AbstractButton";

export class EmphasizedButton extends Button {
  protected getAdditionalClasses(): string {
    return "bg-red-500 hover:bg-red-700";
  }
}
