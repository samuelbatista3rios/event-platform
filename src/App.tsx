import { useEffect } from "react"
import { client } from "./lib/apolli"
import {ApolloProvider, gql, useQuery} from "@apollo/client"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Video } from "./components/Video"
import { Lesson } from "./components/Lesson"
import { Event } from "./pages/Event"
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"



function App() {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
   </ApolloProvider>
  ) 
}

export default App
