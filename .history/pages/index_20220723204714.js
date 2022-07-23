import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useAnimation } from "framer-motion"
import { useInView } from "framer-motion"

export default function Home() {

  return (
    <div>
      <div className="h-screen w-screen bg-red-200 flex justify-center items-center">
          <div className="bg-black w-[120px] h-[120px] text-white rounded-md">
          </div>
      </div>
      <div className="h-screen w-screen bg-blue-200">
      </div>
      <div className="h-screen w-screen bg-yellow-200">

      </div>
    </div>
  )
}
