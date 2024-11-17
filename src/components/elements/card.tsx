import { AnchorHTMLAttributes, ComponentProps, ReactNode, RefAttributes } from 'react';

import Link, { LinkProps } from 'next/link';

import { ExternalLinkIcon, EyeNoneIcon } from '@radix-ui/react-icons';
import { IconProps } from '@radix-ui/react-icons/dist/types';

import Heading3, { Heading3Props } from '@/element/heading3';
import Text, { TextProps } from '@/element/text';

import { cn } from '@/util/style.util';

export type CardProps = ComponentProps<'div'>;

export const CardRoot = ({ className, ...props }: CardProps) => {
  return <div {...props} className={cn('flex flex-col gap-3', className)} />;
};

export type LinkCardProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  LinkProps & {
    children?: ReactNode | undefined;
  } & RefAttributes<HTMLAnchorElement>;

export const LinkCardRoot = ({ href, className, ...props }: LinkCardProps) => {
  return (
    <Link
      className={cn(
        '-m-4 flex cursor-pointer flex-col gap-3 rounded-md p-4 transition-all duration-100 ease-in-out hover:bg-primary/5',
        className,
      )}
      href={href}
      {...props}
    />
  );
};

export type CardHeaderProps = ComponentProps<'div'>;

export const CardHeader = ({ className, ...props }: CardHeaderProps) => {
  return <div className={cn('flex items-center gap-2', className)} {...props} />;
};

export type CardTitleProps = Heading3Props;

export const CardTitle = (props: CardTitleProps) => {
  return <Heading3 {...props} />;
};

export type CardContentProps = TextProps;

export const CardContent = (props: CardContentProps) => {
  return <Text {...props} />;
};

export type CardExternalIconProps = IconProps;

export const CardExternalIcon = ({ className, ...props }: CardExternalIconProps) => {
  return <ExternalLinkIcon className={cn('h-[22px] w-[22px]', className)} {...props} />;
};

export type CardEyeClosedIconProps = IconProps;

export const CardEyeNoneIcon = ({ className, ...props }: CardEyeClosedIconProps) => {
  return <EyeNoneIcon className={cn('h-[22px] w-[22px]', className)} {...props} />;
};

export {
  LinkCardRoot as LinkRoot,
  CardRoot as Root,
  CardHeader as Header,
  CardTitle as Title,
  CardContent as Content,
  CardExternalIcon as ExternalIcon,
  CardEyeNoneIcon as EyeNoneIcon,
};