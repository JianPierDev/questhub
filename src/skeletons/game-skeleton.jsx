import { Header } from "../common/header/header";

export function GameSkeleton() {
  return (
    <>
      <Header />

      <main className="bg-[#0F1419] min-h-screen pb-16 animate-pulse">
        <div className="w-[90%] max-w-7xl mx-auto pt-10 space-y-10">
          <div className="relative overflow-hidden rounded-3xl h-125 bg-white/5" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <section className="space-y-4">
                <div className="h-6 w-48 bg-white/5 rounded-xl" />

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-32 bg-white/5 rounded-2xl" />
                  ))}
                </div>
              </section>

              <section className="bg-[#1A222B] border border-white/5 rounded-3xl p-6 space-y-4">
                <div className="h-6 w-56 bg-white/5 rounded-xl" />

                <div className="space-y-3">
                  <div className="h-4 bg-white/5 rounded w-full" />
                  <div className="h-4 bg-white/5 rounded w-5/6" />
                  <div className="h-4 bg-white/5 rounded w-4/6" />
                  <div className="h-4 bg-white/5 rounded w-3/6" />
                </div>
              </section>
            </div>

            <aside className="h-fit">
              <div className="bg-[#1A222B] border border-white/5 rounded-3xl p-6 space-y-6">
                <div className="h-10 w-24 bg-white/5 rounded-2xl" />

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="h-3 w-24 bg-white/5 rounded" />
                    <div className="h-4 w-32 bg-white/5 rounded" />
                  </div>

                  <div className="space-y-2">
                    <div className="h-3 w-24 bg-white/5 rounded" />
                    <div className="h-4 w-20 bg-white/5 rounded" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="h-3 w-24 bg-white/5 rounded" />

                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-7 w-16 bg-white/5 rounded-full"
                      />
                    ))}
                  </div>
                </div>

                <div className="h-12 bg-white/5 rounded-2xl" />
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}