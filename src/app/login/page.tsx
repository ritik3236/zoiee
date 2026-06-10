"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        toast.error("Invalid credentials", {
          description: "Please use the required password to login.",
        });
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex font-sans bg-[#FAF9F6]">
      {/* Left Side - Visual (Premium Design) */}
      <div className="hidden lg:flex lg:w-[45%] relative overflow-hidden flex-col justify-between p-12 bg-neutral-50 border-r border-neutral-200/80">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.03)_1.5px,transparent_1.5px)] bg-[size:24px_24px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-rose-100/30 blur-[130px] rounded-full pointer-events-none" />
        </div>

        <div className="relative z-10 flex flex-col h-full justify-between text-left">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-12">
              <span className="w-3.5 h-3.5 rounded-full bg-black"></span>
              <span className="font-extrabold text-3xl text-neutral-900 tracking-tight" style={{ fontFamily: 'var(--font-logo)' }}>Zoiee</span>
            </Link>
          </div>

          <div className="relative z-10 mt-auto mb-8 max-w-lg">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-neutral-900 leading-tight mb-6 tracking-tight font-logo">
              Work Intelligently.<br />Pay Independently.
            </h1>
            <p className="text-base text-neutral-600 font-semibold leading-relaxed">
              Securely manage global contractor payroll, automate local tax compliance, and ship remote IT devices from one dashboard.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-[55%] flex items-center justify-center bg-white p-8 sm:p-12 relative border-l border-neutral-100">
        <div className="w-full max-w-[400px] space-y-8 relative z-10 text-left">
          <div className="text-center lg:text-left">
            <Link href="/" className="inline-block lg:hidden mb-8">
              <span className="font-extrabold text-3xl text-neutral-900 tracking-tight font-logo">Zoiee</span>
            </Link>
            <h2 className="text-3xl font-extrabold text-neutral-900 mb-2 tracking-tight font-logo">Welcome back</h2>
            <p className="text-neutral-500 font-semibold text-sm">Sign in to your console account.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-450 mb-1.5 uppercase tracking-wider">
                  Work Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-900 font-semibold text-sm focus:bg-white focus:outline-none focus:border-black transition-all"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-neutral-450 uppercase tracking-wider">
                    Password
                  </label>
                  <a href="#" className="text-xs font-bold text-neutral-400 hover:text-black transition-colors cursor-pointer">
                    Forgot?
                  </a>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-900 font-semibold text-sm focus:bg-white focus:outline-none focus:border-black transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full mt-6 bg-black hover:bg-neutral-900 text-white font-bold py-3.5 rounded-full transition-colors flex items-center justify-center gap-2 shadow-sm text-sm cursor-pointer"
            >
              {loading ? (
                <>Signing in... <Loader2 className="w-4 h-4 animate-spin" /></>
              ) : (
                <>Sign In <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-200"></div>
            </div>
            <div className="relative flex justify-center text-xs font-bold">
              <span className="px-4 bg-white text-neutral-400 uppercase tracking-wider text-[10px]">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-2.5 bg-white border border-neutral-200 rounded-full hover:border-black transition-colors font-bold text-neutral-600 shadow-sm text-sm cursor-pointer">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 bg-white border border-neutral-200 rounded-full hover:border-black transition-colors font-bold text-neutral-600 shadow-sm text-sm cursor-pointer">
              <svg className="w-4 h-4" viewBox="0 0 21 21">
                <path fill="#f25022" d="M0 0h10v10H0z" />
                <path fill="#7fba00" d="M11 0h10v10H11z" />
                <path fill="#00a4ef" d="M0 11h10v10H0z" />
                <path fill="#ffb900" d="M11 11h10v10H11z" />
              </svg>
              Microsoft
            </button>
          </div>
          
          <p className="text-center text-xs font-bold text-neutral-450 mt-10">
            Trouble logging in? <a href="#" className="text-neutral-700 hover:underline cursor-pointer">Contact platform support</a>
          </p>
        </div>
      </div>
    </div>
  );
}
