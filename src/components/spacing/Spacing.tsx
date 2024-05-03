import styles from './Spacing.module.scss';
import React from 'react';
import clsx from "clsx";

interface spaceProps {
	size: string;
}
interface SpacingStyles {
    spacing: string;
    spacing50: string;
}

// Используем созданный интерфейс в компоненте Spacing
export const Spacing = ({ size }: spaceProps) => {
    const className = `spacing${size}` as keyof SpacingStyles; // Указываем тип keyof SpacingStyles
    return <div className={clsx([styles.spacing, styles[className]])}></div>;
};