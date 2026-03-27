import { notifications } from "@/data/siteData";

const NotificationBar = () => {
  const doubled = [...notifications, ...notifications];
  return (
    <div className="bg-secondary overflow-hidden py-2.5 border-b border-border">
      <div className="flex animate-scroll-left whitespace-nowrap">
        {doubled.map((n, i) => (
          <a key={`${n.id}-${i}`} href={n.link} className="inline-flex items-center px-6 text-xs text-secondary-foreground font-medium hover:underline shrink-0">
            {n.text}
            <span className="mx-6 text-border">•</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NotificationBar;
