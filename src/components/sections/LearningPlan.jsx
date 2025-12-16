import { useState } from "react";

export default function LearningPlan() {
  const [expandedPhase, setExpandedPhase] = useState(null);
  const [completedDays, setCompletedDays] = useState(0);

  const phases = [
    {
      id: 1,
      title: "PHASE 1 (Days 1–20)",
      subtitle: "Programming + C# (ZERO → CONFIDENT)",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-300",
      sections: [
        {
          days: "Days 1–3",
          title: "Programming Basics",
          video: {
            title: "C# for Beginners – freeCodeCamp",
            link: "https://www.youtube.com/watch?v=GhQdlIFylQ8",
            note: "Watch only 0:00 – 1:30:00"
          },
          docs: "https://learn.microsoft.com/en-us/dotnet/csharp/",
          tasks: ["Console app", "Print name, age", "Simple arithmetic"]
        },
        {
          days: "Days 4–7",
          title: "C# Core Syntax",
          video: {
            title: "Programming with Mosh – C# Basics",
            link: "https://www.youtube.com/watch?v=gfkTfcpWqAY"
          },
          docs: "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/",
          tasks: ["Calculator", "Number guessing game", "Loop programs"]
        },
        {
          days: "Days 8–12",
          title: "OOP (CRITICAL)",
          video: {
            title: "OOP in C# – freeCodeCamp",
            link: "https://www.youtube.com/watch?v=2pGZ6fFj-5Y"
          },
          docs: "https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/object-oriented/",
          tasks: ["Student / Teacher system", "Interface usage", "Inheritance demo"]
        },
        {
          days: "Days 13–16",
          title: "Advanced C#",
          video: {
            title: "Async / LINQ – Mosh",
            link: "https://www.youtube.com/watch?v=THtmZ3f0VFY"
          },
          docs: [
            "https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/",
            "https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/"
          ],
          tasks: ["Async methods", "LINQ filtering project"]
        },
        {
          days: "Days 17–20",
          title: "Git + Clean Code",
          video: {
            title: "Git & GitHub Crash Course",
            link: "https://www.youtube.com/watch?v=RGOj5yH7evk"
          },
          docs: "https://git-scm.com/docs",
          tasks: ["Push all code to GitHub", "Write README.md"]
        }
      ]
    },
    {
      id: 2,
      title: "PHASE 2 (Days 21–45)",
      subtitle: "ASP.NET Core 8 (APIs)",
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-300",
      sections: [
        {
          days: "Days 21–25",
          title: "ASP.NET Core Basics",
          video: {
            title: "ASP.NET Core Web API – freeCodeCamp",
            link: "https://www.youtube.com/watch?v=ZXdFisA_hOY",
            note: "Watch gradually"
          },
          docs: "https://learn.microsoft.com/en-us/aspnet/core/",
          tasks: ["Create Web API", "Test with Postman"]
        },
        {
          days: "Days 26–30",
          title: "Controllers & CRUD",
          video: {
            title: "CRUD API in ASP.NET Core",
            link: "https://www.youtube.com/watch?v=fmvcAzHpsk8"
          },
          docs: "https://learn.microsoft.com/en-us/aspnet/core/web-api/",
          tasks: ["Student CRUD API", "HTTP status codes"]
        },
        {
          days: "Days 31–35",
          title: "Dependency Injection",
          video: {
            title: "Dependency Injection Explained",
            link: "https://www.youtube.com/watch?v=5Z2x0E8j8Q0"
          },
          docs: "https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection",
          tasks: ["Service + Interface", "Inject in Controller"]
        },
        {
          days: "Days 36–40",
          title: "Middleware & Error Handling",
          video: {
            title: "Middleware in ASP.NET Core",
            link: "https://www.youtube.com/watch?v=0W8xY3YxZL8"
          },
          docs: "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/",
          tasks: ["Global exception middleware", "Logging requests"]
        },
        {
          days: "Days 41–45",
          title: "Authentication (JWT)",
          video: {
            title: "JWT Auth in ASP.NET Core",
            link: "https://www.youtube.com/watch?v=Y-MjC7Fob88"
          },
          docs: "https://learn.microsoft.com/en-us/aspnet/core/security/authentication/jwt",
          tasks: ["Login API", "Protected endpoint"]
        }
      ]
    },
    {
      id: 3,
      title: "PHASE 3 (Days 46–70)",
      subtitle: "Database + EF Core 8",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-300",
      sections: [
        {
          days: "Days 46–50",
          title: "SQL Basics",
          video: {
            title: "SQL Full Course – freeCodeCamp",
            link: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
            note: "Selective watching"
          },
          docs: "https://learn.microsoft.com/en-us/sql/",
          tasks: ["Write queries", "Design tables"]
        },
        {
          days: "Days 51–55",
          title: "Entity Framework Core",
          video: {
            title: "EF Core Tutorial",
            link: "https://www.youtube.com/watch?v=SryQxUeChMc"
          },
          docs: "https://learn.microsoft.com/en-us/ef/core/",
          tasks: ["DbContext", "Migrations", "CRUD"]
        },
        {
          days: "Days 56–60",
          title: "DTO + Validation",
          video: {
            title: "DTO & AutoMapper",
            link: "https://www.youtube.com/watch?v=6Z2q9f4YqA8"
          },
          docs: "https://learn.microsoft.com/en-us/aspnet/core/mvc/models/validation",
          tasks: ["Separate API models", "Validation attributes"]
        },
        {
          days: "Days 61–70",
          title: "Best Practices",
          video: {
            title: "ASP.NET Core Best Practices",
            link: "https://www.youtube.com/watch?v=2J3r1xYk5Jk"
          },
          docs: "https://learn.microsoft.com/en-us/aspnet/core/performance/",
          tasks: ["Pagination", "Async optimization"]
        }
      ]
    },
    {
      id: 4,
      title: "PHASE 4 (Days 71–90)",
      subtitle: "Projects + Interview Prep",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-300",
      sections: [
        {
          days: "Days 71–80",
          title: "Project 1: Student Management System",
          tasks: ["Auth", "CRUD", "SQL + EF", "Clean architecture"]
        },
        {
          days: "Days 81–90",
          title: "Project 2: Mini E-Commerce Backend",
          tasks: ["Products", "Orders", "JWT", "Pagination"]
        },
        {
          days: "Daily (Last 20 min)",
          title: "Interview Prep",
          video: {
            title: ".NET Interview Questions",
            link: "https://www.youtube.com/watch?v=K8H8mF9Z-0Q"
          }
        }
      ]
    }
  ];

  const togglePhase = (phaseId) => {
    setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
  };

  return (
    <section id="learning" className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-sm font-semibold shadow-lg animate-pulse">
            🚀 90-Day Intensive Program
          </div>
          <h2 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
            .NET Core 8 Mastery
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Transform from <span className="font-bold text-indigo-600">Zero to Full-Stack Developer</span> in 3 Months
          </p>
          
          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-indigo-200 hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-indigo-600 mb-2">90</div>
              <div className="text-gray-600 font-medium">Days</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-purple-200 hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-purple-600 mb-2">180</div>
              <div className="text-gray-600 font-medium">Hours</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-pink-200 hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-pink-600 mb-2">4</div>
              <div className="text-gray-600 font-medium">Phases</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-blue-200 hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-gray-600 font-medium">Projects</div>
            </div>
          </div>
        </div>

        {/* Daily Time Structure */}
        <div className="mb-16 bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border-2 border-indigo-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full -mr-32 -mt-32 opacity-20"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-5xl animate-bounce">⏰</span>
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Daily Time Structure
              </h3>
            </div>
            <p className="text-center text-gray-600 mb-2 text-lg font-medium">2 Hours Daily – Non-Negotiable</p>
            <p className="text-center text-indigo-600 mb-8 italic font-semibold">Follow this rhythm every single day</p>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-300 hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <div className="text-5xl mb-4">📺</div>
                <div className="text-blue-700 font-bold text-xl mb-3">0–15 min</div>
                <div className="text-gray-800 font-medium">Watch video</div>
                <div className="text-gray-600 text-sm mt-2">Absorb concepts</div>
              </div>
              
              <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-2 border-green-300 hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
                <div className="text-5xl mb-4">⌨️</div>
                <div className="text-green-700 font-bold text-xl mb-3">15–45 min</div>
                <div className="text-gray-800 font-medium">Code along</div>
                <div className="text-gray-600 text-sm mt-2">Pause & type actively</div>
              </div>
              
              <div className="group bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl border-2 border-yellow-300 hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                <div className="text-5xl mb-4">🛠️</div>
                <div className="text-yellow-700 font-bold text-xl mb-3">45–90 min</div>
                <div className="text-gray-800 font-medium">Hands-on task</div>
                <div className="text-gray-600 text-sm mt-2">Build without video</div>
              </div>
              
              <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-2 border-purple-300 hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                <div className="text-5xl mb-4">📝</div>
                <div className="text-purple-700 font-bold text-xl mb-3">90–120 min</div>
                <div className="text-gray-800 font-medium">Revise & commit</div>
                <div className="text-gray-600 text-sm mt-2">Push to GitHub</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="text-3xl">⚠️</span>
                <div>
                  <p className="text-red-700 font-bold text-lg">Golden Rule:</p>
                  <p className="text-red-600 font-semibold">No coding today = Failed today. Zero exceptions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phases */}
        <div className="space-y-8">
          {phases.map((phase, phaseIndex) => (
            <div
              key={phase.id}
              className={`rounded-3xl shadow-2xl overflow-hidden border-2 ${phase.borderColor} transition-all duration-500 hover:shadow-3xl hover:-translate-y-1 bg-white/80 backdrop-blur-sm`}
            >
              {/* Phase Header */}
              <div
                className={`bg-gradient-to-r ${phase.color} p-8 cursor-pointer relative overflow-hidden group`}
                onClick={() => togglePhase(phase.id)}
              >
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex justify-between items-center">
                  <div className="flex items-center gap-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold border-2 border-white/30">
                      {phaseIndex + 1}
                    </div>
                    <div>
                      <h3 className="text-3xl font-extrabold text-white mb-2 drop-shadow-lg">{phase.title}</h3>
                      <p className="text-white/95 text-xl font-medium drop-shadow">{phase.subtitle}</p>
                    </div>
                  </div>
                  <button className="text-white text-5xl font-bold hover:scale-125 transition-transform bg-white/20 rounded-full w-14 h-14 flex items-center justify-center">
                    {expandedPhase === phase.id ? "−" : "+"}
                  </button>
                </div>
              </div>

              {/* Phase Content */}
              {expandedPhase === phase.id && (
                <div className={`${phase.bgColor} p-8`}>
                  <div className="space-y-8">
                    {phase.sections.map((section, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group"
                      >
                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-100 to-transparent rounded-bl-full opacity-50"></div>
                        
                        {/* Section Header */}
                        <div className="flex items-start justify-between mb-6 relative z-10">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full text-sm font-bold shadow-lg">
                                <span className="mr-2">📅</span>
                                {section.days}
                              </span>
                            </div>
                            <h4 className="text-2xl font-extrabold text-gray-800 mb-2">{section.title}</h4>
                          </div>
                          <div className="text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
                            {idx + 1}
                          </div>
                        </div>

                        {/* Video */}
                        {section.video && (
                          <div className="mb-6 p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl border-2 border-red-200 hover:border-red-300 transition-all shadow-md hover:shadow-lg">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="bg-red-500 text-white rounded-lg p-2 shadow-md">
                                <span className="text-2xl">🎥</span>
                              </div>
                              <span className="font-bold text-gray-800 text-lg">Video Tutorial</span>
                            </div>
                            <a
                              href={section.video.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 font-semibold text-lg hover:underline block mb-2 group"
                            >
                              <span className="group-hover:translate-x-2 inline-block transition-transform">
                                {section.video.title} →
                              </span>
                            </a>
                            {section.video.note && (
                              <div className="flex items-center gap-2 mt-3 p-3 bg-white/60 rounded-lg">
                                <span className="text-amber-600">💡</span>
                                <p className="text-sm text-gray-700 font-medium italic">{section.video.note}</p>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Docs */}
                        {section.docs && (
                          <div className="mb-6 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-200 hover:border-blue-300 transition-all shadow-md hover:shadow-lg">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="bg-blue-500 text-white rounded-lg p-2 shadow-md">
                                <span className="text-2xl">📘</span>
                              </div>
                              <span className="font-bold text-gray-800 text-lg">Official Documentation</span>
                            </div>
                            {Array.isArray(section.docs) ? (
                              <ul className="space-y-3">
                                {section.docs.map((doc, docIdx) => (
                                  <li key={docIdx} className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">📄</span>
                                    <a
                                      href={doc}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium break-all"
                                    >
                                      {doc}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <a
                                href={section.docs}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium flex items-center gap-2 group"
                              >
                                <span className="group-hover:translate-x-2 transition-transform">→</span>
                                {section.docs}
                              </a>
                            )}
                          </div>
                        )}

                        {/* Tasks */}
                        {section.tasks && (
                          <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200 hover:border-green-300 transition-all shadow-md hover:shadow-lg">
                            <div className="flex items-center gap-3 mb-5">
                              <div className="bg-green-500 text-white rounded-lg p-2 shadow-md">
                                <span className="text-2xl">🧪</span>
                              </div>
                              <span className="font-bold text-gray-800 text-lg">Hands-on Practice Tasks</span>
                            </div>
                            <ul className="space-y-3">
                              {section.tasks.map((task, taskIdx) => (
                                <li key={taskIdx} className="flex items-start gap-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors">
                                  <span className="text-green-600 text-xl mt-0.5 flex-shrink-0">✓</span>
                                  <span className="text-gray-800 font-medium">{task}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Success Tips */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl shadow-xl border-2 border-blue-300 hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">💪</div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">Stay Consistent</h4>
            <p className="text-gray-700">Code every single day. No breaks, no excuses. Consistency beats intensity.</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-8 rounded-2xl shadow-xl border-2 border-purple-300 hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">🎯</div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">Follow the Order</h4>
            <p className="text-gray-700">Don't skip ahead. Master each phase before moving to the next level.</p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-8 rounded-2xl shadow-xl border-2 border-pink-300 hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">🚀</div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">Build Projects</h4>
            <p className="text-gray-700">Apply what you learn. Projects solidify knowledge better than tutorials.</p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 relative overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-3xl">
            <div className="bg-white rounded-3xl p-10 text-center">
              <div className="text-6xl mb-4">🎓</div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Ready to Begin Your Journey?
              </h3>
              <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
                90 days from now, you'll be a confident .NET Core 8 developer. The only question is: Will you start today?
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-bold shadow-lg">
                  ✓ 2 Hours Daily
                </div>
                <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-bold shadow-lg">
                  ✓ Hands-on Practice
                </div>
                <div className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold shadow-lg">
                  ✓ Real Projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
