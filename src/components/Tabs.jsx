import { EXAMPLES } from '../data';

const Tabs = ({ children, buttons, ButtonsContainer = 'menu' }) => {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
};

export default Tabs;
