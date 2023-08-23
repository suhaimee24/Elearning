import React from "react";

export default function CourseCard({ item }) {
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="/images/image_course.webp" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {item}
          <div class="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <div class="badge badge-outline">Fashion</div>
          <div class="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
}
