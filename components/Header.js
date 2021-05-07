/// Next Components ///
import Image from "next/image";

/// Custom Components ///
import HeaderItem from "./HeaderItem";

/// Tailwind Icons ///
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Items = [
  {
    Icon: HomeIcon,
    title: "HOME",
  },
  {
    Icon: LightningBoltIcon,
    title: "LIGHNING",
  },
  {
    Icon: BadgeCheckIcon,
    title: "BADGE CHECK",
  },
  {
    Icon: CollectionIcon,
    title: "COLLECTIONS",
  },
  {
    Icon: SearchIcon,
    title: "SEARCH",
  },
];

function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        {Items.map((itemProps, i) => (
          <HeaderItem key={i} {...itemProps} />
        ))}
      </div>
      <div className="flex items-center">
        <Image
          className="object-contain"
          src="https://links.papareact.com/ua6"
          width={175}
          height={75}
        />
      </div>
    </header>
  );
}

export default Header;
