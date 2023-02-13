import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    value: string;
    children?: React.ReactNode;
    size?: "sm" | "md" | "lg";
    color?: "red" | "gray";
    className?: string;
    [key: string]: any;
}

const SIZES = {
    sm: `
        --button-font-size: 0.875rem;
        --button-padding: 8px 12px;
        --button-font-weight:400;
    `,
    md: `
        --button-font-size: 1rem;
        --button-padding: 16px 20px;
        --button-font-weight:600;
    `,
    lg: `
        --button-font-size: 1.25rem;
        --button-padding: 20px 24px;
        --button-font-weight:800;

    `,
};

const COLORS = {
    red: `
        --button-color: #fff;
        --button-bg-color: #e50914;
    `,
    gray: `
        --button-color:white;
        --button-bg-color:rgba(51, 51, 51, 0.5);
        
    `,
};

export default function Button({
    onClick,
    value,
    children,
    className,
    size = "md",
    color = "red",
    ...rest
}: ButtonProps) {
    const sizeStyle = SIZES[size];
    const colorStyle = COLORS[color];
    return (
        <CustomButton
            sizeStyle={sizeStyle}
            colorStyle={colorStyle}
            className={className ? className : undefined}
            onClick={onClick}
            value={value}
            {...rest}
        >
            {children}
        </CustomButton>
    );
}

const CustomButton = styled.button<{ colorStyle: string; sizeStyle: string }>`
    ${(props) => {
        let result = ``;
        if (props.sizeStyle) {
            result += props.sizeStyle;
        }
        if (props.colorStyle) {
            result += props.colorStyle;
        }
        return css`
            ${result}
        `;
    }}
    border: none;
    outline: none;
    cursor: pointer;
    color: var(--button-color, #ffffff);
    background: var(--button-bg-color, #0d6efd);
    font-size: var(--button-font-size, 1rem);
    padding: var(--button-padding, 12px 16px);
`;
