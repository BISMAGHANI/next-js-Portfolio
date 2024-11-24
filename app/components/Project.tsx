/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Heading from './Heading';
import Card from './Card';


const data = [
  {
    id: 0,
    title: "Shareable Resume Builder",
    desc: "Create Professional Resumes Quickly And Effortlessly With A User-Friendly, Shareable Builder.",
    img: "/resume.png",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 1,
    title: "TODO Website",
    desc: "Efficiently Manage Tasks With A Dynamic React.js To-Do App Featuring Seamless User Experience.",
    img: "/todo-app.png",
    tags: ["React.js"],
  },
  {
    id: 2,
    title: "Article on React & Next.js",
    desc: "Explore The Powerful Features Of Next.js Combined With React.js For Building Fast, Dynamic Web Applications.",
    img: "/article.png",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

const Project = () => {
  return (
    <div className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center '>

   {data.map((el) => (

    <Card key={el.id}
    title={el.title}
    desc={el.desc}
    img={el.img}
    tags={el.tags}/>
    ))
    }
      </div>
    </div>
  );
};

export default Project