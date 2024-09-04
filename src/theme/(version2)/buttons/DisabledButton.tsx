import { ButtonProps } from "@/theme/abstracts/class-type/AbstractButton";
import { Button } from "@/theme/abstracts/function-type/Button";

export const DisabledButton: React.FC<ButtonProps> = (props) => <Button {...props} additionalClasses="bg-gray-500 cursor-not-allowed" />;
