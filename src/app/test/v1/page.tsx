"use client";

import { ComponentV1Factory } from "@/theme/(version1)/version1-theme";
import { ButtonProps } from "@/theme/abstracts/AbstractButton";
import { CardProps } from "@/theme/abstracts/AbstractCard";
import { ButtonType, CardType } from "@/theme/theme.interface";
import { useEffect, useState } from "react";

export default function ButtonFactoryPage() {
  //   const [theme, setTheme] = useState<ComponentV1Factory | null>(null);
  //   useEffect(() => {
  //     setTheme(new ComponentV1Factory());
  //   }, []);
  //   const handleClick = (buttonType: string) => {
  //     console.log(`${buttonType} button clicked`);
  //   };
  //   const buttonProps: { [key in ButtonType]: ButtonProps } = {
  //     [ButtonType.Basic]: {
  //       label: "Basic Button",
  //       onClick: () => handleClick("Basic"),
  //       className: "px-1",
  //     },
  //     [ButtonType.Disabled]: {
  //       label: "Disabled Button",
  //       onClick: () => handleClick("Disabled"),
  //       className: "px-1",
  //     },
  //     [ButtonType.Emphasized]: {
  //       label: "Emphasized Button",
  //       onClick: () => handleClick("Emphasized"),
  //       className: "px-1",
  //     },
  //   };
  //   const cardProps: { [key in CardType]: CardProps } = {
  //     [CardType.Basic]: {
  //       title: "Basic Card",
  //       content: "This is a basic card.",
  //       className: "m-4",
  //       children: theme?.createButton(ButtonType.Basic, {
  //         label: "Click Me",
  //         onClick: () => handleClick("Basic"),
  //         className: "px-1",
  //       }),
  //     },
  //     [CardType.Image]: {
  //       title: "Image Card",
  //       content: "This card has an image.",
  //       className: "m-4",
  //       imageUrl: "https://via.placeholder.com/150", // 테스트용 이미지 URL
  //       children: <img src="https://via.placeholder.com/150" alt="Placeholder" />, // 추가된 부분
  //     },
  //     [CardType.Profile]: {
  //       title: "Profile Card",
  //       content: "This card shows a profile.",
  //       className: "m-4",
  //       profileImageUrl: "https://via.placeholder.com/150", // 테스트용 프로필 이미지 URL
  //       name: "John Doe",
  //       children: <p>Additional Profile Info</p>, // 추가된 부분
  //     },
  //   };
  //   if (!theme) {
  //     return <div>Loading...</div>;
  //   }
  //   return (
  //     <div>
  //       <h1>Button Factory Page</h1>
  //       {Object.keys(buttonProps).map((type) => (
  //         <div key={type}>
  //           {theme.createButton(
  //             type as ButtonType,
  //             buttonProps[type as ButtonType]
  //           )}
  //         </div>
  //       ))}
  //       <h1>Card Factory Page</h1>
  //       {Object.keys(cardProps).map((type) => (
  //         <div key={type}>
  //           {theme.createCard(type as CardType, cardProps[type as CardType])}
  //         </div>
  //       ))}
  //     </div>
  //   );
}
