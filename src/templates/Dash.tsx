import { useState } from "react";
import MenuBar from "../components/MenuBar";
import { LayoutWrapper, ContentWrapper } from './style'

interface DefaultProps {
    children: React.ReactNode;
}
  
  // Novo Wrapper para layout flexível

  
  const Dash = ({ children }: DefaultProps) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => setIsOpen((isOpen) => !isOpen);

    return (
      <LayoutWrapper>
        <MenuBar isOpen={isOpen} toggleMenu={toggleMenu} />
        <ContentWrapper isOpen={isOpen}>{children}</ContentWrapper>
      </LayoutWrapper>
    );
};

export default Dash