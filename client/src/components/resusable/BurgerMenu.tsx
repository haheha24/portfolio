import { forwardRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

type IButtonProps = {
  id?: string;
  classBtn?: string;
  classIcon?: string;
  type?: "button" | "submit" | "reset";
  stylesBtn?: { [attribute: string]: string | number };
  stylesIcon?: { [attribute: string]: string | number };
};

const BurgerMenu = forwardRef<HTMLButtonElement, IButtonProps>(
  (props: IButtonProps, ref?): JSX.Element => {
    const {
      id = "",
      classBtn = "",
      classIcon = "",
      type = "button" as const,
      stylesBtn = {},
      stylesIcon = {}
    } = props;
    return (
      <button type={type} id={id} ref={ref} className={classBtn} style={stylesBtn}>
        <GiHamburgerMenu className={classIcon} style={stylesIcon} />
      </button>
    );
  }
);

export default BurgerMenu;
