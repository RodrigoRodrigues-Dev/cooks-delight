import { TitleStyled } from './styles';

type TitleProps = {
  children?: React.ReactNode;
  $type?: 'Big' | 'Medium' | 'Small';
};

const Title = ({ children, $type = 'Big' }: TitleProps) => (
  <TitleStyled $type={$type}>{children}</TitleStyled>
);

export default Title;
