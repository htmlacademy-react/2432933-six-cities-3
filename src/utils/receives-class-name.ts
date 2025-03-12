import clsx from 'clsx';

const receivesClassName = (condition: boolean, className: string) => clsx({ [className]: condition, });

export {receivesClassName};

