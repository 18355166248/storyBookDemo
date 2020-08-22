function useClassPrefix(classPrefix, rootClassName) {
  return function prefixClass(className) {
    return `${classPrefix}-${rootClassName}-${className}`;
  };
}

export { useClassPrefix };
