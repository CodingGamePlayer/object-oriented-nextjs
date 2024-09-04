import { ButtonProps } from "@/theme/abstracts/class-type/AbstractButton";
import { Button } from "@/theme/abstracts/function-type/Button";

export const EmphasziedButton: React.FC<ButtonProps> = (props) => <Button {...props} additionalClasses="bg-red-500 hover:bg-red-700" />;
