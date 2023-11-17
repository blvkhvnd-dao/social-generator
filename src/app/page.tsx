"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import localFont from "next/font/local";

const PPRightDidone = localFont({
  src: "../../public/fonts/pp-right-didone.otf",
});

const Row = ({
  title,
  className,
  children,
}: React.PropsWithChildren<{ title: string; className?: string }>) => {
  return (
    <div className={twMerge("flex px-8 gap-2 flex-col md:flex-row", className)}>
      <div className="md:w-56 shrink-0">
        <span className="block uppercase font-medium text-2xl my-2 align-middle">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
};

interface Theme {
  imgPath: string;
}

const THEMES: Theme[] = [
  { imgPath: "/images/themes/1.png" },
  { imgPath: "/images/themes/2.png" },
  { imgPath: "/images/themes/3.png" },
  { imgPath: "/images/themes/4.png" },
  { imgPath: "/images/themes/5.png" },
];

enum Platform {
  X = "X [TWITTER]",
}

interface AcolyteBanner {
  username: string;
  platform?: Platform;
  theme?: Theme;
}

const Preview = ({ banner }: { banner: AcolyteBanner }) => {
  return (
    <div>
      <span className="block text-[#4B4B4B] my-3">
        {banner.platform ?? ""} BANNER
      </span>
      <div className="block relative aspect-[3/1] w-full md:w-500px lg:w-750px bg-blvk-gray">
        <img src={banner.theme?.imgPath} />
        <div className="absolute top-0 left-0 right-0 bottom-0 text-center text-white align-middle">
          <div className="flex w-full h-full items-center justify-center">
            <span>{banner.username}</span>
            <span
              className={`${PPRightDidone.className} text-[50px] md:text-[70px] lg:text-[90px] text-stroke`}
            >
              {banner.username}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Dashboard() {
  const [state, setState] = React.useState<AcolyteBanner>({
    username: "",
    platform: Platform.X,
    theme: undefined,
  });

  const onUsernameInputChanged = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const username = e.target.value;
      setState((old) => ({ ...old, username }));
    },
    [setState]
  );

  const onSelectPlatform = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const platform = e.target.value as Platform;
      setState((old) => ({ ...old, platform }));
    },
    [setState]
  );

  const onSelectTheme = React.useCallback(
    (theme: Theme) => {
      setState((old) => ({ ...old, theme }));
    },
    [setState]
  );

  const onDownload = React.useCallback(() => {
    alert("TODO!");
  }, [state]);

  return (
    <div className="flex flex-col gap-4 pt-3 w-full h-full grow">
      <Row title="Setup">
        <div className="flex flex-col md:flex-row gap-2">
          <input
            className="border border-black p-4 w-60"
            value={state.username}
            onChange={onUsernameInputChanged}
            placeholder="USERNAME *"
            required
          />
          <div className="after:content-['↓'] after:-ml-4">
            <select
              className="border border-black py-4 pl-2 pr-6 w-60 appearance-none bg-white"
              required
              value={state.platform}
              onChange={onSelectPlatform}
            >
              <option disabled>Social media</option>
              <option>X (TWITTER)</option>
            </select>
          </div>
        </div>
      </Row>
      <Row title="Theme">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 -ml-1">
          {THEMES.map((theme, i) => {
            const isSelected = state.theme === theme;
            const selectedCls = isSelected
              ? "border-black"
              : "border-transparent";

            return (
              <div
                className={`relative overflow-hidden hover:cursor-pointer border border-4 ${selectedCls}`}
                key={`theme-${i}`}
                onClick={() => onSelectTheme(theme)}
              >
                <img src={theme.imgPath} />
              </div>
            );
          })}
        </div>
      </Row>

      <Row title="Preview">
        <Preview banner={state} />
      </Row>

      <div className="grow" />

      <Row
        title="Export"
        className="bg-blvk-gray h-36 flex-row items-center justify-between md:justify-start"
      >
        <button
          className="shrink-0 uppercase font-medium text-2xl hover:underline underline md:no-underline"
          onClick={onDownload}
        >
          ↑ DOWNLOAD BANNER
        </button>
      </Row>
    </div>
  );
}
