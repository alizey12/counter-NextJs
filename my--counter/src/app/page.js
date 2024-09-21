
import React from "react";
import Counter from "./counter/Counter";
import Image from "next/image";
import img from "../../public/assets/stopwatch.webp"
export default function Home(){
return(
<div>
 
<Profile />

<Counter />

 </div>


);
}

function Profile() {
  return(
<Image src={img} className="w-[100px] h-[100px] bg-pink-200"/>

  );
}


