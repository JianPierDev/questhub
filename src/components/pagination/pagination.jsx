import { useSearchParams } from "react-router";

import { ChevronLeft, ChevronRight } from "lucide-react";


export function Pagination({ page, totalPages }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const goToPage = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;

    searchParams.set("page", newPage);
    setSearchParams(searchParams);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center items-center gap-4 my-6">
      <button
        onClick={() => goToPage(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 bg-white/10 text-white rounded disabled:opacity-50 hover:bg-white/20 transition"
      >
        <ChevronLeft />
      </button>

      <span className="text-white font-semibold">
        Page {page} of {totalPages}
      </span>

      <button
        onClick={() => goToPage(page + 1)}
        disabled={page === totalPages}
        className="px-4 py-2 bg-white/10 text-white rounded disabled:opacity-50 hover:bg-white/20 transition"
      >
        <ChevronRight />
      </button>
    </div>
  );
}