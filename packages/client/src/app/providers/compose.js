/** функция compose для создания HOC компонента
 *  последовательно оборачивает компонент в провайдеры */

const compose = (...funcs) => {
  return (Component) => {
    return funcs.reduceRight((wrapped, f) => f(wrapped), Component);
  };
};

export default compose;
