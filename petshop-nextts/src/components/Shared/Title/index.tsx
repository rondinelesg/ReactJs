import React, { FC, Fragment } from 'react';

interface TitleProps {
    title: string;
    subtitle: string;
}

const Title: FC<TitleProps> = ({ title, subtitle }) => {
    return (
        <Fragment>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </Fragment>
    );
};

export default Title;