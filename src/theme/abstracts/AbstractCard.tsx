import React from 'react';

export interface CardProps {
    title: string;
    content: string;
    className?: string;
    imageUrl?: string; // 추가된 속성
    profileImageUrl?: string;
    name?: string;
}

export abstract class Card extends React.Component<CardProps> {
    protected baseClasses: string = "p-4 border rounded-md shadow-md";

    protected getAdditionalClasses(): string {
        return "";
    }

    protected getCombinedClasses(): string {
        const { className } = this.props;
        return `${className || ''} ${this.baseClasses} ${this.getAdditionalClasses()}`.trim();
    }

    render() {
        const { title, content } = this.props;
        const combinedClasses = this.getCombinedClasses();

        console.log('Card render', combinedClasses);

        return (
            <div className={combinedClasses}>
                <h2 className="font-bold text-lg">{title}</h2>
                <p>{content}</p>
            </div>
        );
    }
}