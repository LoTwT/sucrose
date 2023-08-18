type ComposeFunction = (...args: any) => void

export function composeFunctions<
  F extends ComposeFunction | undefined,
  Args extends unknown[] = [F] extends [undefined] ? [] : Parameters<F & []>,
>(...toComposedFunctions: F[]) {
  return (...args: Args) => {
    toComposedFunctions?.forEach((f) => f?.(...args))
  }
}
