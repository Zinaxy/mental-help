import React from "react";
import { BreadCrump, Story } from "../components";
import { Carousel } from "flowbite-react";

const Stories = () => {
  const Stories = [
    {
      id: 0,
      story:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquid aut maxime dignissimos voluptatum rerum? Voluptates laborum hic perspiciatis laboriosam aliquid? Unde, laboriosam!",
      name: "Bee Zinaxy",
      work: "CEO at Google",
    },
    {
      id: 1,
      story:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquid aut maxime dignissimos voluptatum rerum? Voluptates laborum hic perspiciatis laboriosam aliquid? Unde, laboriosam!",
      name: "Bee Zinaxy",
      work: "CEO at Google",
    },
    {
      id: 2,
      story:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquid aut maxime dignissimos voluptatum rerum? Voluptates laborum hic perspiciatis laboriosam aliquid? Unde, laboriosam!",
      name: "Bee Zinaxy",
      work: "CEO at Google",
    },
    {
      id: 3,
      story:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquid aut maxime dignissimos voluptatum rerum? Voluptates laborum hic perspiciatis laboriosam aliquid? Unde, laboriosam!",
      name: "Bee Zinaxy",
      work: "CEO at Google",
    },
    {
      id: 4,
      story:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquid aut maxime dignissimos voluptatum rerum? Voluptates laborum hic perspiciatis laboriosam aliquid? Unde, laboriosam!",
      name: "Bee Zinaxy",
      work: "CEO at Google",
    },
  ];
  return (
    <section
      id='frequently-asked-questions'
      className='text-center items-center dark:bg-gray-900 dark:text-slate-100'
    >
      {/* bread crupm */}
      <BreadCrump title='Top Tranding Stories' />
      {/* register btn */}
      <div className='flex justify-center text-center mt-10 dark:bg-slate-900'>
        <div className='text-center w-full'>
          <div className='flex flex-col justify-between items-center text-center'>
            <Carousel>
              {Stories.map((story) => {
                return (
                  <Story
                    key={story.id}
                    storyText={story.story}
                    author={story.name}
                    workPlace={story.work}
                  />
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
