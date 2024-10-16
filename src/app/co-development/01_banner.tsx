import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="min-h-96 w-container text-center blade-top-padding-lg blade-bottom-padding-lg blade-top-margin">
      <h2 className="text-blue font-worksansLight lg:max-w-none max-w-md mx-auto">
        Co-developing opportunities in your <br className="lg:block hidden" />{" "}
        journey from
        <span className="font-playfairSemibold"> plant to brand</span>
      </h2>
      <h5 className="mt-4">
        Making Better Happen™ through collaboration excellence
      </h5>

      <Image
        className="w-container h-auto mt-12"
        src="/assets/coDevelopment/co-development-banner.png"
        layout="responsive"
        width={600}
        height={600}
        alt="AAK logo"
      />
    </div>
  );
}
