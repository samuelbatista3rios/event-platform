import { useEffect } from "react"
import { client } from "./lib/apolli"
import {gql, useQuery} from "@apollo/client"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Video } from "./components/Video"
import { Lesson } from "./components/Lesson"
import { Event } from "./pages/Event"



function App() {

  return (
   <div>
   <Event />
   </div>
  ) 
}

export default App
