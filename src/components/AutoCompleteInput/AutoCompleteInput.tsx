"use client";
import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/components/Spinner";

const AutoCompleteInput = () => {
  const [input, setInput] = useState("");

  // Change handler function
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  // Fetcher function
  const fetchAnime = (input: string) => {
    return axios.get(`https://api.jikan.moe/v4/anime?q=${input}`);
  };

  // Using the useQuery hook
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["anime", input],
    queryFn: () => fetchAnime(input)
  });
  const results = data?.data.data;

  return (
    <div className="mt-4 flex w-[300px] flex-col gap-2 self-center rounded bg-slate-500 p-4 shadow-md">
      <h1 className="text-white">Search Anime</h1>
      <input
        className="h-8 rounded-sm px-2"
        type="text"
        onChange={handleChange}
        value={input}
      />
      <button
        className="h-10 rounded-sm bg-[#163a74] text-white hover:bg-blue-800"
        type="submit">
        Submit
      </button>
      {input && (
        <div className="h-48 w-full">
          {isLoading && (
            <div className="flex h-full w-full items-center justify-center">
              <Spinner className="h-12 w-12" />
            </div>
          )}
          {isError && <div>Request failed</div>}
          {isSuccess && (
            <div className="h-full overflow-y-scroll">
              {results.map((anime) => {
                return <div key={anime.mal_id}>{anime.title}</div>;
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AutoCompleteInput;
