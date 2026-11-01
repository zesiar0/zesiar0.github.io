import type { Props } from "astro";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconRss from "@/assets/icons/IconRss.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    href: SITE.profile,
    linkTitle: "jiahua 的 GitHub",
    icon: IconGitHub,
  },
  {
    name: "RSS",
    href: "/rss.xml",
    linkTitle: "订阅博客 RSS",
    icon: IconRss,
  },
];

export const SHARE_LINKS: Social[] = [];
