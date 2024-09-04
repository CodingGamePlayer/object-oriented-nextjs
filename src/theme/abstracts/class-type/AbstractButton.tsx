import React from 'react';

export interface ButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
    disabled?: boolean;
}

export abstract class Button extends React.Component<ButtonProps> {
    protected baseClasses: string = "px-4 py-2 rounded-md font-semibold text-white focus:outline-none";

    protected getAdditionalClasses(): string {
        return "";
    }

    protected getCombinedClasses(): string {
        const { className } = this.props;
        return `${className || ''} ${this.baseClasses} ${this.getAdditionalClasses()}`.trim();
    }

    render() {
        const { onClick, label, disabled } = this.props;
        const combinedClasses = this.getCombinedClasses();

        console.log('Button render', combinedClasses);

        return (
            <button
                className={combinedClasses}
                onClick={onClick}
                disabled={disabled}
            >
                {label}
            </button>
        );
    }
}