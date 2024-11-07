"use client"
import Image from "next/image"
import theLinkImage from "/public/the-link/image1.png"
import zone from "/public/the-zone/image1.png"
import polestar from "/public/polestar-event/image1.png"
import dare from "/public/dare-to-wrangler/image1.png"
import zeekr from "/public/zeekr-car/image1.png"
import uae from "/public/uae-innovate/image1.png"

const works = [
  {
    name: "",
    images: theLinkImage
  },
  {
    name: "",
    images: zone
  },
  {
    name: "",
    images: polestar
  },
  {
    name: "",
    images: dare
  },
  {
    name: "",
    images: uae
  },
  {
    name: "",
    images: zeekr
  }
]

const Work = () => {
  return (
    <div id="work" className="page-content my-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-12">
          {works.map(({name, images}, i) => (
            <div key={i}>
              <div className="relative aspect-w-7 aspect-h-5 rounded-xl overflow-hidden">
                <Image src={images} alt="the link image" fill className="object-cover" />
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
