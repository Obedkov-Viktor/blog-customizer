import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import React from "react";

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

interface ArrowButtonProps {
	onClick: OnClick;
	isOpen: boolean;
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({ onClick, isOpen }) => {
	return (

		<div
			role='button'
			aria-label={isOpen ? 'Закрыть форму параметров статьи' : 'Открыть форму параметров статьи'}
			tabIndex={0}
			className={`${styles.container} ${isOpen ? styles.container_open : ''}`}
			onClick={onClick}
		>
			<img src={arrow} alt='иконка стрелочки' className={isOpen ? styles.arrow_open : styles.arrow} />
		</div>
	);
};