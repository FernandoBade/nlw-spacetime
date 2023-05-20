import { User } from 'lucide-react'
import Image from 'next/image'

import nlwlogo from '../assets/nlw-logo.svg'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* esquerda */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* linhas */}
        <div className="left- absolute bottom-0 right-2 top-0 w-2 bg-stripes "></div>

        {/* sign in */}
        <a
          href=""
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <p className="max-w-[140px] text-sm leading-snug">
            <span className="underline">Crie sua conta</span> e salve suas
            memórias!
          </p>
        </a>

        {/* hero */}
        <div className="space-y-5">
          <Image src={nlwlogo} alt="NLW logo" />
          <div className="max-w-[420] space-y-4">
            <h1 className="mt-5 text-5xl font-bold leading-tight text-gray-50">
              {' '}
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed">
              Colecione momentos marantes da sua jornada e compartilah (se
              quiser) com o mundo!
            </p>
          </div>

          <a
            href=""
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
          >
            CADASTRAR LEMBRANÇA
          </a>
        </div>

        {/* copyright */}
        <div>
          Feito com 💜 no NLW da{' '}
          <a
            href="https://www.rocketseat.com.br/nlw"
            rel="noreferrer"
            target="_blank"
            className="flex-1 transition-colors hover:text-white"
          >
            Rocketseat.
          </a>
          <a
            href="https://github.com/FernandoBade/nlw-spacetime"
            rel="noreferrer"
            target="_blank"
            className="text-sm text-purple-300 transition-colors hover:text-purple-100"
          >
            {' '}
            Veja o projeto no GitHub.
          </a>
        </div>
      </div>

      {/* direita */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança. Comece a{' '}
            <a href="" className="underline hover:text-gray-50">
              criar agora
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
