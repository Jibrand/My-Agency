"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="We are ready to help"
          paragraph="Discuss the Project with us we will give you a better digital solution for your business and Customers."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src="/images/video/video.jpg" alt="video image" fill />
                <div className="absolute top-0 right-0 flex h-full w-full items-center justify-center">
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="HGSR3FDVkkQ"
        onClose={() => setOpen(false)}
      />

      <div className="absolute bottom-0 left-0 right-0 z-[-1]">
        <img src="/images/video/shape.svg" alt="shape" className="w-full" />
      </div>
    </section>
  );
};

export default Video;
