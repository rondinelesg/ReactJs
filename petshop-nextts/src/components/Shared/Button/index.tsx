import '../../../../public/assets/css/button/index.css'
import React, { FC, Fragment } from 'react';
import 'tailwindcss/tailwind.css'
import { Button } from "@material-tailwind/react";

interface CardProps {
    title: string;
}

const CustonButton: FC<CardProps> = ({ title }) => {
    return (
        <Fragment>
            <button className="btn btn-blue">
                {title}
            </button>
            <Button>
                Butto
            </Button>
        </Fragment>
    );
};

export default CustonButton;
