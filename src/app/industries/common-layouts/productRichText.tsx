import React from "react";

type ProductRichTextProps = {
  data: {
    title: string;
    list: string[];
  };
};

export default function ProductRichText({ data }: ProductRichTextProps) {
  return (
    <section className="w-container-sm blade-bottom-padding-xl">
      <h3 className="xl:w-5/12 lg:w-7/12 sm:w-8/12 w-full font-worksansMedium">
        {data.title}
      </h3>
      <div className="mt-2 sm:flex justify-end ">
        {data.list.map((paragraph, i) => {
          const keyVal = i + data.title;
          return (
            <h6 key={keyVal} className="sm:w-5/12 leading-snug">
              {paragraph}
            </h6>
          );
        })}
      </div>
    </section>
  );
}
