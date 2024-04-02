import type React from "react";

// React Intrinsic Elements Props
export type Unenumerate<T> = T extends (infer U)[] | readonly (infer U)[]
  ? U
  : T;

export type InferTsxTargeted<T> = T extends React.DetailedHTMLProps<
  infer U,
  Element
>
  ? U
  : T;

export type TsxTargeted<T extends keyof React.JSX.IntrinsicElements> = {
  [P in T]: InferTsxTargeted<React.JSX.IntrinsicElements[P]>;
}[T];

export type TsxExclude<
  T extends keyof React.JSX.IntrinsicElements,
  J extends keyof TsxTargeted<T>
> = RemoveFields<TsxTargeted<T>, J>;

export type TsxInclude<
  T extends keyof React.JSX.IntrinsicElements,
  J extends keyof TsxTargeted<T>
> = RemoveFields<TsxTargeted<T>, Exclude<keyof TsxTargeted<T>, J>>;

export type RemoveFields<T, P extends keyof T = keyof T> = {
  [S in keyof T as Exclude<S, P>]: T[S];
};

