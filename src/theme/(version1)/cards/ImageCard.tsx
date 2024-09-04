import { Card, CardProps } from "@/theme/abstracts/class-type/AbstractCard";

export class ImageCard extends Card {
  constructor(props: CardProps) {
    super(props);
  }

  protected getAdditionalClasses(): string {
    return "bg-gray-100";
  }

  render() {
    const { title, content, imageUrl } = this.props as CardProps;
    const combinedClasses = this.getCombinedClasses();

    return (
      <div className={combinedClasses}>
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-md" />
        <div className="p-4">
          <h2 className="font-bold text-lg">{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    );
  }
}
