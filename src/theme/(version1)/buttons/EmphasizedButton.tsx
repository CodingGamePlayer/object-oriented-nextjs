import React from 'react';
import {Button, ButtonProps} from "@/theme/interfaces/Button";

export class EmphasizedButton extends Button {
    protected getAdditionalClasses(): string {
        return "bg-yellow-400 text-black font-bold hover:bg-yellow-500 active:bg-yellow-600";
    }
}