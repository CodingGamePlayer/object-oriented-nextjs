import { ReactNode } from "react";

export interface CardProps {
  title: string;
  content: string;
  className?: string;
  imageUrl?: string;
  profileImageUrl?: string;
  name?: string;
  children?: ReactNode;
  additionalClasses?: string;
}

const baseClasses = "p-4 border rounded-md shadow-md bg-white";

export const Card: React.FC<CardProps> = ({ title, content, className, imageUrl, profileImageUrl, name, children, additionalClasses }) => {
  const combinedClasses = `${className || ""} ${baseClasses} ${additionalClasses}`.trim();

  return (
    <div className={combinedClasses}>
      {/* title이 존재하면 title 제공 */}
      {title && <h2 className="font-bold text-lg">{title}</h2>}
      {content && <p>{content}</p>}
      {children && children}
    </div>
  );
};
