import { useState, useEffect, FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NavItem: FunctionComponent<{
   active: string
   setActive: Function
   name: string
   title?: string
   setTitle: Function
   route: string
}> = ({ active, setActive, name, title="", setTitle, route }) => {
   return active !== name ? (
      <Link href={route}>
         <a>
            <span
               className='mx-2 cursor-pointer hover:border-b-4 hover:text-blue-500'
               onClick={() => {
                  setActive(name)
                  if (title && title!='')
                     setTitle(title ? title : name)
               }}>
               {title ? title : name}
            </span>
         </a>
      </Link>
   ) : null
}

const Navbar = () => {
   const { pathname } = useRouter()

   const [active, setActive] = useState('')
   const [title, setTitle] = useState('')

   //later
   useEffect(() => {
      if (pathname === '/') {
         setActive('About')
         setTitle('Sobre mi')
      } else if (pathname === '/projects') {
         setActive('Projects')
         setTitle('Proyectos')
      } else if (pathname === '/resume') {
         setActive('Resume')
         setTitle('Curriculum Vitae')
      }
   }, [])

   return (
      <div className='flex items-center justify-between px-5 py-3 my-3'>
         <span className='text-xl font-bold border-b-4 md:text-2xl border-blue-500'>
            {title}
         </span>

         <div className='text-base font-normal md:text-xl'>
            <NavItem
               active={active}
               setActive={setActive}
               name='About'
               title='Sobre mi'
               setTitle={setTitle}
               route='/'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='Resume'
               title='Curriculum Vitae'
               setTitle={setTitle}
               route='/resume'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='Projects'
               title='Proyectos'
               setTitle={setTitle}
               route='/projects'
            />
         </div>
      </div>
   )
}

export default Navbar
