import React from 'react';
import {Button} from "@/theme/interfaces/Button";

export class DisabledButton extends Button {
    protected getAdditionalClasses(): string {
        return "bg-gray-400 cursor-not-allowed";
    }
}