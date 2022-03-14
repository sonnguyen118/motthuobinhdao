import React from "react";
import Image from "next/image";

const SlideShow_AboutUs = () => {
  return (
    // <!-- 3D Slideshow Section -->
    <section id="slideshow">
      <div className="entire-content">
        <div className="content-carrousel">
          <figure className="shadow">
            <Image
              src={`/media/Untitled-1.png`}
              width={250}
              height={180}
              alt="description of image"
            />
          </figure>
          <figure className="shadow">
            <Image
              src={`/media/Untitled-2.png`}
              width={250}
              height={180}
              alt="description of image"
            />
          </figure>
          <figure className="shadow">
            <Image
              src={`/media/Untitled-3.png`}
              width={250}
              height={180}
              alt="description of image"
            />
          </figure>
          <figure className="shadow">
            <Image
              src={`/media/Untitled-4.png`}
              width={250}
              height={180}
              alt="description of image"
            />
          </figure>
          <figure className="shadow">
            <Image
              src={`/media/Untitled-5.png`}
              width={250}
              height={180}
              alt="description of image"
            />
          </figure>
          <figure className="shadow">
            <Image
              src={`/media/Untitled-6.png`}
              width={250}
              height={180}
              alt="description of image"
            />
          </figure>
          <figure className="shadow">
            <Image
              src={`/media/Untitled-7.png`}
              width={250}
              height={180}
              alt="description of image"
            />
          </figure>
          <figure className="shadow">
            <Image
              src={`/media/Untitled-8.png`}
              width={250}
              height={180}
              alt="description of image"
            />
          </figure>
          <figure className="shadow">
            <Image
              src={`/media/Untitled-9.png`}
              width={250}
              height={180}
              alt="description of image"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default SlideShow_AboutUs;
