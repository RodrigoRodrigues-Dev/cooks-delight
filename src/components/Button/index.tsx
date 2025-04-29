import { ButtonStyled } from './styled';

export type ButtonProps = {
  children: string;
  $type?: 'primary' | 'secondary' | 'tertiary';
};

const Button = ({ children, $type = 'primary' }: ButtonProps) => (
  <ButtonStyled $type={$type}>{children}</ButtonStyled>
);

export default Button;
