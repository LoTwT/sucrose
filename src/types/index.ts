export type Nullable<T> = T | null
export type MayBeNull<T> = T | null

export type Undefinedable<T> = T | undefined
export type MayBeUndefined<T> = T | undefined

export type Arrayable<T> = T | T[]
export type MayBeArray<T> = T | T[]

export type Promisable<T> = Promise<T> | T
export type MayBePromise<T> = Promise<T> | T
