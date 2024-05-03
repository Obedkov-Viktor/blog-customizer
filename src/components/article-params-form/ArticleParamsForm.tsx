	import React, {SyntheticEvent, useState} from 'react';
	import {ArrowButton} from 'components/arrow-button';
	import clsx from 'clsx';
	import styles from './ArticleParamsForm.module.scss';
	import {Text} from 'components/text';
	import {Select} from "components/select";
	import {defaultArticleState} from "src/constants/articleProps";
	import {Separator} from "components/separator";
	import {Button} from "components/button";
	import {Spacing} from "components/spacing/Spacing";
	import {RadioGroup} from "components/radio-group";
	import {
		fontFamilyOptions,
		ArticleStateType,
		fontSizeOptions,
		fontColors, backgroundColors, contentWidthArr
	} from "src/constants/articleProps";


	type TArticleParamsFormProps = {
		state: ArticleStateType
		setState: (param: ArticleStateType) => void
	}

	export const ArticleParamsForm = ({ setState }: TArticleParamsFormProps) => {

		const [isOpen, setIsOpen] = useState(false);
		const [formState, setFormState] = useState<ArticleStateType>(defaultArticleState);


		// handleToggleSidebar: Эта функция отвечает за
		// переключение состояния боковой панели (sidebar)
		// между открытым и закрытым.
		// При вызове она изменяет значение переменной isOpen,
		// что приводит к отображению или скрытию боковой панели.
		const handleToggleSidebar = () => {
			setIsOpen(!isOpen);
		};


		// handleSubmitButton: Данная функция обрабатывает событие отправки формы.
		// При вызове она предотвращает стандартное поведение формы
		// (перезагрузку страницы)
		// путем вызова метода preventDefault().
		// Затем функция передает текущее состояние формы (formState)
		// в функцию обратного вызова setState для применения параметров к статье.
		const handleSubmitButton = (event: SyntheticEvent) => {
			event.preventDefault();
			setState(formState);
		}

		// handleResetButton: Эта функция сбрасывает текущее состояние формы (formState)
		// на значения по умолчанию, определенные в defaultArticleState,
		// когда пользователь нажимает на кнопку "Сбросить".
		const handleResetButton = () => {
			setFormState(defaultArticleState);
		}

		const containerClass = clsx(styles.container, {
			[styles.container_open]: isOpen,
		});

		const { fontFamilyOption, fontSizeOption, fontColor, backgroundColor, contentWidth } = formState;

		return (
			<>
				<ArrowButton onClick={handleToggleSidebar} isOpen={isOpen} />
				{isOpen && (
					<aside className={containerClass}>
						<form onSubmit={handleSubmitButton} className={styles.form}>
							<Text size={31} weight={800} align="left" family="open-sans" uppercase={true}>Задайте параметры</Text>
							<Spacing size={"50"}></Spacing>
							<Select
								title={'Шрифт'}
								options={fontFamilyOptions}
								selected={fontFamilyOption}
								onChange={(option) => setFormState(prevState => ({ ...prevState, fontFamilyOption: option }))} />
							<Spacing size={"50"}></Spacing>
							<RadioGroup
								title={'Размер шрифта'}
								options={fontSizeOptions}
								selected={fontSizeOption}
								onChange={(option) => setFormState(prevState => ({ ...prevState, fontSizeOption: option }))}  name={""}/>
							<Spacing size={"50"}></Spacing>
							<Select
								title={'Цвет шрифта'}
								options={fontColors}
								selected={fontColor}
								onChange={(option) => setFormState(prevState => ({ ...prevState, fontColor: option }))} />
							<Spacing size={"50"}></Spacing>
							<Separator />
							<Spacing size={"50"}></Spacing>
							<Select
								title={'Цвет фона'}
								options={backgroundColors}
								selected={backgroundColor}
								onChange={(option) => setFormState(prevState => ({ ...prevState, backgroundColor: option }))} />
							<Spacing size={"50"}></Spacing>
							<Select
								title={'Ширина контента'}
								options={contentWidthArr}
								selected={contentWidth}
								onChange={(option) => setFormState(prevState => ({ ...prevState, contentWidth: option }))} />
							<Spacing size={"50"}></Spacing>
							<div className={styles.bottomContainer}>
								<Button title="Сбросить" onClick={handleResetButton} type='button' />
								<Button title={'Применить'} type='submit' />
							</div>
						</form>
					</aside>
				)}
			</>
		);
	};
