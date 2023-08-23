import React from "react";
import CourseCard from "../components/CourseCard";

export default function Home() {
  const course = [...Array(10).keys()];
  return (
    <>
      <div class="flex gap-8 p-5 flex-wrap justify-around">
        {course.map((item) => {
          return <CourseCard item={item} />;
        })}
      </div>
    </>
  );
}
