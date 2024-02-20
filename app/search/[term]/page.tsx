import { notFound } from "next/navigation";
import React from "react";
type Props = {
  params: {
    term: string;
  };
};

function Searchpage({ params: { term } }: Props) {
  if (!term) notFound();
  const termToUse = decodeURI(term);
  return <div>welcome to the search page : {termToUse}</div>;
}

export default Searchpage;
