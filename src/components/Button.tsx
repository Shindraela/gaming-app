type ButtonProps = {
  onClick: () => void;
  children: string;
};

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
