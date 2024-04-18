import { ComponentPropsWithoutRef } from 'react';

type FormProps = ComponentPropsWithoutRef<'form'>;

export const Form = (props: FormProps) => {
  return <form {...props}>{props.children}</form>;
};
