import Logo from './assets/Logo.svg'
import NewNoteCard from './components/NewNoteCard';
import NoteCard from './components/NoteCard';

export default function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 px-5">
      <img src={Logo} alt="NLW Expert" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-state-500"
        />
      </form>
      <div className= "h-px bg-slate-700 " />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
      <NewNoteCard/>
    
      <NoteCard note= {{
        date: new Date(),
        content: 'Hello world'
      }}/>
  
      
      </div>
    
    </div>

   );
}