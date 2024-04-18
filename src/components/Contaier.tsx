import { type ElementType } from 'react';

type ContainerProps = {
  as: ElementType;
};

export const Contaier = ({ as }: ContainerProps) => {
  const Component = as;
  return <Component />;
};
