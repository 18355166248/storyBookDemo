import React from "react";
import PropTypes from "prop-types";
import { useClassPrefix } from "../../utils/useClassPrefix";
import { componentsName } from "../../config/config";

Button.propTypes = {
  children: PropTypes.any,
};

function Button(props) {
  const prefixCls = useClassPrefix(componentsName, "button");

  const { children } = props;
  return <button className={[prefixCls("box")]}>{children}</button>;
}

export default Button;
