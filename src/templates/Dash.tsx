
import MenuBar from "../components/MenuBar";
import { LayoutWrapper, ContentWrapper } from './style'

interface DefaultProps {
    children: React.ReactNode;
}
  
  // Novo Wrapper para layout flexível

  
  const Dash = ({ children }: DefaultProps) => {
    return (
      <LayoutWrapper>
        <MenuBar />
        <ContentWrapper>{children}</ContentWrapper>
      </LayoutWrapper>
    );
};

export default Dash