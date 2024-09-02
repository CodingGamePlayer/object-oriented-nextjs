import { Card, CardProps } from "@/theme/abstracts/AbstractCard";

export class ProfileCard extends Card {
    constructor(props: CardProps) {
        super(props);
    }

    protected getAdditionalClasses(): string {
        return "bg-blue-100";
    }

    render() {
        const { title, content, profileImageUrl, name } = this.props as CardProps;
        const combinedClasses = this.getCombinedClasses();

        return (
            <div className={combinedClasses}>
                <img src={profileImageUrl} alt={name} className="w-16 h-16 rounded-full mx-auto" />
                <div className="text-center mt-4">
                    <h2 className="font-bold text-lg">{name}</h2>
                    <p className="text-sm">{title}</p>
                    <p>{content}</p>
                </div>
            </div>
        );
    }
}
