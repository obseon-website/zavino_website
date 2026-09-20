export type Reel = {
  id: string;
  title: string;
  category: string;
  duration: string;
  alt: string;
};
export const reels: Reel[] = [
  {
    id: "07",
    title: "Over an open flame",
    category: "Food film",
    duration: "0:22",
    alt: "Flame-grilled chicken in a Zavino restaurant film",
  },
  {
    id: "06",
    title: "The finer details",
    category: "Product film",
    duration: "0:17",
    alt: "A tan leather wallet, filmed in close detail",
  },
  {
    id: "03",
    title: "Made to savour",
    category: "Food film",
    duration: "0:19",
    alt: "An overhead arrangement of food and fresh ingredients",
  },
  {
    id: "02",
    title: "A sense of place",
    category: "Restaurant film",
    duration: "0:44",
    alt: "A restaurant interior and its carefully considered details",
  },
  {
    id: "10",
    title: "From the kitchen",
    category: "Food film",
    duration: "0:20",
    alt: "A chef preparing a plated meal in close-up",
  },
  {
    id: "13",
    title: "At the table",
    category: "Food film",
    duration: "0:27",
    alt: "A finished restaurant dish with vegetables on a dark plate",
  },
  {
    id: "04",
    title: "All in the plate",
    category: "Food film",
    duration: "0:15",
    alt: "A steak dish with potatoes and vegetables",
  },
  {
    id: "05",
    title: "A moment to pour",
    category: "Beverage film",
    duration: "0:16",
    alt: "Tea pouring into a clear glass teapot",
  },
  {
    id: "12",
    title: "A seat at the table",
    category: "Restaurant reel",
    duration: "0:05",
    alt: "A montage of restaurant food and interiors",
  },
  {
    id: "11",
    title: "On the menu",
    category: "Motion creative",
    duration: "0:09",
    alt: "A T-bone steak menu creative",
  },
  {
    id: "01",
    title: "From shoot to screen",
    category: "Behind the scenes",
    duration: "0:25",
    alt: "Before and after footage alongside an editing timeline",
  },
  {
    id: "08",
    title: "Made for the feed",
    category: "Product showreel",
    duration: "0:39",
    alt: "A product video sequence and its creative production",
  },
  {
    id: "09",
    title: "The craft behind the cut",
    category: "Behind the scenes",
    duration: "0:25",
    alt: "A comparison of original footage and the final edit",
  },
];
export const reelMedia = (reel: Reel) => ({
  title: reel.title,
  description: `${reel.category} by Zavino. Showreel ${reel.id} from our selected work.`,
  image: `reels/${reel.id}-poster`,
  video: `reels/${reel.id}`,
  alt: reel.alt,
});
