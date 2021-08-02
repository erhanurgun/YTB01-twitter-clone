import React from "react";
import { Tweet, Timeline } from "react-twitter-widgets";
import { SearchIcon } from "../icons/Icon";

const Widgets = () => {
  return (
    <aside className="w-80">
      <div className="flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
        <SearchIcon className="w-5 h-5" />
        <input
          type="search"
          placeholder="Search Twitter"
          className=" placeholder-gray-dark bg-transparent focus:outline-none w-full text-sm"
        />
      </div>
      <div className="mx-2">
        <Tweet tweetId="1422203721069568005" />
        {/* TODO: Twitter Timeline Alanı Eklenemedi */}
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "erhan_rgn",
          }}
          options={{
            height: "400",
          }}
        />
        {/* -------------------------------------- */}
      </div>
    </aside>
  );
};

export default Widgets;
