import { useState,useEffect } from "react";
import MenuBar from "../components/MenuBar";
import { LayoutWrapper, ContentWrapper } from './style'

interface DefaultProps {
    children: React.ReactNode;
}
  
  // Novo Wrapper para layout flexível

  
  const Dash = ({ children }: DefaultProps) => {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
      // Recupera o estado de 'isOpen' do localStorage ao carregar o componente
      const savedState = localStorage.getItem("menuIsOpen");
      if (savedState !== null) {
          setIsOpen(JSON.parse(savedState)); // Converte para boolean
      }
  }, []);

    const toggleMenu = () => {
      setIsOpen((prev) => {
          const newState = !prev;
          localStorage.setItem("menuIsOpen", JSON.stringify(newState)); // Salva no localStorage
          return newState;
      });
    };

    return (
      <LayoutWrapper>
        <MenuBar isOpen={isOpen} toggleMenu={toggleMenu} />
        <ContentWrapper isOpen={isOpen}>{children}</ContentWrapper>
      </LayoutWrapper>
    );
};

export default Dash