import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router";
import { Logo } from "../components/Logo";


const CREATE_SUBSCRIBER_MUTATION = gql `
mutation CreateSubscriber($name: String!, $email: String!){
    CreateSubscriber(data: {name: $name, email: $email}){
        id
    }
}
`
export function Subscribe (){
    const  navigate = useNavigate()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, {loading}] = useMutation(CREATE_SUBSCRIBER_MUTATION)

    function handleSubscribe(event: FormEvent){
       event.preventDefault();

      createSubscriber({
          variables: {
              name,
              email,
          }
      })

      navigate('/event')
    }

    return (
     <div className="min-h-screen bg-blur bg-cover bg-no-reapet flex flex-col items-center">
         <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
             <div className="max-w-[640px]">
               <Logo />
               <h1 className="mt-8 text=[2.5rem] leading-tight">
                   O mundo conhecerá o <strong className="text-blue-500">Alvorecer </strong>, A Akatsuki!
               </h1>
               <p className="mt-4 text-gray-200 leading-relaxed">
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quisquam ullam laboriosam, tenetur ipsum, iure consectetur rerum doloribus quasi odit modi placeat adipisci, non quaerat enim quidem amet saepe. Nemo.
               </p>
             </div>
             <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                 <strong className="text-2xl mb-6 block">
                 Inscreva-se gratuitamente
                     </strong>
                     <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                         <input
                         className="bg-gray-900 rounded px-5 h-14"
                         type="text"
                         placeholder="Seu nome completo" 
                         onChange={event=>setName(event.target.value)}
                         />
                         <input
                         className="bg-gray-900 rounded px-5 h-14"
                         type="email"
                         placeholder="Digite seu e-mail" 
                         onChange={event=>setEmail(event.target.value)}
                         />
                         
                         <button type="submit"
                         disabled={loading}
                         className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50">
                             Garantir minha afiliação
                         </button>
                             
                     </form>
             </div>
         </div>
       <img src="/src/assets/akatsuki.jpg" className="mt-10" alt="" />
    </div>
    );
}