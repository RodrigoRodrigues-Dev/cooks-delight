import { ParagraphStyled } from './styled';

export type ParagraphProps = {
  children?: React.ReactNode;
  $type?: 'primary' | 'secondary' | 'tertiary';
  $size?: number;
};

const Paragraph = ({ children, $type = 'primary', $size }: ParagraphProps) => (
  <ParagraphStyled $type={$type} $size={$size}>
    {children}
  </ParagraphStyled>
);

export default Paragraph;
