import type { ReactNode } from "react";

interface iconProps {
  icon: ReactNode;
  url: string;
}

interface linkProps {
  text: string;
  url: string;
}

export type { iconProps, linkProps };
