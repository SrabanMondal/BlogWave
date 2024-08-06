"use client"
import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "@/utils/animations"
import { ReactNode, useEffect, useState } from "react"
import { Tooltip } from "@chakra-ui/react"

interface Props {
  href: string
  children: ReactNode
  label:string
  open:boolean
}

const TransitionLink = ({ href, children,label, open }: Props) => {
  const router = useRouter()
  const pathname = usePathname()
  const handleClick = () => {
    setisOpen(false)
    if (pathname !== href) {
      animatePageOut(href, router)
    }
  }
  const [isOpen, setisOpen] = useState(false)
  useEffect(()=>{
    console.log(open);
    setisOpen(open);
  },[open])
  return (
    <Tooltip p={0} label={label} placement="top" isOpen={isOpen} hasArrow arrowSize={10}>

    <button className="p-0"
      onClick={handleClick}
      >
      {children}
    </button>
    </ Tooltip>
  )
}

export default TransitionLink