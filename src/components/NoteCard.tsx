const NoteCard = () => {
  return (
    <button className="rounded-md bg-slate-800 space-y-3 p-5 overflow-hidden relative hover:ring-2 hover:ring-slate-600 text-left outline-none focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-200">
            há 4 dias
        </span>
        <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum ex quae dolorem dolores exercitationem nam possimus officiis numquam dolore facere? Optio recusandae necessitatibus corporis eveniet odio fugit consequuntur ex reprehenderit.
        </p>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none">
        </div>
    </button>
  )
}
export default NoteCard;