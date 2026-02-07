import React from "react";
import { Linkedin } from "lucide-react";

export default function TeamPage() {
  // 1) Eğer görseli projene koyarsan:
  // import gokhanImg from "../assets/gokhan-ozdemir.jpg";
  // import myImg from "../assets/me.jpg";

  // 2) Eğer URL kullanacaksan:
  const gokhanImage =
    "https://media.licdn.com/dms/image/..."; // TODO: Gökhan Özdemir LinkedIn profil foto URL
  const myImage =
    "https://placehold.co/256x256"; // TODO: Kendi foto URL (veya assets'den import)

  const team = [
    {
      id: "pm-gokhan",
      name: "Gökhan Özdemir",
      role: "Proje Yöneticisi",
      img: gokhanImage,
      linkedin: "https://www.linkedin.com/in/.../", // TODO: Profil linki
    },
    {
      id: "fs-you",
      name: "Ad Soyad",
      role: "Full Stack Developer",
      img: myImage,
      linkedin: "https://www.linkedin.com/in/.../", // TODO: Profil linkin
    },
    // Takım arkadaşlarını buraya ekle
    {
      id: "member-1",
      name: "Takım Üyesi 1",
      role: "Frontend Developer",
      img: "https://placehold.co/256x256",
      linkedin: "",
    },
    {
      id: "member-2",
      name: "Takım Üyesi 2",
      role: "Backend Developer",
      img: "https://placehold.co/256x256",
      linkedin: "",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-base font-semibold">Takım</h1>
        <p className="text-sm text-gray-600">
          Projeyi geliştiren ekip üyeleri
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        {team.map((m) => (
          <div
            key={m.id}
            className="flex w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]"
          >
            <div className="flex w-full flex-col rounded-xl border p-4">
              <div className="flex w-full items-center justify-center">
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-28 w-28 rounded-full border object-cover"
                />
              </div>

              <div className="flex flex-col items-center gap-1 pt-3">
                <p className="text-sm font-semibold">{m.name}</p>
                <p className="text-xs text-gray-600">{m.role}</p>
              </div>

              <div className="flex w-full justify-center pt-3">
                {m.linkedin ? (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-lg border px-3 py-2 text-xs"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                ) : (
                  <div className="flex items-center gap-2 rounded-lg border px-3 py-2 text-xs text-gray-500">
                    <Linkedin size={16} />
                    LinkedIn yok
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}