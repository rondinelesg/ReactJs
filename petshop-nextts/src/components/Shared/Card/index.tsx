import React, { FC, Fragment } from 'react';
import Title from '../Title';
import Button from '../Button';
import CustonButton from '../Button';

interface CardProps {
    title: string;
    subtitle: string;
    text: string;

}

const Card: FC<CardProps> = ({ title, subtitle, text}) => {
    return (
        <Fragment>
            <section>
                <article>
                    <Title
                        title={title}
                        subtitle={subtitle}
                    />
                    <p>{text}</p>
                </article>
                <CustonButton
                  title='Saber mais'
                 />
            </section>
        </Fragment>
    );
};

export default Card;