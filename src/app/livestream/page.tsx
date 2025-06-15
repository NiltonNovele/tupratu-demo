// app/livestream/page.tsx
import LivePlayer from "@/components/LivePlayer";
import CommentSection from "@/components/CommentSection";
import LoginPrompt from "@/components/LoginPrompt";
import MembershipCheck from "@/components/MembershipCheck";

export default function LiveStreamPage() {
  const isAuthenticated = true; // replace with real auth
  const isMember = true; // replace with real membership check

  if (!isAuthenticated) return <LoginPrompt />;

  if (!isMember)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 bg-black text-white">
        <h2 className="text-3xl font-bold mb-4">Área exclusiva</h2>
        <p className="mb-6">
          Este conteúdo é exclusivo para membros TuPraTodos.
        </p>
        <a
          href="/plans"
          className="bg-yellow-500 text-black px-6 py-2 rounded font-bold hover:bg-yellow-400 transition"
        >
          Ver planos
        </a>
      </div>
    );

  return (
    <main className="bg-black text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Live agora 🔴</h1>
      <LivePlayer />
      <CommentSection />
    </main>
  );
}
