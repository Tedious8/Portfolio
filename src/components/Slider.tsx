import { useState } from "react";
import { IoArrowBack, IoArrowForward, IoEllipse } from "react-icons/io5";
import { Image } from "../types";

interface SliderProps {
  Images?: Array<Image>;
}

export default function Slider(props: SliderProps): JSX.Element {
  const { Images = false } = props;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [slidingWindows, setSlidingWindows] = useState<number>(0);

  const Decrement = () => {
    if (Images) {
      if (currentIndex - 1 < 0) return;
      if (currentIndex - 1 >= 2 && currentIndex - 1 < Images.length - 3)
        setSlidingWindows(slidingWindows - 1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const Increment = () => {
    if (Images) {
      if (currentIndex + 1 > Images.length - 1) return;
      if (currentIndex + 1 > 2 && currentIndex + 1 < Images.length - 2)
        setSlidingWindows(slidingWindows + 1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const GetClassBullet = (slidingWindow: number, currentIndex: number) => {
    const abs = Math.abs(slidingWindow - currentIndex);
    let style: string = "";
    switch (abs) {
      case 0:
        style = "text-base text-white";
        break;
      case 1:
        style = "text-sm text-[#00000040]";
        break;
      case 2:
      case 3:
      case 4:
        style = "text-xs text-[#00000040]";
        break;
      default:
        style = "hidden";
        break;
    }
    return style;
  };

  const RenderBullet = (index: number): boolean => {
    if (Images && index > Images.length - 1) return false;
    return true;
  };

  return (
    <article className="flex w-full flex-col gap-8">
      <figure className="flex items-center justify-around gap-6">
        <IoArrowBack
          onClick={Decrement}
          className={(currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100") + " cursor-pointer text-3xl text-white lg:text-5xl"}
        />
        {Images && (
          <div className="rounded-xl bg-[#111]">
            <img
              className="block h-auto max-h-[512px] w-auto rounded-xl object-cover object-center"
              src={`${Images[currentIndex].src}`}
              alt={`${Images[currentIndex].alt}`}
              title={`${Images[currentIndex].alt}`}
            />
          </div>
        )}
        {Images && (
          <IoArrowForward
            onClick={Increment}
            className={(currentIndex === Images.length - 1 ? "opacity-50 cursor-not-allowed" : "opacity-100") + " cursor-pointer text-3xl text-white lg:text-5xl"}
          />
        )}
      </figure>
      <div className="flex items-center justify-center gap-2">
        {RenderBullet(0) && (
          <IoEllipse
            className={`${GetClassBullet(slidingWindows + 0, currentIndex)}`}
          />
        )}
        {RenderBullet(1) && (
          <IoEllipse
            className={`${GetClassBullet(slidingWindows + 1, currentIndex)}`}
          />
        )}
        {RenderBullet(2) && (
          <IoEllipse
            className={`${GetClassBullet(slidingWindows + 2, currentIndex)}`}
          />
        )}
        {RenderBullet(3) && (
          <IoEllipse
            className={`${GetClassBullet(slidingWindows + 3, currentIndex)}`}
          />
        )}
        {RenderBullet(4) && (
          <IoEllipse
            className={`${GetClassBullet(slidingWindows + 4, currentIndex)}`}
          />
        )}
      </div>
    </article>
  );
}
