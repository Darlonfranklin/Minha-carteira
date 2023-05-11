import { Container } from "./styles";

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Content;
