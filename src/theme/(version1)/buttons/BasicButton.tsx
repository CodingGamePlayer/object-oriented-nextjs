import React from 'react';
import {Button, ButtonProps} from "@/theme/interfaces/Button";

export class BasicButton extends Button {
    protected getAdditionalClasses(): string {
        return "bg-blue-800 hover:bg-blue-600 active:bg-blue-700";
    }
}
