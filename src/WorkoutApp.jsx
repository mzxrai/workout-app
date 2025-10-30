import React, { useState, useEffect } from "react";
import {
  Check,
  Circle,
  Calendar,
  LayoutList,
  Play,
  ChevronRight,
  Activity,
} from "lucide-react";
import workoutData from "./workoutData.js";


const WorkoutApp = () => {
  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem("workoutProgress");
    return saved ? JSON.parse(saved) : {};
  });

  const [expandedWorkout, setExpandedWorkout] = useState(null);

  useEffect(() => {
    localStorage.setItem("workoutProgress", JSON.stringify(completed));
  }, [completed]);

  const toggleExercise = (date, idx) => {
    const key = `${date}-${idx}`;
    setCompleted((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const getProgress = (date, exercises) => {
    if (exercises.length === 0) return 100;
    const done = exercises.filter((_, idx) => completed[`${date}-${idx}`]).length;
    return Math.round((done / exercises.length) * 100);
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Linear-style header */}
      <header className="bg-white border-b border-gray-200/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-900 tracking-tight">November Workouts</h1>
              <p className="text-sm text-gray-500 mt-0.5">Progressive training program</p>
            </div>
            <div className="flex items-center gap-1.5">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-all">
                Calendar
              </button>
              <button className="px-4 py-2 text-sm font-medium bg-black text-white rounded-lg hover:bg-gray-900 transition-all">
                List
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-8 py-8">
        <div className="space-y-2">
          {workoutData.map((workout, idx) => {
            const progress = getProgress(workout.date, workout.exercises);
            const isExpanded = expandedWorkout === workout.date;
            const isRest = workout.exercises.length === 0;

            return (
              <div
                key={idx}
                className="bg-white rounded-lg border border-gray-200/60 overflow-hidden hover:border-gray-300 hover:shadow-sm transition-all duration-150"
              >
                {/* Workout card header */}
                <div
                  className="px-4 py-4 cursor-pointer"
                  onClick={() => setExpandedWorkout(isExpanded ? null : workout.date)}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-semibold text-gray-900 tracking-tight">
                          {(() => {
                            const [year, month, day] = workout.date.split("-");
                            const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
                            return date.toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            });
                          })()}
                        </h3>
                        <span className="text-sm text-gray-500">{workout.day}</span>
                      </div>
                      <p className="text-sm text-gray-700 truncate">{workout.workout_type}</p>
                      {!isRest && (
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-black rounded-full transition-all duration-300"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                          <span className="text-xs font-medium text-gray-500 tabular-nums">{progress}%</span>
                        </div>
                      )}
                    </div>

                    <ChevronRight
                      size={18}
                      strokeWidth={2}
                      className={`text-gray-400 transition-transform duration-200 flex-shrink-0 mt-1 ${isExpanded ? "rotate-90" : ""}`}
                    />
                  </div>
                </div>

                {/* Expanded exercises */}
                {isExpanded && !isRest && (
                  <div className="border-t border-gray-100/80 bg-gray-50/30">
                    {workout.exercises.map((exercise, exIdx) => {
                      const isCompleted = completed[`${workout.date}-${exIdx}`];

                      return (
                        <div
                          key={exIdx}
                          className={`px-4 py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors ${
                            isCompleted ? "opacity-50" : ""
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <button
                              onClick={() => toggleExercise(workout.date, exIdx)}
                              className="flex-shrink-0 mt-0.5"
                            >
                              {isCompleted ? (
                                <div className="w-5 h-5 rounded-md bg-black flex items-center justify-center">
                                  <Check size={13} strokeWidth={2.5} className="text-white" />
                                </div>
                              ) : (
                                <div className="w-5 h-5 rounded-md border-2 border-gray-300 hover:border-black transition-all" />
                              )}
                            </button>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-3 mb-2">
                                <h4
                                  className={`text-sm font-medium text-gray-900 tracking-tight ${
                                    isCompleted ? "line-through" : ""
                                  }`}
                                >
                                  {exercise.name}
                                </h4>
                                {exercise.demo_link && (
                                  <a
                                    href={exercise.demo_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-shrink-0 px-3 py-1.5 text-xs font-medium bg-black text-white rounded-md hover:bg-gray-900 transition-all flex items-center gap-1.5"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <Play size={11} strokeWidth={2} fill="white" />
                                    Demo
                                  </a>
                                )}
                              </div>

                              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
                                <div className="flex items-baseline gap-1.5">
                                  <span className="text-gray-500 uppercase tracking-wide text-[10px]">Sets</span>
                                  <span className="text-gray-900 font-medium font-mono">{exercise.sets}</span>
                                </div>
                                <div className="flex items-baseline gap-1.5">
                                  <span className="text-gray-500 uppercase tracking-wide text-[10px]">Reps</span>
                                  <span className="text-gray-900 font-medium font-mono">{exercise.reps}</span>
                                </div>
                                <div className="flex items-baseline gap-1.5">
                                  <span className="text-gray-500 uppercase tracking-wide text-[10px]">Weight</span>
                                  <span className="text-gray-900 font-medium font-mono">{exercise.weight}</span>
                                </div>
                                <div className="flex items-baseline gap-1.5">
                                  <span className="text-gray-500 uppercase tracking-wide text-[10px]">Rest</span>
                                  <span className="text-gray-900 font-medium font-mono">{exercise.rest}</span>
                                </div>
                              </div>

                              {exercise.notes && (
                                <p className="mt-2 text-xs text-gray-500 italic">{exercise.notes}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Rest day message */}
                {isExpanded && isRest && (
                  <div className="px-6 py-12 text-center border-t border-gray-100/80 bg-gray-50/30">
                    <Activity size={20} className="mx-auto mb-3 text-gray-400" strokeWidth={1.5} />
                    <p className="text-sm text-gray-600">Rest & Recovery</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Training", value: workoutData.filter((w) => w.exercises.length > 0).length },
            { label: "Completed", value: Object.values(completed).filter(Boolean).length },
            { label: "Rest", value: workoutData.filter((w) => w.exercises.length === 0).length },
            { label: "Total Exercises", value: workoutData.reduce((sum, w) => sum + w.exercises.length, 0) },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-gray-200/60 p-5 hover:border-gray-300 hover:shadow-sm transition-all">
              <div className="text-3xl font-semibold text-gray-900 tracking-tight tabular-nums">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1.5 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default WorkoutApp;
