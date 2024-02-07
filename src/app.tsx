import Logo from './assets/Logo.svg'

export default function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={Logo} alt='Nlw expert'/>
      
      <form className='w-full '>
        <input 
        type = "text" 
        placeholder='Busque suas notas' 
        className='w-full bg-transparent text3xl font-semibold tracking-tight outline-none placeholder: text-slate-500 '/>
      </form>
      
      <div className='h-px bg=slate-700'/>
      <div className='grid'></div>
    </div>
  )
}