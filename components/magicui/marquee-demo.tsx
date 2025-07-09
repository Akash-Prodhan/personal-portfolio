import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "React.js",
    img: "/react.png",
  },
  {
    name: "Docker",
    img: "/docker.webp",
  },
  {
    name: "Python",
    img: "/python.png",
  },
  {
    name: "JavaScript",
    img: "/javascript.png",
  },
  {
    name: "Tailwind",
    img: "/tailwind.png",
  },
  {
    name: "MongoDB",
    img: "/mongodb.png",
  },
  {
    name: "HTML",
    img: "/html.png",
  },
  {
    name: "CSS",
    img: "/css.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
}: {
  img: string;
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full sm:w-52 w-36 cursor-pointer overflow-hidden rounded-xl border p-3 max-sm:p-2 max-sm:pointer-events-none",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2 ">
        <img className="h-[50px] max-sm:h-[30px]" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-[18px] max-sm:text-[16px] font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
