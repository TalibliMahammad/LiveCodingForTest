 export function SearchBar({value,onChange}){
    return(
        <input  value={value}  onChange={e => onChange(e.target.value)}   placeholder="GitHub username axtar..."
      className="w-full p-3 rounded-lg bg-gray-700
                 text-white placeholder-gray-400
                 border border-gray-600 focus:outline-none
                 focus:border-blue-500" type="text" />
    )
 }