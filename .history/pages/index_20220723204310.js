import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useAnimation } from "framer-motion"
import { useInView } from "framer-motion"

export default function Home() {

  return (
    <>
      <div className="h-screen w-screen bg-red-200">
        <div className="flex items-center justify-center">
          <div className="bg-black w-42 h-42 rounded-md">

          </div>
        </div>
      </div>
      <div className="h-screen w-screen bg-blue-200">
        
      </div>
      <div className="h-screen w-screen bg-yellow-200">

      </div>
    </>
  )
}
