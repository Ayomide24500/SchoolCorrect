import girl1 from "../assets/mainimgs/Studygirl.jpeg";
import girl2 from "../assets/mainimgs/Laptopgirl.jpg";
import child from "../assets/mainimgs/Childyellowbg.jpg";
import { Link } from "react-router-dom";
import { FC, useState } from "react";

interface iCardProps {
  text?: string;
  num: number;
  bgColor: string;
}

export const CardProps: FC<iCardProps> = ({ text, num, bgColor }) => {
  return (
    <div className={`h-full m-2 p-[15px] full bxs rounded-md ${bgColor}`}>
      <div className="w-full flex justify-start">
        <h1 className="text-[30px] py-1 px-3 text-blue-950 mb-2 rounded-[50%] bg-white flex justify-center items-center">
          {num}
        </h1>
      </div>
      <div className="text-[24px] text-blue-950 mb-2 font-semibold">
        Standardization
      </div>
      <p className="text-blue-950">{text}</p>
    </div>
  );
};

const Feature = () => {
  document.title = "Features";
  return (
    <div className="mt-[70px] w-full bg-white-400 flex justify-center items-start">
      <div className="w-[97%]">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 pb-[30px]">
          <div className="pt-[20px] md:pt-[50px]">
            <div className="p-[20px]">
              <div className="text-blue-950 text-[45px] md:text-[48px] lg:text-[60px] font-bold mb-2">
                Features
              </div>
              <div className="mb-5">
                <h1 className=" text-[30px] md:text-[28px] lg:text-[35px] font-semibold text-indigo-700">
                  <span className="text -blue-950 font-bold">NEXT</span> ipsum
                  dolor sit amet consectetur adipisicing elit. Dolorum quam
                  cumque, aliquam quae tempore doloremque laborum.
                </h1>
              </div>
              <div className="mb-5">
                <p className="text-black text-lg">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facere maxime, iure dolores culpa voluptates eligendi
                  doloremque nesciunt aperiam officia minima, ex nam velit, iste
                  eum mollitia atque obcaecati fugiat! Vero. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Minima, molestiae et.
                  Nostrum ullam nihil atque ipsa, maxime error, architecto
                  fugiat quaerat consectetur distinctio obcaecati necessitatibus
                  impedit, officiis esse id consequatur. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Laboriosam, molestiae.
                  Culpa asperiores deleniti suscipit eaque distinctio magnam
                  eveniet, quibusdam voluptas neque dolorum assumenda qui.
                </p>
              </div>
              <div className="">
                <Link to="/auth">
                  <button className="py-2 md:py-3 px-5 text-white bg-blue-950 rounded-3xl">
                    Join us
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="h-[700px] pt-[80px] flex justify-center items-center ">
            <div className="h-[530px] w-[75%] md:w-[73%] rounded-lg bg-gray-100 relative">
              <img
                src={girl1}
                alt=""
                className="rounded-md object-cover w-[450px] h-[310px] absolute right-[-50px] top-[-60px]"
              />
              <img
                src={girl2}
                alt=""
                className="rounded-md object-cover w-[450px] h-[310px] absolute left-[-50px] bottom-[-60px]"
              />
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 py-[50px]">
          <div className="h-[400px] mb-[30px]">
            <img
              src={child}
              alt=""
              className="h-full w-full p-[20px] md:w-[90%] object-cover"
            />
          </div>
          <div className=" ">
            <div className="text-[20px] text-blue-950 font-bold">Features</div>
            <div className="mb-5 text-[28px] text-black">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Expedita, enim earum. Optio quisquam mollitia saepe ad
              exercitationem harum, nam temporibus atque fugit necessitatibus
              excepturi!
            </div>
            <div className="mb-5 text-blue-950 flex justify-between items-center flex-col gap-[25px]">
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                reprehenderit natus repellat similique. Earum, amet inventore
                dolore nam rem maxime dolor libero saepe omnis obcaecati,
                nostrum reprehenderit illo dicta fugit.
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                autem sit aliquam in, eum magni rerum est recusandae ducimus
                nemo itaque asperiores optio deserunt. Placeat aliquid veniam
                temporibus voluptas deleniti.
              </div>
            </div>
            <div className="">
              <Link to="/auth">
                <button className="py-2 md:py-3 px-5 text-white bg-blue-950 rounded-3xl hover:animate-pulse">
                  Learn More →
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="py-[50px] flex justify-center items-center flex-col">
          <div className="w-full text-center text-[25px] text-blue-950 font-bold mb-5 ">
            More Features
          </div>
          <div className="text-center text-black text-[40px] font-semibold mb-5">
            By Joining <span className="text-blue-950 font-bold">NEXT,</span>{" "}
            <br />
            Your School Will Be Open To Alot Of Benefits
          </div>
          <div className="text-center w-[90%] lg:w-[50%] mb-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              natus, numquam odio modi molestias totam aspernatur sit recusandae
              accusamus porro laborum, quos adipisci. Consequuntur aperiam
              aliquid veritatis esse error! Assumenda?
            </p>
          </div>
          <div className="w-[85%] md:w-[80%] lg:w-[78%] pt-[30px] ">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] ">
              <div className="flex justify-center items-center">
                <CardProps
                  num={1}
                  bgColor="bg-blue-50"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, suscipit nisi odio nesciunt et perspiciatis, ad excepturi eveniet libero at obcaecati! Dolor esse obcaecati enim cupiditate dolorem quae, quaerat earum!"
                />
              </div>
              <div className="flex justify-center items-center">
                <CardProps
                  num={2}
                  bgColor="bg-gray-50"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, suscipit nisi odio nesciunt et perspiciatis, ad excepturi eveniet libero at obcaecati! Dolor esse obcaecati enim cupiditate dolorem quae, quaerat earum!"
                />
              </div>
              <div className="flex justify-center items-center">
                <CardProps
                  num={3}
                  bgColor="bg-blue-50"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, suscipit nisi odio nesciunt et perspiciatis, ad excepturi eveniet libero at obcaecati! Dolor esse obcaecati enim cupiditate dolorem quae, quaerat earum!"
                />
              </div>
              <div className="flex justify-center items-center">
                <CardProps
                  num={4}
                  bgColor="bg-gray-50"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, suscipit nisi odio nesciunt et perspiciatis, ad excepturi eveniet libero at obcaecati! Dolor esse obcaecati enim cupiditate dolorem quae, quaerat earum!"
                />
              </div>
              <div className="flex justify-center items-center">
                <CardProps
                  num={5}
                  bgColor="bg-blue-50"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, suscipit nisi odio nesciunt et perspiciatis, ad excepturi eveniet libero at obcaecati! Dolor esse obcaecati enim cupiditate dolorem quae, quaerat earum!"
                />
              </div>
              <div className="flex justify-center items-center">
                <CardProps
                  num={6}
                  bgColor="bg-gray-50"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, suscipit nisi odio nesciunt et perspiciatis, ad excepturi eveniet libero at obcaecati! Dolor esse obcaecati enim cupiditate dolorem quae, quaerat earum!"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feature;
