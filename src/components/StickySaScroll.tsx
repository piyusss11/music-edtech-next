import { StickyScroll } from "./ui/sticky-scroll-reveal";
import stickyContent from "@/data/dance_sticky.json";

const StickySaScroll = () => {
  const danceContent = stickyContent.data;

  return (
    <div className="h-full">
      <StickyScroll content={danceContent} />
    </div>
  );
};

export default StickySaScroll;
