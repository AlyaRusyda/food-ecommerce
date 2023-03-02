import Image from "next/image";
import React from "react";
import Container from "./Container.js";

export default function Testi() {
  const testi = [
    {
      nama: "Rainnnn",
      title: "Classmate",
      testi1: "Share a real ",
      mark: "testimonial",
      testi2:
        "that hits some of your benefits from one of your popular customer.",
      img: "/images/rain.jpg",
    },
    {
      nama: "Risha Luffy",
      title: "Classmate",
      testi1: "This is an ",
      mark: "awesome",
      testi2:
        " landing page template I've seen. I would use this for anything.",
      img: "/images/logo.jpg",
    },
    {
      nama: "Kafanal Kafi",
      title: "Classmate",
      testi1: "Make sure you only pick the ",
      mark: "right sentence",
      testi2: "to keep it short and simple.",
      img: "/images/kafi.jpg",
    },
  ];
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
      {testi.map((testi) => (
        <div className="lg:col-span-2 xl:col-auto">
              <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
                <p className="text-2xl leading-normal ">
                  {testi.testi1}
                  <Mark>{testi.mark}</Mark>
                  {testi.testi2}
                </p>
                <Avatar
                  image={testi.img}
                  name={testi.nama}
                  title={testi.title}
                />
                </div>
        </div>
        ))}
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center justify-center mt-8 w-fit self-center gap-x-4">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14 mx-auto">
        <img
          src={props.image}
          width="60"
          height="60"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div className="text-left">
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-orange-600 dark:text-orange-400">
          {props.title}
        </div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-orange-600 bg-orange-50 rounded-md ring-orange-50 ring-4 dark:ring-orange-600 dark:bg-orange-600 dark:text-orange-50">
        {props.children}
      </mark>{" "}
    </>
  );
}
