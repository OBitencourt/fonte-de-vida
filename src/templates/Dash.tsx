import styled from "styled-components";
import MenuBar from "../components/MenuBar";

interface DefaultProps {
    children: React.ReactNode;
}
  
  // Novo Wrapper para layout flexível
  const LayoutWrapper = styled.div`
    display: flex;
  `;
  
  const ContentWrapper = styled.div`
    flex-grow: 1;
    margin-left: 300px; // mesma largura da MenuBar
    padding: 20px;
  `;
  
  const Dash = ({ children }: DefaultProps) => {
    return (
      <LayoutWrapper>
        <MenuBar />
        <ContentWrapper>{children}</ContentWrapper>
      </LayoutWrapper>
    );
};

export default Dash