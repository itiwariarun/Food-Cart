import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  CogIcon,
  LockClosedIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
const features = [
  {
    name: "Push your recipe",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Secured Payment",
    description:
      "Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple Methods",
    description:
      "Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced Security",
    description:
      "Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Customize Your account and needs",
    description:
      "Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis labore quaerat ipsum quaerat id.",
    icon: CogIcon,
  },
  {
    name: "Open Your Cloud Kitchen",
    description:
      "Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.",
    icon: ServerIcon,
  },
];
const blogPosts = [
  {
    id: 1,
    title: "Boost your order",
    href: "#",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { name: "Article", href: "#" },
    imageUrl:
      "https://www.listchallenges.com/f/items/8828a399-234b-46af-a3a5-abaf93635721.jpg",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    author: {
      name: "Roel Aufderehar",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    readingLength: "6 min",
  },
  {
    id: 2,
    title: "How to use your cloud kitchen",
    href: "#",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    category: { name: "Video", href: "#" },
    imageUrl:
      "https://www.listchallenges.com/f/items/b6643b59-643f-4922-b863-dae1ce2cdd88.jpg",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    author: {
      name: "Brenna Goyette",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    readingLength: "4 min",
  },
  {
    id: 3,
    title: "Customize Your needs",
    href: "#",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    category: { name: "Case Study", href: "#" },
    imageUrl:
      "https://www.listchallenges.com/f/items/70e3ef46-846d-40ba-ab86-fce67a37d3b7.jpg",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    author: {
      name: "Daniela Metz",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    readingLength: "11 min",
  },
];
export { features, blogPosts };
