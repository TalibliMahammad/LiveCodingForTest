import { useQuery } from "@tanstack/react-query";

export function UserCard({ username }) {
  // error obyektini buraya əlavə etdik
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['github-user', username],
    queryFn: () =>
      fetch(`https://api.github.com/users/${username}`)
        .then(res => {
          if (!res.ok) throw new Error('İstifadəçi tapılmadı');
          return res.json();
        }),
    // username-in sadəcə string olduğundan və boş olmadığından əmin oluruq
    enabled: typeof username === 'string' && username.trim().length > 0,
  });

  if (isLoading) return <p className="text-gray-400 italic">Yüklənir...</p>;
  
  // error.message artıq işləyəcək
  if (isError) return <p className="text-red-400">Xəta: {error.message}</p>;
  
  if (!data) return null;

  return (
    <div className="flex flex-col sm:flex-row gap-6 p-6 bg-gray-800 text-white rounded-xl mt-6 shadow-lg border border-gray-700">
      <img 
        src={data.avatar_url} 
        alt={data.login} 
        className="w-24 h-24 rounded-full border-2 border-blue-500 object-cover" 
      />
      <div>
        <h2 className="text-xl font-bold">{data.name || "Ad qeyd olunmayıb"}</h2>
        <p className="text-gray-400 font-mono">@{data.login}</p>
        {data.bio && <p className="mt-2 text-sm leading-relaxed">{data.bio}</p>}
        <div className="mt-4 flex gap-4 text-xs font-semibold uppercase tracking-wider">
          <span className="bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full">
            {data.public_repos} Repos
          </span>
          <span className="bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full">
            {data.followers} Followers
          </span>
        </div>
      </div>
    </div>
  );
}