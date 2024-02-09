import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'sonner';

const NewNoteCard = () => {
  const [shouldShowOnBoarding, setShouldShowOnBoarding]= useState(true)
  const [content, setContent] = useState('')

  const handleStartEditorText = () => {setShouldShowOnBoarding(false)}
  
  const handleContentChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent (event.target.value)
    if(event.target.value === ''){setShouldShowOnBoarding(true)}}
    
  const handleSaveNote = (event: FormEvent) => {
    event.preventDefault()

    console.log(content)
    toast.success('Nota criada com sucesso')
  }

  return (
   
    <Dialog.Root>
      <Dialog.DialogTrigger className="rounded-md bg-slate-700 p-5 gap-3 flex flex-col text-left hover:ring-2 hover:ring-slate-600 outline-none focus-visible:ring-2 focus-visible:ring-lime-400">
          <span className= "text-sm font-medium text-slate-200">
            Adicionar nota
          </span>
          <p className="text-sm leading-6 text-slate-400">
              Grave uma nota de áudio que será convertida em texto
          </p>
      </Dialog.DialogTrigger>
      
      
      <Dialog.DialogPortal>
        <Dialog.DialogOverlay className="inset-0 fixed bg-black/60"/> 
          <Dialog.DialogContent className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none">
            <Dialog.DialogClose className='absolute right-0 bg-red-500 p-1.5 text-slate-400 hover:text-slate-100'>
              <X className="size-5"/>
            </Dialog.DialogClose>
            <form onSubmit={handleSaveNote} className='flex-1 flex flex-col'>
              <div className="flex-1 flex-col gap-3 p-5">
                <span className="text-sm font-medium text-slate-200">
                  Adicionar nota
                </span>
              
                {shouldShowOnBoarding ? (
                  <p className="text-sm leading-6 text-slate-400">
                  Comece <button className="font-medium text-lime-400 hover:underline">gravando uma nota</button> em áudio ou <button onClick={handleStartEditorText} className="font-mediun text-lime-400 hover:underline"> escreva em texto.</button>
                  </p>

                ) : (
                  <p><textarea 
                  autoFocus 
                  className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                  onChange={handleContentChanged}/></p>
                
                )}
              </div>
            
              <button
              type="submit"
              className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-600"
              >
                Salvar nota?
              </button>
              </form>
          </Dialog.DialogContent>
      </Dialog.DialogPortal>
    </Dialog.Root>
      
  );
};

export default NewNoteCard;