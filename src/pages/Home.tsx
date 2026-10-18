import React, { useContext, useEffect, useRef } from "react";
import HomeImg from "./../../public/photos/home-photo.jpg";
import { Button } from "../components/ui/button";

const TiktokIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      width="20"
      viewBox="0 0 640 640"
    >
      <path d="M544.5 273.9C500.5 274 457.5 260.3 421.7 234.7L421.7 413.4C421.7 446.5 411.6 478.8 392.7 506C373.8 533.2 347.1 554 316.1 565.6C285.1 577.2 251.3 579.1 219.2 570.9C187.1 562.7 158.3 545 136.5 520.1C114.7 495.2 101.2 464.1 97.5 431.2C93.8 398.3 100.4 365.1 116.1 336C131.8 306.9 156.1 283.3 185.7 268.3C215.3 253.3 248.6 247.8 281.4 252.3L281.4 342.2C266.4 337.5 250.3 337.6 235.4 342.6C220.5 347.6 207.5 357.2 198.4 369.9C189.3 382.6 184.4 398 184.5 413.8C184.6 429.6 189.7 444.8 199 457.5C208.3 470.2 221.4 479.6 236.4 484.4C251.4 489.2 267.5 489.2 282.4 484.3C297.3 479.4 310.4 469.9 319.6 457.2C328.8 444.5 333.8 429.1 333.8 413.4L333.8 64L421.8 64C421.7 71.4 422.4 78.9 423.7 86.2C426.8 102.5 433.1 118.1 442.4 131.9C451.7 145.7 463.7 157.5 477.6 166.5C497.5 179.6 520.8 186.6 544.6 186.6L544.6 274z" />
    </svg>
  );
};

const GithubIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      width="20"
      viewBox="0 0 640 640"
    >
      <path
        fill="rgb(255, 255, 255)"
        d="M280.5 426.5C214.5 418.5 168 371 168 309.5C168 284.5 177 257.5 192 239.5C185.5 223 186.5 188 194 173.5C214 171 241 181.5 257 196C276 190 296 187 320.5 187C345 187 365 190 383 195.5C398.5 181.5 426 171 446 173.5C453 187 454 222 447.5 239C463.5 258 472 283.5 472 309.5C472 371 425.5 417.5 358.5 426C375.5 437 387 461 387 488.5L387 540.5C387 555.5 399.5 564 414.5 558C505 523.5 576 433 576 321C576 179.5 461 64 319.5 64C178 64 64 179.5 64 321C64 432 134.5 524 229.5 558.5C243 563.5 256 554.5 256 541L256 501C249 504 240 506 232 506C199 506 179.5 488 165.5 454.5C160 441 154 433 142.5 431.5C136.5 431 134.5 428.5 134.5 425.5C134.5 419.5 144.5 415 154.5 415C169 415 181.5 424 194.5 442.5C204.5 457 215 463.5 227.5 463.5C240 463.5 248 459 259.5 447.5C268 439 274.5 431.5 280.5 426.5z"
      />
    </svg>
  );
};

export default function Home() {
  return (
    <section
      className="w-full h-fit py-14 flex flex-col justify-start items-center gap-8 lg:mt-24 lg:flex-row lg:justify-between"
      id="Home"
    >
      <div className="mt-8 w-full flex justify-center items-center order-1 md:mt-12 lg:order-2 lg:justify-end lg:mt-0">
        <img
          src={HomeImg}
          className="rounded-2xl max-h-140 lg:max-h-120"
          alt="Photo"
          loading="lazy"
        />
      </div>
      <div className="flex justify-center items-start gap-2 flex-col order-2 min-[548px]:text-center min-[548px]:items-center lg:order-1 lg:text-left lg:items-start">
        <h2>
          Welcome to{" "}
          <span className="text-[#3483d0] font-ArchivoBlack">
            Portfolio 3.0
          </span>
        </h2>
        <h3 className="text-2xl font-BlackOpsOne">
          Hi, I'm <span className="text-[#3483d0] underline">Gel</span>
        </h3>
        <h1 className="text-[clamp(3rem,4vw,5rem)] max-w-124 font-Bungee">
          Beginner <span className="text-[#3483d0]">Web Developer</span>
        </h1>
        <p className="font-extralight min-[540px]:text-justify min-[540px]:w-[80%] lg:text-sm xl:text-base">
          build modern, responsive, and user-friendly web applications. I enjoy
          turning ideas into functional digital experiences while continuously
          learning and improving my skills. Currently exploring frontend and
          backend development, with a focus on writing clean, maintainable code
          and building meaningful projects.
        </p>

        <div className="flex gap-2 mt-2 justify-start items-start w-full min-[540px]:justify-center lg:justify-start">
          <Button
            className="w-24 flex gap-2"
            onClick={() =>
              location.assign("https://www.tiktok.com/@_gelsiiiii")
            }
          >
            <TiktokIcon /> Tiktok
          </Button>
          <Button
            className="w-24 border border-white flex gap-2"
            variant={"secondary"}
            onClick={() => location.assign("https://github.com/gelsii")}
          >
            <GithubIcon /> Github
          </Button>
        </div>
      </div>
    </section>
  );
}
