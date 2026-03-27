import { notifications } from "@/data/siteData";

const NotificationBar = () => {
  const doubled = [...notifications, ...notifications];

  return (
    <div className="bg-primary text-primary-foreground overflow-hidden py-2">
      <div className="flex animate-scroll-left whitespace-nowrap">
        {doubled.map((n, i) => (
          <a
            key={`${n.id}-${i}`}
            href={n.link}
            className="inline-flex items-center px-8 text-sm hover:underline shrink-0"
          >
            {n.text}
            <span className="mx-8 opacity-40">|</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NotificationBar;
