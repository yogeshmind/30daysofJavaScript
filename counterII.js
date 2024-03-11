var createCounter = function(init) {
    let i = 0;
    return {
      increment: () => init + ++i,
      decrement: () => init + --i,
      reset: () => {
        i = 0;
        return init;
      }
    }
  };
  