import React, { useState, useEffect } from "react"
import { animate, motion } from "framer-motion"
import { useAnimation } from "framer-motion"
import { useInView } from "framer-motion"

class Article {
  constructor(title){
    this.title = title;
  }
}

export default function Home() {

  

  return (
    <div className="relative h-screen w-full bg-gray-300">
      <div className="absolute top-0 left-0 w-full h-full bg-red-400">
        <div className="flex items-center justify-center">
          <button className="text-xl">MENU</button>
        </div>
      </div>
    </div>
  )
}
