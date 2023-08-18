type ComposeFunction = (...args: any) => void

export const composeFunctions =
  <F extends ComposeFunction, P extends Parameters<F>>(
    ...toComposedFunctions: F[]
  ) =>
  (...args: P) => {
    toComposedFunctions.forEach((f) => f(args))
  }
