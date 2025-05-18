
import { cn } from "@/lib/utils";

interface PoemAuthor {
  name: string;
  poemCount: number;
  images: string[];
}

interface PoemAuthorListProps {
  authors: PoemAuthor[];
  selectedAuthor: string | null;
  onAuthorClick: (authorName: string) => void;
}

const PoemAuthorList = ({ authors, selectedAuthor, onAuthorClick }: PoemAuthorListProps) => {
  return (
    <div className="lg:col-span-1 bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-white/10">
      <h2 className="text-2xl font-bold text-sky-400 mb-4">Authors</h2>
      <div className="space-y-2">
        {authors.map((author) => (
          <button
            key={author.name}
            onClick={() => onAuthorClick(author.name)}
            className={cn(
              "w-full text-left px-4 py-2 rounded-lg flex items-center justify-between",
              selectedAuthor === author.name 
                ? "bg-sky-400/20 text-white" 
                : "text-gray-300 hover:bg-slate-700"
            )}
          >
            <span className="text-xl font-medium">{author.name}</span>
            <span className="bg-sky-400/40 text-white px-2 py-1 rounded-full text-sm">
              {author.poemCount}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PoemAuthorList;
