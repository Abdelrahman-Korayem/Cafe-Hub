import type { IconName } from "./icons";

export type NavItem = {
  label: string;
  href: string;
  icon: IconName;
  exact?: boolean;
  badge?: string;
};

export type NavSection = {
  title: string;
  items: NavItem[];
};

export type ShellUser = {
  name: string;
  role: string;
  scope?: string;
};