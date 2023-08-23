import React from "react";

export default function Navbar() {
  return (
    <div class="navbar bg-base-100">
      <div class="flex-1 h-16">
        <img class="h-full" src="/images/logo.png" />
      </div>
      <div class="flex-none gap-2">
        <div class="form-control w-full">
          <input
            type="text"
            placeholder="Search"
            class="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full bg-slate-300">
              {/* <img src="https://resource.skilllane.com/images/Logo/logo.png" /> */}
            </div>
          </label>
          <ul
            tabindex="0"
            class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
