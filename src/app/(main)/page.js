"use client"
import React from 'react';
import Link from 'next/link';
import { useUser } from '@/context/UserContext';
import { 
  Camera, 
  Users, 
  Globe
} from 'lucide-react';

function FeatureCard({ icon: Icon, title, desc, color }) {

  return (
    <div className="w-[350px] p-8 rounded-3xl bg-emerald-50 border border-slate-300 shadow-md hover:shadow-lg hover:scale-105 transition-transform flex-shrink-0">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-${color}-100 text-${color}-600 || 'bg-slate-100'}`}>
            {Icon}
        </div>
        <h3 className={`text-xl text-${color}-500 font-bold mb-3`}>{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
    
export default function LandingPage () {
    const { profile } = useUser(); 

    const data = [
        { label: "Sampah Terkelola", value: "62k+ kg", ref: "11" },
        { label: "Pengguna Aktif", value: "8.7k+", ref: "7" },
        { label: "CO2 Terkurangi", value: "124 Ton", ref: "20" },
        { label: "Mitra RT/RW", value: "48 Unit", ref: "7" }
    ] 

    const features = [
        {
            title: "AI Waste Scanner",
            description: "Cukup foto sampah Anda, Gemini AI akan menganalisis jenis bahan dan memberikan rekomendasi proyek upcycling.",
            icon: <Camera size={24} />,
            colorClass: "blue",
            id: 1
        },
        {
            title: "AI Interactive Tutor",
            description: "Panduan step-by-step interaktif lewat chat AI untuk membantu Anda menyelesaikan proyek kerajinan tangan.",
            icon: <Users size={24} />,
            colorClass: "emerald",
            id: 4
        },
        {
            title: "Circular Marketplace",
            description: "Jual hasil karya Anda langsung ke komunitas atau beli bahan baku ramah lingkungan dari warga sekitar.",
            icon: <Globe size={24} />,
            colorClass: "amber",
            id: 8
        },
        {
            title: "Collaborative Community",
            description: "Bergabung dengan komunitas peduli lingkungan untuk mengerjakan proyek bersama, dan memberikan dampak sosial yang lebih besar.",
            icon: <Users size={24} />,
            colorClass: "rose",
            id: 9
        }
    ];

    const steps = [
        { step: "01", title: "Scan Sampah", desc: "Foto sampah plastik, kertas, atau logam di rumah Anda." },
        { step: "02", title: "Pilih Proyek", desc: "Terima 3 pilihan proyek (Mudah/Sedang/Sulit) dari AI." },
        { step: "03", title: "Dapatkan Poin", desc: "Selesaikan proyek, validasi foto hasil akhir, dan dapatkan poin!" },
        { step: "04", title: "Berdampak Lebih Besar", desc: "Kerjakan proyek besar bersama dan tingkatkan poin komunitas/rt/rw!" }
    ]
  return (
    <>
      <section className="relative px-6 pt-16 pb-24 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-emerald-700 to-blue-700 bg-clip-text text-transparent">
          Ubah Sampah Jadi Mahakarya dengan Kekuatan AI
        </h1>
        <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
          Gemicraft AI membantu Anda mengidentifikasi sampah rumah tangga dan memberikan tutorial langkah-demi-langkah berbasis AI untuk menciptakan produk bernilai ekonomi tinggi.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-emerald-200 hover:scale-105 transition-transform">
              {profile ? (
                <Link href="/dashboard">
                    Lihat Dashboard
                </Link>
              ) : (
                <Link href="/auth?mode=login">
                    Masuk Sekarang
                </Link>
              )}
            </button>
        </div>
      </section>

      <section className="bg-emerald-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {data.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-bold text-blue-700">{stat.value}</p>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="fitur" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Fitur Inovatif Gemicraft</h2>
          <p className="text-slate-500">Teknologi canggih untuk mendukung gaya hidup berkelanjutan.</p>
        </div>

        <div className="relative flex overflow-hidden">

            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex gap-8 animate-scroll hover:[animation-play-state:paused] px-4">
            {[...features, ...features, ...features].map((feature, index) => (
                <FeatureCard 
                key={`${feature.id}-${index}`}
                icon={feature.icon} 
                title={feature.title}
                desc={feature.description}
                color={feature.colorClass}
                />
            ))}
            </div>
        </div>
      </section>

      <section id="cara-kerja" className="py-24 bg-emerald-900 text-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">4 Langkah Mudah Berkontribusi</h2>
          <div className="grid md:grid-cols-4 gap-12 relative">
            {steps.map((step, i) => (
              <div key={i} className="relative z-10">
                <span className="text-5xl font-black opacity-20 block mb-4">{step.step}</span>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-emerald-100 opacity-80 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-8 text-slate-800">Siap Menjadi Pahlawan Lingkungan?</h2>
        <button className="px-10 py-4 bg-emerald-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:bg-emerald-700 transition">
          {profile ? (
            <Link href="/dashboard">
                Lakukan Perubahan Sekarang Juga
            </Link>
          ) : (
            <Link href="/auth?mode=register">
              Daftar Sekarang Secara Gratis
            </Link>
          )}
        </button>
        <p className="mt-12 text-slate-400 text-sm">© 2025 Gemicraft AI. Bagian dari Inovasi Gerakan Menjaga Bumi Indonesia.</p>
      </footer>
    </>
  );
};