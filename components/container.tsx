import { cn } from "@/lib/utils";

type ContainerProps = {
    className?: string,
    large?: boolean,
    alt?: boolean,
    children: React.ReactNode,
}

export default function Container(props:ContainerProps) {
  return (
    <div
      className={cn(
        "container px-8 mx-auto xl:px-5",
        props.large ? " max-w-screen-6xl" : " max-w-screen-4xl",
        !props.alt && " py-3 lg:py-5",
        props.className
      )}>
      {props.children}
    </div>
  );
}
