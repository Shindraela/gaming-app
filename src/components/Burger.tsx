type BurgerType = {
  isOpen: boolean;
  onClick: () => void;
};

export const Burger = ({ isOpen, onClick }: BurgerType) => {
  return (
    <div
      className={`Burger ${isOpen ? 'Navbar--isOpen' : ''}`}
      onClick={onClick}
    >
      <div
        className={`BurgerBar Burger1 ${isOpen ? 'BurgerBarIsOpen--1' : ''}`}
      ></div>
      <div
        className={`BurgerBar Burger2 ${isOpen ? 'BurgerBarIsOpen--2' : ''}`}
      ></div>
      <div
        className={`BurgerBar Burger3 ${isOpen ? 'BurgerBarIsOpen--3' : ''}`}
      ></div>
    </div>
  );
};
