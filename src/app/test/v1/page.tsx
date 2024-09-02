'use client'

import {ComponentV1Factory} from "@/theme/(version1)/version1-theme";
import {ButtonProps} from "@/theme/interfaces/Button";
import {ButtonType} from "@/theme/theme.interface";
import {useEffect, useState} from "react";

export default function ButtonFactoryPage() {
    const [theme, setTheme] = useState<ComponentV1Factory | null>(null);

    useEffect(() => {
        setTheme(new ComponentV1Factory());
    }, []);

    const handleClick = (buttonType: string) => {
        console.log(`${buttonType} button clicked`);
    };

    const basicButtonProps: ButtonProps = {
        label: "Basic Button",
        onClick: () => handleClick("Basic"),
        className: "px-1" // 페이지에서 스타일 지정
    };

    const disabledButtonProps: ButtonProps = {
        label: "Disabled Button",
        onClick: () => handleClick("Disabled"),
        className: "px-8" // 페이지에서 스타일 지정
    };

    const emphasizedButtonProps: ButtonProps = {
        label: "Emphasized Button",
        onClick: () => handleClick("Emphasized"),
        className: "px-1" // 페이지에서 스타일 지정
    };

    if (!theme) {
        return <div>Loading...</div>; // 또는 다른 로딩 표시
    }

    return (
        <div>
            <h1>Button Factory Page</h1>
            <div>
                {theme.createButton(ButtonType.Basic, basicButtonProps)}
            </div>
            <div>
                {theme.createButton(ButtonType.Disabled, disabledButtonProps)}
            </div>
            <div>
                {theme.createButton(ButtonType.Emphasized, emphasizedButtonProps)}
            </div>
        </div>
    );
}