import type { TsxExclude } from "../../types/index";

export type PathsProps = {
  Icon: JSX.Element;
  viewBox: `${number} ${number} ${number} ${number}`;
};

export const paths = {
  Facebook: {
    Icon: (
      <path d='M12.6667 11.3333H22V12.6667H12.6667V22H11.3333V12.6667H2V11.3333H11.3333V2H12.6667V11.3333Z' />
    ),
    viewBox: `0 0 24 24`
  },
  Download: {
    Icon: (
      <path d='M3.5 13H12.5C12.7761 13 13 13.2239 13 13.5C13 13.7455 12.8231 13.9496 12.5899 13.9919L12.5 14H3.5C3.22386 14 3 13.7761 3 13.5C3 13.2545 3.17688 13.0504 3.41012 13.0081L3.5 13H12.5H3.5ZM7.91012 1.00806L8 1C8.24546 1 8.44961 1.17688 8.49194 1.41012L8.5 1.5V10.292L11.182 7.61091C11.3555 7.43735 11.625 7.41806 11.8198 7.55306L11.8891 7.61091C12.0627 7.78448 12.0819 8.0539 11.9469 8.24877L11.8891 8.31802L8.35355 11.8536C8.17999 12.0271 7.91056 12.0464 7.71569 11.9114L7.64645 11.8536L4.11091 8.31802C3.91565 8.12276 3.91565 7.80617 4.11091 7.61091C4.28448 7.43735 4.5539 7.41806 4.74877 7.55306L4.81802 7.61091L7.5 10.292V1.5C7.5 1.25454 7.67688 1.05039 7.91012 1.00806L8 1L7.91012 1.00806Z' />
    ),
    viewBox: `0 0 16 16`
  },
  Plus: {
    Icon: (
      <path d='M12.6667 11.3333H22V12.6667H12.6667V22H11.3333V12.6667H2V11.3333H11.3333V2H12.6667V11.3333Z' />
    ),
    viewBox: `0 0 24 24`
  },
  Close: {
    Icon: (
      <path d='M 20 1.416015625 L 11.416015625 10 L 20 18.583984375 L 18.583984375 20 L 10 11.416015625 L 1.416015625 20 L 0 18.583984375 L 8.583984375 10 L 0 1.416015625 L 1.416015625 0 L 10 8.583984375 L 18.583984375 0 L 20 1.416015625 Z' />
    ),
    viewBox: `0 0 20 20`
  }
} as const satisfies { [key: string]: PathsProps };

export type VariantUnion = keyof typeof paths;

export type VariantFields = keyof (typeof paths[VariantUnion])

export type IconProps<K extends VariantUnion> = TsxExclude<
  "svg",
  "xmlns" | "fill" | "version" | "viewBox"
> & { withTitle?: boolean; variant: K };

export const resolveIcon = <
  const T extends VariantUnion,
  const V extends VariantFields
>(
  target: T,
  field: V
) => {
  return paths[target][field];
};

export const IconBase = <K extends VariantUnion>({
  variant,
  withTitle = false,
  ...props
}: IconProps<K>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      fill='currentColor'
      viewBox={resolveIcon(variant, "viewBox")}
      {...props}
    >
      {withTitle ? <title>{variant}</title> : null}
      {resolveIcon(variant, "Icon")}
    </svg>
  );
};