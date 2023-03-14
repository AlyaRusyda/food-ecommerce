import React, { useState, useEffect } from "react";
import Container from "./Container.js";
import { testi } from "@/data/data.js";
// import url from '../testi.json';

export default function Testi() {
  const [testimonials, setTestimonials] = useState([]);
  const url = "https://api.jsonbin.io/v3/b/640fc5dcebd26539d08e321f";

  useEffect(() => {
    async function getTestimonials() {
      try {
        const data = await fetch(url);
        const testi = await data.json();
        console.log(testi.record.data);
        setTestimonials(testi.record.data);
      } catch(error) {
        console.log(error);
      }
    }
    getTestimonials()
  }, []);

  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 mt-8 mb-4">
        {testi.map((testimonial, index) => (
          <div className="lg:col-span-2 xl:col-auto" key={index}>
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 p-14 rounded-2xl dark:bg-trueGray-800">
              <p className="text-lg leading-normal ">
                {testimonial.testi1}
                <Mark>{testimonial.mark}</Mark>
                {testimonial.testi2}
              </p>
              <Avatar image={testimonial.img} name={testimonial.nama} title={testimonial.title} />
            </div>
          </div>
        ))}
      </div>
      <div className="text-right mb-8">
        <a
          href=""
          className="text-orange-500 text-xl hover:text-orange-700 hover:underline"
        >
          Lihat ulasan lainnya
        </a>
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
