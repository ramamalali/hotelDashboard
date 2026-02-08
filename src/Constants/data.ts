export type SidebarItem = {
  name: string;
  icon: string;
  link: string;
};

export const sidebarItems: SidebarItem[] = [
  {
    name: "Blogs",
    icon: "./public/images/blog.svg",
    link: "/blogs",
  },
  {
    name: "Gallery",
    icon: "./public/images/gallrey.svg",
    link: "/gallery",
  },
  {
    name: "Rooms",
    icon: "./public/images/rooms.svg",
    link: "/rooms",
  },
  {
    name: "Booking",
    icon: "./public/images/booking.svg",
    link: "/booking",
  },
  {
    name: "Explore",
    icon: "./public/images/explore.svg",
    link: "/explore",
  },
  {
    name: "Food",
    icon: "./public/images/food.svg",
    link: "/food",
  },
  {
    name: "Inbox",
    icon: "./public/images/inbox.svg",
    link: "/inbox",
  },
  {
    name: "Logout",
    icon: "./public/images/logout.png",
    link: "/logout",
  },
];
