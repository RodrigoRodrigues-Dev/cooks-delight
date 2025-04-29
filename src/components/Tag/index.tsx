import { TagStyled } from './styled';

type TagProps = {
  children?: string;
};

const Tag = ({ children }: TagProps) => <TagStyled>{children}</TagStyled>;

export default Tag;
