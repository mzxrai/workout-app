import React, { useState, useEffect } from "react";
import {
  Check,
  Circle,
  Calendar,
  LayoutList,
  Play,
  Dumbbell,
  Activity,
  BarChart3,
} from "lucide-react";

const workoutData = [
  {
    date: "2025-10-30",
    day: "Thursday",
    workout_type: "Arms + Core + Back",
    exercises: [
      {
        name: "Chest-Supported DB Row",
        sets: "3",
        reps: "10–12",
        weight: "20–30 lbs",
        rest: "90 sec",
        notes: "Lead with back work",
        demo_link:
          "https://www.youtube.com/results?search_query=Chest-Supported+DB+Row+proper+form+short",
      },
      {
        name: "Bicep Curls",
        sets: "3",
        reps: "10–12",
        weight: "15–25 lbs",
        rest: "90 sec",
        notes: "3-sec eccentric",
        demo_link:
          "https://www.youtube.com/results?search_query=Bicep+Curls+proper+form+short",
      },
      {
        name: "Band Face Pulls",
        sets: "3",
        reps: "15–20",
        weight: "Moderate",
        rest: "60 sec",
        notes: "External rotation focus",
        demo_link:
          "https://www.youtube.com/results?search_query=Band+Face+Pulls+proper+form+short",
      },
      {
        name: "Hammer Curls",
        sets: "3",
        reps: "10–12",
        weight: "15–25 lbs",
        rest: "90 sec",
        notes: "Neutral grip",
        demo_link:
          "https://www.youtube.com/results?search_query=Hammer+Curls+proper+form+short",
      },
      {
        name: "Tricep Dips (Bench)",
        sets: "3",
        reps: "8–12",
        weight: "Bodyweight",
        rest: "90 sec",
        notes: "Full lockout",
        demo_link:
          "https://www.youtube.com/results?search_query=Tricep+Dips+(Bench)+proper+form+short",
      },
      {
        name: "Prone YTWs",
        sets: "2",
        reps: "10–12",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Scapular health",
        demo_link:
          "https://www.youtube.com/results?search_query=Prone+YTWs+proper+form+short",
      },
      {
        name: "Weighted Plank",
        sets: "3",
        reps: "30–45 sec",
        weight: "10–15 lbs",
        rest: "60 sec",
        notes: "Brace hard",
        demo_link:
          "https://www.youtube.com/results?search_query=Weighted+Plank+proper+form+short",
      },
    ],
  },
  {
    date: "2025-10-31",
    day: "Friday",
    workout_type: "Chest + Back",
    exercises: [
      {
        name: "Chest-Supported DB Row",
        sets: "4",
        reps: "10–12",
        weight: "20–30 lbs",
        rest: "90 sec",
        notes: "Pull first, build back",
        demo_link:
          "https://www.youtube.com/results?search_query=Chest-Supported+DB+Row+proper+form+short",
      },
      {
        name: "Dumbbell Bench Press",
        sets: "3",
        reps: "8–12",
        weight: "25–30 lbs",
        rest: "90 sec",
        notes: "Controlled",
        demo_link:
          "https://www.youtube.com/results?search_query=Dumbbell+Bench+Press+proper+form+short",
      },
      {
        name: "Single-Arm DB Row",
        sets: "3",
        reps: "10–12/arm",
        weight: "20–30 lbs",
        rest: "75 sec",
        notes: "Unilateral work",
        demo_link:
          "https://www.youtube.com/results?search_query=Single-Arm+DB+Row+proper+form+short",
      },
      {
        name: "Incline DB Press",
        sets: "3",
        reps: "8–10",
        weight: "20–25 lbs",
        rest: "90 sec",
        notes: "30° incline",
        demo_link:
          "https://www.youtube.com/results?search_query=Incline+DB+Press+proper+form+short",
      },
      {
        name: "Band Pull-Aparts",
        sets: "3",
        reps: "15–20",
        weight: "Light–Mod",
        rest: "45 sec",
        notes: "Rear delt pump",
        demo_link:
          "https://www.youtube.com/results?search_query=Band+Pull-Aparts+proper+form+short",
      },
      {
        name: "Peloton Ride",
        sets: "1",
        reps: "15–20 min",
        weight: "Low",
        rest: "-",
        notes: "Stay pain-free",
        demo_link:
          "https://www.youtube.com/results?search_query=Peloton+Ride+proper+form+short",
      },
    ],
  },
  {
    date: "2025-11-01",
    day: "Saturday",
    workout_type: "Rest",
    exercises: [],
  },
  {
    date: "2025-11-02",
    day: "Sunday",
    workout_type: "Push + Rear Delts",
    exercises: [
      {
        name: "DB Shoulder Press",
        sets: "3",
        reps: "8–10",
        weight: "20–25 lbs",
        rest: "90 sec",
        notes: "No knee lock",
        demo_link:
          "https://www.youtube.com/results?search_query=DB+Shoulder+Press+proper+form+short",
      },
      {
        name: "Prone YTWs",
        sets: "3",
        reps: "10–12",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Rear delt emphasis",
        demo_link:
          "https://www.youtube.com/results?search_query=Prone+YTWs+proper+form+short",
      },
      {
        name: "Lateral Raises",
        sets: "3",
        reps: "12–15",
        weight: "15 lbs",
        rest: "60 sec",
        notes: "Control top",
        demo_link:
          "https://www.youtube.com/results?search_query=Lateral+Raises+proper+form+short",
      },
      {
        name: "Band Face Pulls",
        sets: "3",
        reps: "15–20",
        weight: "Moderate",
        rest: "60 sec",
        notes: "High elbows, external rotation",
        demo_link:
          "https://www.youtube.com/results?search_query=Band+Face+Pulls+proper+form+short",
      },
      {
        name: "Close-Grip Push-Ups",
        sets: "3",
        reps: "8–12",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Triceps",
        demo_link:
          "https://www.youtube.com/results?search_query=Close-Grip+Push-Ups+proper+form+short",
      },
      {
        name: "Tricep Kickbacks",
        sets: "3",
        reps: "12–15",
        weight: "15 lbs",
        rest: "60 sec",
        notes: "Elbows high",
        demo_link:
          "https://www.youtube.com/results?search_query=Tricep+Kickbacks+proper+form+short",
      },
    ],
  },
  {
    date: "2025-11-03",
    day: "Monday",
    workout_type: "Back + Core",
    exercises: [
      {
        name: "Chest-Supported DB Row",
        sets: "4",
        reps: "10–12",
        weight: "20–30 lbs",
        rest: "90 sec",
        notes: "Volume day for back",
        demo_link:
          "https://www.youtube.com/results?search_query=Chest-Supported+DB+Row+proper+form+short",
      },
      {
        name: "Single-Arm DB Row",
        sets: "3",
        reps: "10–12/arm",
        weight: "25–30 lbs",
        rest: "90 sec",
        notes: "Full stretch at bottom",
        demo_link:
          "https://www.youtube.com/results?search_query=Single-Arm+DB+Row+proper+form+short",
      },
      {
        name: "Band Face Pulls",
        sets: "3",
        reps: "12–15",
        weight: "Moderate",
        rest: "60 sec",
        notes: "External rotation",
        demo_link:
          "https://www.youtube.com/results?search_query=Band+Face+Pulls+proper+form+short",
      },
      {
        name: "Dead Bugs",
        sets: "3",
        reps: "8/side",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Ribs down",
        demo_link:
          "https://www.youtube.com/results?search_query=Dead+Bugs+proper+form+short",
      },
      {
        name: "Weighted Plank",
        sets: "3",
        reps: "30–45 sec",
        weight: "10–15 lbs",
        rest: "60 sec",
        notes: "Brace hard",
        demo_link:
          "https://www.youtube.com/results?search_query=Weighted+Plank+proper+form+short",
      },
    ],
  },
  {
    date: "2025-11-04",
    day: "Tuesday",
    workout_type: "Active Recovery / Peloton",
    exercises: [
      {
        name: "Peloton Ride",
        sets: "1",
        reps: "20 min",
        weight: "Low",
        rest: "-",
        notes: "Slightly longer",
        demo_link:
          "https://www.youtube.com/results?search_query=Peloton+Ride+proper+form+short",
      },
      {
        name: "Mobility Flow",
        sets: "1",
        reps: "10–15 min",
        weight: "-",
        rest: "-",
        notes: "Add T-spine openers",
        demo_link:
          "https://www.youtube.com/results?search_query=Mobility+Flow+proper+form+short",
      },
    ],
  },
  {
    date: "2025-11-05",
    day: "Wednesday",
    workout_type: "Rest",
    exercises: [],
  },
  {
    date: "2025-11-06",
    day: "Thursday",
    workout_type: "Arms + Core + Back",
    exercises: [
      {
        name: "Band Rows",
        sets: "3",
        reps: "15–20",
        weight: "Moderate–Heavy",
        rest: "75 sec",
        notes: "High rep back work",
        demo_link:
          "https://www.youtube.com/results?search_query=Band+Rows+proper+form+short",
      },
      {
        name: "Incline DB Curls",
        sets: "4",
        reps: "10–12",
        weight: "15–20 lbs",
        rest: "90 sec",
        notes: "+1 set curls",
        demo_link:
          "https://www.youtube.com/results?search_query=Incline+DB+Curls+proper+form+short",
      },
      {
        name: "Prone YTWs",
        sets: "3",
        reps: "10–12",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Scapular control",
        demo_link:
          "https://www.youtube.com/results?search_query=Prone+YTWs+proper+form+short",
      },
      {
        name: "Hammer Curls",
        sets: "3",
        reps: "10–12",
        weight: "15–25 lbs",
        rest: "90 sec",
        notes: "Add last set AMRAP-1",
        demo_link:
          "https://www.youtube.com/results?search_query=Hammer+Curls+proper+form+short",
      },
      {
        name: "Bench Dips (Feet Elevated)",
        sets: "3",
        reps: "8–12",
        weight: "Bodyweight",
        rest: "90 sec",
        notes: "Control bottom",
        demo_link:
          "https://www.youtube.com/results?search_query=Bench+Dips+(Feet+Elevated)+proper+form+short",
      },
      {
        name: "Band Face Pulls",
        sets: "3",
        reps: "12–15",
        weight: "Moderate",
        rest: "60 sec",
        notes: "High elbows",
        demo_link:
          "https://www.youtube.com/results?search_query=Band+Face+Pulls+proper+form+short",
      },
      {
        name: "Weighted Dead Bug",
        sets: "3",
        reps: "8/side",
        weight: "10–15 lbs",
        rest: "60 sec",
        notes: "Slow",
        demo_link:
          "https://www.youtube.com/results?search_query=Weighted+Dead+Bug+proper+form+short",
      },
    ],
  },
  {
    date: "2025-11-07",
    day: "Friday",
    workout_type: "Back + Chest",
    exercises: [
      {
        name: "Chest-Supported DB Row",
        sets: "4",
        reps: "10–12",
        weight: "25–30 lbs",
        rest: "90 sec",
        notes: "Progress load, pull first",
        demo_link:
          "https://www.youtube.com/results?search_query=Chest-Supported+DB+Row+proper+form+short",
      },
      {
        name: "Dumbbell Bench Press",
        sets: "4",
        reps: "8–10",
        weight: "25–30 lbs",
        rest: "90 sec",
        notes: "+1 set",
        demo_link:
          "https://www.youtube.com/results?search_query=Dumbbell+Bench+Press+proper+form+short",
      },
      {
        name: "Band Rows (Unilateral)",
        sets: "3",
        reps: "12/arm",
        weight: "Moderate",
        rest: "75 sec",
        notes: "Anti-rotation challenge",
        demo_link:
          "https://www.youtube.com/results?search_query=Band+Rows+proper+form+short",
      },
      {
        name: "Incline DB Press",
        sets: "3",
        reps: "8–10",
        weight: "20–25 lbs",
        rest: "90 sec",
        notes: "Progress load if clean",
        demo_link:
          "https://www.youtube.com/results?search_query=Incline+DB+Press+proper+form+short",
      },
      {
        name: "Band Pull-Aparts",
        sets: "3",
        reps: "20–25",
        weight: "Light",
        rest: "45 sec",
        notes: "High volume rear delts",
        demo_link:
          "https://www.youtube.com/results?search_query=Band+Pull-Aparts+proper+form+short",
      },
      {
        name: "Peloton Ride",
        sets: "1",
        reps: "15–20 min",
        weight: "Low",
        rest: "-",
        notes: "Easy spin",
        demo_link:
          "https://www.youtube.com/results?search_query=Peloton+Ride+proper+form+short",
      },
    ],
  },
  {
    date: "2025-11-08",
    day: "Saturday",
    workout_type: "Rest",
    exercises: [],
  },
  {
    date: "2025-11-09",
    day: "Sunday",
    workout_type: "Push + Rear Delts",
    exercises: [
      {
        name: "DB Shoulder Press",
        sets: "4",
        reps: "8–10",
        weight: "20–25 lbs",
        rest: "90 sec",
        notes: "+1 set",
        demo_link:
          "https://www.youtube.com/results?search_query=DB+Shoulder+Press+proper+form+short",
      },
      {
        name: "Prone YTWs",
        sets: "3",
        reps: "12–15",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "More volume rear delts",
        demo_link:
          "https://www.youtube.com/results?search_query=Prone+YTWs+proper+form+short",
      },
      {
        name: "Lateral Raises",
        sets: "3",
        reps: "12–15",
        weight: "15 lbs",
        rest: "60 sec",
        notes: "Last set drop",
        demo_link:
          "https://www.youtube.com/results?search_query=Lateral+Raises+proper+form+short",
      },
      {
        name: "Band Face Pulls",
        sets: "3",
        reps: "15–20",
        weight: "Moderate",
        rest: "60 sec",
        notes: "External rotation focus",
        demo_link:
          "https://www.youtube.com/results?search_query=Band+Face+Pulls+proper+form+short",
      },
      {
        name: "Bench Dips",
        sets: "3",
        reps: "10–12",
        weight: "Bodyweight",
        rest: "60–75 sec",
        notes: "Full lock",
        demo_link:
          "https://www.youtube.com/results?search_query=Bench+Dips+proper+form+short",
      },
      {
        name: "Overhead DB Tricep Ext",
        sets: "3",
        reps: "10–12",
        weight: "20 lbs",
        rest: "75 sec",
        notes: "Controlled",
        demo_link:
          "https://www.youtube.com/results?search_query=Overhead+DB+Tricep+Ext+proper+form+short",
      },
    ],
  },
  {
    date: "2025-11-10",
    day: "Monday",
    workout_type: "Core + Back",
    exercises: [
      {
        name: "Reverse Crunch",
        sets: "3",
        reps: "12–15",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Posterior tilt",
        demo_link:
          "https://www.youtube.com/results?search_query=Reverse+Crunch+proper+form+short",
      },
      {
        name: "Band Rows (High rep)",
        sets: "3",
        reps: "15–20",
        weight: "Light–Mod",
        rest: "60 sec",
        notes: "Tempo 2-0-2",
        demo_link: null,
      },
      {
        name: "Prone YTWs",
        sets: "3",
        reps: "10–12",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Scap control",
        demo_link:
          "https://www.youtube.com/results?search_query=Prone+YTWs+proper+form+short",
      },
      {
        name: "Side Plank",
        sets: "3",
        reps: "30–45 sec/side",
        weight: "Bodyweight",
        rest: "45–60 sec",
        notes: "Hips tall",
        demo_link:
          "https://www.youtube.com/results?search_query=Side+Plank+proper+form+short",
      },
    ],
  },
  {
    date: "2025-11-11",
    day: "Tuesday",
    workout_type: "Active Recovery / Peloton",
    exercises: [
      {
        name: "Peloton Ride",
        sets: "1",
        reps: "15–20 min",
        weight: "Low",
        rest: "-",
        notes: "Optional",
        demo_link:
          "https://www.youtube.com/results?search_query=Peloton+Ride+proper+form+short",
      },
      {
        name: "Mobility Flow",
        sets: "1",
        reps: "15 min",
        weight: "-",
        rest: "-",
        notes: "Hips/shoulders focus",
        demo_link:
          "https://www.youtube.com/results?search_query=Mobility+Flow+proper+form+short",
      },
    ],
  },
  {
    date: "2025-11-12",
    day: "Wednesday",
    workout_type: "Rest",
    exercises: [],
  },
  {
    date: "2025-11-13",
    day: "Thursday",
    workout_type: "Arms + Core + Back",
    exercises: [
      {
        name: "Single-Arm DB Row",
        sets: "3",
        reps: "12–14/arm",
        weight: "25–30 lbs",
        rest: "75 sec",
        notes: "Unilateral back work",
        demo_link:
          "https://www.youtube.com/results?search_query=Single-Arm+DB+Row+proper+form+short",
      },
      {
        name: "Bicep Curls",
        sets: "3",
        reps: "12–14",
        weight: "15–25 lbs",
        rest: "75 sec",
        notes: "Shorter rest",
        demo_link:
          "https://www.youtube.com/results?search_query=Bicep+Curls+proper+form+short",
      },
      {
        name: "Band Pull-Aparts",
        sets: "3",
        reps: "20–25",
        weight: "Light",
        rest: "45 sec",
        notes: "High rep rear delts",
        demo_link:
          "https://www.youtube.com/results?search_query=Band+Pull-Aparts+proper+form+short",
      },
      {
        name: "Cross-Body Hammer Curls",
        sets: "3",
        reps: "10–12",
        weight: "15–20 lbs",
        rest: "75 sec",
        notes: "Squeeze peak",
        demo_link:
          "https://www.youtube.com/results?search_query=Cross-Body+Hammer+Curls+proper+form+short",
      },
      {
        name: "Bench Dips",
        sets: "3",
        reps: "10–14",
        weight: "Bodyweight",
        rest: "75 sec",
        notes: "Density up",
        demo_link:
          "https://www.youtube.com/results?search_query=Bench+Dips+proper+form+short",
      },
      {
        name: "Prone YTWs",
        sets: "2",
        reps: "12–15",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Scapular finisher",
        demo_link:
          "https://www.youtube.com/results?search_query=Prone+YTWs+proper+form+short",
      },
      {
        name: "Plank + Reach",
        sets: "3",
        reps: "8/side",
        weight: "Bodyweight",
        rest: "45–60 sec",
        notes: "Anti-rotation",
        demo_link:
          "https://www.youtube.com/results?search_query=Plank+++Reach+proper+form+short",
      },
    ],
  },
  {
    date: "2025-11-14",
    day: "Friday",
    workout_type: "Back + Chest",
    exercises: [
      {
        name: "Band Rows",
        sets: "4",
        reps: "15–20",
        weight: "Moderate–Heavy",
        rest: "60–75 sec",
        notes: "High volume, full stretch",
        demo_link:
          "https://www.youtube.com/results?search_query=Band+Rows+proper+form+short",
      },
      {
        name: "Dumbbell Bench Press",
        sets: "3",
        reps: "10–12",
        weight: "25–30 lbs",
        rest: "75 sec",
        notes: "Shorter rest",
        demo_link:
          "https://www.youtube.com/results?search_query=Dumbbell+Bench+Press+proper+form+short",
      },
      {
        name: "DB Pullovers (Bench)",
        sets: "3",
        reps: "10–12",
        weight: "20–25 lbs",
        rest: "60 sec",
        notes: "Lat focus",
        demo_link:
          "https://www.youtube.com/results?search_query=DB+Pullovers+(Bench)+proper+form+short",
      },
      {
        name: "Incline DB Press",
        sets: "3",
        reps: "10–12",
        weight: "20–25 lbs",
        rest: "75 sec",
        notes: "Density",
        demo_link:
          "https://www.youtube.com/results?search_query=Incline+DB+Press+proper+form+short",
      },
      {
        name: "Band Pull-Aparts",
        sets: "3",
        reps: "20–25",
        weight: "Light",
        rest: "45 sec",
        notes: "Rear delt pump",
        demo_link:
          "https://www.youtube.com/results?search_query=Band+Pull-Aparts+proper+form+short",
      },
      {
        name: "Peloton Ride",
        sets: "1",
        reps: "15–20 min",
        weight: "Low",
        rest: "-",
        notes: "Optional",
        demo_link:
          "https://www.youtube.com/results?search_query=Peloton+Ride+proper+form+short",
      },
    ],
  },
  {
    date: "2025-11-15",
    day: "Saturday",
    workout_type: "Rest",
    exercises: [],
  },
  {
    date: "2025-11-16",
    day: "Sunday",
    workout_type: "Push + Rear Delts",
    exercises: [
      {
        name: "DB Shoulder Press",
        sets: "3",
        reps: "10–12",
        weight: "20–25 lbs",
        rest: "75 sec",
        notes: "Density up",
        demo_link:
          "https://www.youtube.com/results?search_query=DB+Shoulder+Press+proper+form+short",
      },
      {
        name: "Prone YTWs",
        sets: "3",
        reps: "12–15",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Rear delt priority",
        demo_link:
          "https://www.youtube.com/results?search_query=Prone+YTWs+proper+form+short",
      },
      {
        name: "Lateral Raises (Partial reps at end)",
        sets: "3",
        reps: "12–15 + 5",
        weight: "15 lbs",
        rest: "60 sec",
        notes: "Pump",
        demo_link:
          "https://www.youtube.com/results?search_query=Lateral+Raises+(Partial+reps+at+end)+proper+form+short",
      },
      {
        name: "Band Face Pulls",
        sets: "3",
        reps: "15–20",
        weight: "Moderate",
        rest: "60 sec",
        notes: "External rotation",
        demo_link:
          "https://www.youtube.com/results?search_query=Band+Face+Pulls+proper+form+short",
      },
      {
        name: "Close-Grip Push-Ups",
        sets: "3",
        reps: "10–14",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "AMRAP-1",
        demo_link:
          "https://www.youtube.com/results?search_query=Close-Grip+Push-Ups+proper+form+short",
      },
      {
        name: "Tricep Rope/Band Pressdowns",
        sets: "3",
        reps: "12–15",
        weight: "Band",
        rest: "60 sec",
        notes: "Lockout squeeze",
        demo_link:
          "https://www.youtube.com/results?search_query=Tricep+Rope/Band+Pressdowns+proper+form+short",
      },
    ],
  },
  {
    date: "2025-11-17",
    day: "Monday",
    workout_type: "Core + Back",
    exercises: [
      {
        name: "Reverse Crunch",
        sets: "3",
        reps: "12–15",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Posterior tilt",
        demo_link:
          "https://www.youtube.com/results?search_query=Reverse+Crunch+proper+form+short",
      },
      {
        name: "Band Rows (High rep)",
        sets: "3",
        reps: "15–20",
        weight: "Light–Mod",
        rest: "60 sec",
        notes: "Tempo 2-0-2",
        demo_link: null,
      },
      {
        name: "Prone YTWs",
        sets: "3",
        reps: "10–12",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Scap control",
        demo_link:
          "https://www.youtube.com/results?search_query=Prone+YTWs+proper+form+short",
      },
      {
        name: "Side Plank",
        sets: "3",
        reps: "30–45 sec/side",
        weight: "Bodyweight",
        rest: "45–60 sec",
        notes: "Hips tall",
        demo_link:
          "https://www.youtube.com/results?search_query=Side+Plank+proper+form+short",
      },
    ],
  },
  {
    date: "2025-11-18",
    day: "Tuesday",
    workout_type: "Active Recovery / Peloton",
    exercises: [
      {
        name: "Peloton Ride",
        sets: "1",
        reps: "15–20 min",
        weight: "Low",
        rest: "-",
        notes: "Optional",
        demo_link:
          "https://www.youtube.com/results?search_query=Peloton+Ride+proper+form+short",
      },
      {
        name: "Mobility Flow",
        sets: "1",
        reps: "15 min",
        weight: "-",
        rest: "-",
        notes: "Hips/shoulders focus",
        demo_link:
          "https://www.youtube.com/results?search_query=Mobility+Flow+proper+form+short",
      },
    ],
  },
  {
    date: "2025-11-19",
    day: "Wednesday",
    workout_type: "Rest",
    exercises: [],
  },
  {
    date: "2025-11-20",
    day: "Thursday",
    workout_type: "Arms + Core + Back",
    exercises: [
      {
        name: "Single-Arm DB Row",
        sets: "3",
        reps: "12–14/arm",
        weight: "25–30 lbs",
        rest: "75 sec",
        notes: "Unilateral back work",
        demo_link:
          "https://www.youtube.com/results?search_query=Single-Arm+DB+Row+proper+form+short",
      },
      {
        name: "Bicep Curls",
        sets: "3",
        reps: "12–14",
        weight: "15–25 lbs",
        rest: "75 sec",
        notes: "Shorter rest",
        demo_link:
          "https://www.youtube.com/results?search_query=Bicep+Curls+proper+form+short",
      },
      {
        name: "Band Pull-Aparts",
        sets: "3",
        reps: "20–25",
        weight: "Light",
        rest: "45 sec",
        notes: "High rep rear delts",
        demo_link:
          "https://www.youtube.com/results?search_query=Band+Pull-Aparts+proper+form+short",
      },
      {
        name: "Cross-Body Hammer Curls",
        sets: "3",
        reps: "10–12",
        weight: "15–20 lbs",
        rest: "75 sec",
        notes: "Squeeze peak",
        demo_link:
          "https://www.youtube.com/results?search_query=Cross-Body+Hammer+Curls+proper+form+short",
      },
      {
        name: "Bench Dips",
        sets: "3",
        reps: "10–14",
        weight: "Bodyweight",
        rest: "75 sec",
        notes: "Density up",
        demo_link:
          "https://www.youtube.com/results?search_query=Bench+Dips+proper+form+short",
      },
      {
        name: "Prone YTWs",
        sets: "2",
        reps: "12–15",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Scapular finisher",
        demo_link:
          "https://www.youtube.com/results?search_query=Prone+YTWs+proper+form+short",
      },
      {
        name: "Plank + Reach",
        sets: "3",
        reps: "8/side",
        weight: "Bodyweight",
        rest: "45–60 sec",
        notes: "Anti-rotation",
        demo_link:
          "https://www.youtube.com/results?search_query=Plank+++Reach+proper+form+short",
      },
    ],
  },
  {
    date: "2025-11-21",
    day: "Friday",
    workout_type: "Back + Chest",
    exercises: [
      {
        name: "Band Rows",
        sets: "4",
        reps: "15–20",
        weight: "Moderate–Heavy",
        rest: "60–75 sec",
        notes: "High volume, full stretch",
        demo_link:
          "https://www.youtube.com/results?search_query=Band+Rows+proper+form+short",
      },
      {
        name: "Dumbbell Bench Press",
        sets: "3",
        reps: "10–12",
        weight: "25–30 lbs",
        rest: "75 sec",
        notes: "Shorter rest",
        demo_link:
          "https://www.youtube.com/results?search_query=Dumbbell+Bench+Press+proper+form+short",
      },
      {
        name: "DB Pullovers (Bench)",
        sets: "3",
        reps: "10–12",
        weight: "20–25 lbs",
        rest: "60 sec",
        notes: "Lat focus",
        demo_link:
          "https://www.youtube.com/results?search_query=DB+Pullovers+(Bench)+proper+form+short",
      },
      {
        name: "Incline DB Press",
        sets: "3",
        reps: "10–12",
        weight: "20–25 lbs",
        rest: "75 sec",
        notes: "Density",
        demo_link:
          "https://www.youtube.com/results?search_query=Incline+DB+Press+proper+form+short",
      },
      {
        name: "Band Pull-Aparts",
        sets: "3",
        reps: "20–25",
        weight: "Light",
        rest: "45 sec",
        notes: "Rear delt pump",
        demo_link:
          "https://www.youtube.com/results?search_query=Band+Pull-Aparts+proper+form+short",
      },
      {
        name: "Peloton Ride",
        sets: "1",
        reps: "15–20 min",
        weight: "Low",
        rest: "-",
        notes: "Optional",
        demo_link:
          "https://www.youtube.com/results?search_query=Peloton+Ride+proper+form+short",
      },
    ],
  },
  {
    date: "2025-11-22",
    day: "Saturday",
    workout_type: "Rest",
    exercises: [],
  },
  {
    date: "2025-11-23",
    day: "Sunday",
    workout_type: "Push + Rear Delts",
    exercises: [
      {
        name: "DB Shoulder Press",
        sets: "3",
        reps: "10–12",
        weight: "20–25 lbs",
        rest: "75 sec",
        notes: "Density up",
        demo_link:
          "https://www.youtube.com/results?search_query=DB+Shoulder+Press+proper+form+short",
      },
      {
        name: "Prone YTWs",
        sets: "3",
        reps: "12–15",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Rear delt priority",
        demo_link:
          "https://www.youtube.com/results?search_query=Prone+YTWs+proper+form+short",
      },
      {
        name: "Lateral Raises (Partial reps at end)",
        sets: "3",
        reps: "12–15 + 5",
        weight: "15 lbs",
        rest: "60 sec",
        notes: "Pump",
        demo_link:
          "https://www.youtube.com/results?search_query=Lateral+Raises+(Partial+reps+at+end)+proper+form+short",
      },
      {
        name: "Band Face Pulls",
        sets: "3",
        reps: "15–20",
        weight: "Moderate",
        rest: "60 sec",
        notes: "External rotation",
        demo_link:
          "https://www.youtube.com/results?search_query=Band+Face+Pulls+proper+form+short",
      },
      {
        name: "Close-Grip Push-Ups",
        sets: "3",
        reps: "10–14",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "AMRAP-1",
        demo_link:
          "https://www.youtube.com/results?search_query=Close-Grip+Push-Ups+proper+form+short",
      },
      {
        name: "Tricep Rope/Band Pressdowns",
        sets: "3",
        reps: "12–15",
        weight: "Band",
        rest: "60 sec",
        notes: "Lockout squeeze",
        demo_link:
          "https://www.youtube.com/results?search_query=Tricep+Rope/Band+Pressdowns+proper+form+short",
      },
    ],
  },
  {
    date: "2025-11-24",
    day: "Monday",
    workout_type: "Core + Back",
    exercises: [
      {
        name: "Reverse Crunch",
        sets: "3",
        reps: "12–15",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Posterior tilt",
        demo_link:
          "https://www.youtube.com/results?search_query=Reverse+Crunch+proper+form+short",
      },
      {
        name: "Plank Hold",
        sets: "3",
        reps: "30–45 sec",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Brace",
        demo_link:
          "https://www.youtube.com/results?search_query=Plank+Hold+proper+form+short",
      },
      {
        name: "Band Rows (Unilateral)",
        sets: "3",
        reps: "12/side",
        weight: "Light–Mod",
        rest: "60 sec",
        notes: "Stability",
        demo_link:
          "https://www.youtube.com/results?search_query=Band+Rows+(Unilateral)+proper+form+short",
      },
    ],
  },
  {
    date: "2025-11-25",
    day: "Tuesday",
    workout_type: "Arms + Core + Back (Light)",
    exercises: [
      {
        name: "Band Rows",
        sets: "3",
        reps: "15–20",
        weight: "Light–Mod",
        rest: "60 sec",
        notes: "Deload week - lighter",
        demo_link:
          "https://www.youtube.com/results?search_query=Band+Rows+proper+form+short",
      },
      {
        name: "Band Bicep Curls",
        sets: "3",
        reps: "12–15",
        weight: "Light–Mod",
        rest: "60 sec",
        notes: "Slow tempo",
        demo_link:
          "https://www.youtube.com/results?search_query=Band+Bicep+Curls+proper+form+short",
      },
      {
        name: "Band Face Pulls",
        sets: "3",
        reps: "15–20",
        weight: "Light",
        rest: "45–60 sec",
        notes: "Upper back health",
        demo_link:
          "https://www.youtube.com/results?search_query=Band+Face+Pulls+proper+form+short",
      },
      {
        name: "Bench/Chair Dips",
        sets: "3",
        reps: "10–12",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Control bottom",
        demo_link:
          "https://www.youtube.com/results?search_query=Bench/Chair+Dips+proper+form+short",
      },
      {
        name: "Plank Shoulder Taps",
        sets: "3",
        reps: "20 taps",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Anti-rotation",
        demo_link:
          "https://www.youtube.com/results?search_query=Plank+Shoulder+Taps+proper+form+short",
      },
    ],
  },
  {
    date: "2025-11-26",
    day: "Wednesday",
    workout_type: "Back + Chest (Light)",
    exercises: [
      {
        name: "Band Rows",
        sets: "4",
        reps: "15–20",
        weight: "Light–Mod",
        rest: "60 sec",
        notes: "Pull priority, deload",
        demo_link:
          "https://www.youtube.com/results?search_query=Band+Rows+proper+form+short",
      },
      {
        name: "Push-Ups",
        sets: "3",
        reps: "10–15",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Full range",
        demo_link: null,
      },
      {
        name: "Prone YTWs",
        sets: "3",
        reps: "10–12",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Scapular health",
        demo_link:
          "https://www.youtube.com/results?search_query=Prone+YTWs+proper+form+short",
      },
      {
        name: "Supermans",
        sets: "3",
        reps: "10–12",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Pause at top",
        demo_link:
          "https://www.youtube.com/results?search_query=Supermans+proper+form+short",
      },
      {
        name: "Band Pull-Aparts",
        sets: "3",
        reps: "20–25",
        weight: "Light",
        rest: "45 sec",
        notes: "Rear delt finisher",
        demo_link:
          "https://www.youtube.com/results?search_query=Band+Pull-Aparts+proper+form+short",
      },
    ],
  },
  {
    date: "2025-11-27",
    day: "Thursday",
    workout_type: "Rest",
    exercises: [],
  },
  {
    date: "2025-11-28",
    day: "Friday",
    workout_type: "Arms + Core + Back (Light)",
    exercises: [
      {
        name: "Band Rows",
        sets: "3",
        reps: "15–20",
        weight: "Light–Mod",
        rest: "60 sec",
        notes: "Deload week - lighter",
        demo_link:
          "https://www.youtube.com/results?search_query=Band+Rows+proper+form+short",
      },
      {
        name: "Band Bicep Curls",
        sets: "3",
        reps: "12–15",
        weight: "Light–Mod",
        rest: "60 sec",
        notes: "Slow tempo",
        demo_link:
          "https://www.youtube.com/results?search_query=Band+Bicep+Curls+proper+form+short",
      },
      {
        name: "Band Face Pulls",
        sets: "3",
        reps: "15–20",
        weight: "Light",
        rest: "45–60 sec",
        notes: "Upper back health",
        demo_link:
          "https://www.youtube.com/results?search_query=Band+Face+Pulls+proper+form+short",
      },
      {
        name: "Bench/Chair Dips",
        sets: "3",
        reps: "10–12",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Control bottom",
        demo_link:
          "https://www.youtube.com/results?search_query=Bench/Chair+Dips+proper+form+short",
      },
      {
        name: "Plank Shoulder Taps",
        sets: "3",
        reps: "20 taps",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Anti-rotation",
        demo_link:
          "https://www.youtube.com/results?search_query=Plank+Shoulder+Taps+proper+form+short",
      },
    ],
  },
  {
    date: "2025-11-29",
    day: "Saturday",
    workout_type: "Rest",
    exercises: [],
  },
];

const WorkoutTracker = () => {
  const [completedExercises, setCompletedExercises] = useState(() => {
    const saved = localStorage.getItem("workoutProgress");
    return saved ? JSON.parse(saved) : {};
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [viewMode, setViewMode] = useState("list");

  // Persist to localStorage whenever completedExercises changes
  useEffect(() => {
    localStorage.setItem("workoutProgress", JSON.stringify(completedExercises));
  }, [completedExercises]);

  const getWorkoutTypeColor = (type) => {
    if (type.includes("Rest"))
      return "bg-gray-50 text-gray-900 border-gray-200";
    return "bg-white text-black border-gray-900";
  };

  const toggleExercise = (date, exerciseIndex) => {
    const key = `${date}-${exerciseIndex}`;
    setCompletedExercises((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const getWorkoutProgress = (date, exercises) => {
    if (exercises.length === 0) return 100;
    const completed = exercises.filter(
      (_, idx) => completedExercises[`${date}-${idx}`],
    ).length;
    return (completed / exercises.length) * 100;
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 sticky top-0 z-10 bg-white/80 backdrop-blur-lg">
        <div className="max-w-5xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-medium tracking-tight text-black">
                November Workout Plan
              </h1>
              <p className="text-sm text-gray-500 mt-1.5">
                Progressive Training Program
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("list")}
                className={`px-3.5 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-2 ${viewMode === "list" ? "bg-black text-white shadow-sm" : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"}`}
              >
                <LayoutList size={16} strokeWidth={2} />
                List
              </button>
              <button
                onClick={() => setViewMode("calendar")}
                className={`px-3.5 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-2 ${viewMode === "calendar" ? "bg-black text-white shadow-sm" : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"}`}
              >
                <Calendar size={16} strokeWidth={2} />
                Calendar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-8 py-12">
        {viewMode === "list" ? (
          <div className="space-y-6">
            {workoutData.map((workout, index) => {
              const progress = getWorkoutProgress(
                workout.date,
                workout.exercises,
              );
              const isRest = workout.exercises.length === 0;

              return (
                <div
                  key={index}
                  className="border border-gray-200 overflow-hidden transition-all hover:border-gray-400"
                >
                  {/* Workout Header */}
                  <div
                    className={`px-6 py-5 border-b border-gray-200 ${isRest ? "bg-gray-50" : "bg-white"}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-lg tracking-tight text-black">
                            {formatDate(workout.date)}
                          </span>
                          <span className="text-xs text-gray-500 tracking-wide uppercase">
                            {workout.day}
                          </span>
                          <span
                            className="px-3 py-1 text-xs tracking-wide uppercase border border-gray-200 text-gray-600"
                          >
                            {workout.workout_type}
                          </span>
                        </div>
                        {!isRest && (
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <Activity size={12} strokeWidth={1.5} />
                              <span>
                                {Math.round(progress)}% complete
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 h-1 overflow-hidden">
                              <div
                                className="bg-black h-1 transition-all duration-300"
                                style={{ width: `${progress}%` }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Exercises */}
                  {!isRest ? (
                    <div className="divide-y divide-gray-200">
                      {workout.exercises.map((exercise, exIdx) => {
                        const isCompleted =
                          completedExercises[`${workout.date}-${exIdx}`];

                        return (
                          <div
                            key={exIdx}
                            className={`px-6 py-6 transition-colors ${isCompleted ? "bg-gray-50" : "hover:bg-gray-50"}`}
                          >
                            <div className="flex items-start gap-4">
                              <button
                                onClick={() =>
                                  toggleExercise(workout.date, exIdx)
                                }
                                className="mt-1 flex-shrink-0 transition-all"
                              >
                                {isCompleted ? (
                                  <div className="w-5 h-5 border border-black bg-black flex items-center justify-center">
                                    <Check
                                      className="text-white"
                                      size={14}
                                      strokeWidth={2}
                                    />
                                  </div>
                                ) : (
                                  <div className="w-5 h-5 border border-gray-300 hover:border-black transition-all" />
                                )}
                              </button>

                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-4">
                                  <div className="flex-1 min-w-0">
                                    <h3
                                      className={`text-sm tracking-tight text-black mb-3 ${isCompleted ? "line-through opacity-40" : ""}`}
                                    >
                                      {exercise.name}
                                    </h3>
                                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
                                      <div className="flex items-center gap-2">
                                        <span className="text-gray-500 tracking-wide uppercase">Sets</span>
                                        <span className="text-black font-mono">
                                          {exercise.sets}
                                        </span>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <span className="text-gray-500 tracking-wide uppercase">Reps</span>
                                        <span className="text-black font-mono">
                                          {exercise.reps}
                                        </span>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <span className="text-gray-500 tracking-wide uppercase">Weight</span>
                                        <span className="text-black font-mono">
                                          {exercise.weight}
                                        </span>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <span className="text-gray-500 tracking-wide uppercase">Rest</span>
                                        <span className="text-black font-mono">
                                          {exercise.rest}
                                        </span>
                                      </div>
                                    </div>
                                    {exercise.notes && (
                                      <p className="mt-3 text-xs text-gray-600">
                                        {exercise.notes}
                                      </p>
                                    )}
                                  </div>

                                  {exercise.demo_link && (
                                    <a
                                      href={exercise.demo_link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex-shrink-0 px-4 py-2 border border-black bg-white hover:bg-black text-black hover:text-white text-xs tracking-wide uppercase transition-all flex items-center gap-2"
                                    >
                                      <Play size={12} strokeWidth={1.5} />
                                      Video
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="px-6 py-16 text-center">
                      <Activity
                        size={24}
                        className="mx-auto mb-3 text-gray-400"
                        strokeWidth={1}
                      />
                      <p className="text-sm text-gray-500 tracking-wide">
                        Rest Day — Recovery & Stretching
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {workoutData.map((workout, index) => {
              const progress = getWorkoutProgress(
                workout.date,
                workout.exercises,
              );
              const isRest = workout.exercises.length === 0;

              return (
                <div
                  key={index}
                  className="border border-gray-200 p-6 hover:border-gray-400 transition-all cursor-pointer"
                  onClick={() =>
                    setSelectedDate(
                      selectedDate === workout.date ? null : workout.date,
                    )
                  }
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-base tracking-tight text-black">
                        {formatDate(workout.date)}
                      </div>
                      <div className="text-xs text-gray-500 mt-1 tracking-wide uppercase">
                        {workout.day}
                      </div>
                    </div>
                    <span
                      className="px-3 py-1 text-xs tracking-wide uppercase border border-gray-200 text-gray-600"
                    >
                      {isRest ? "Rest" : `${workout.exercises.length}`}
                    </span>
                  </div>

                  <div
                    className="text-xs text-gray-600 mb-4"
                  >
                    {workout.workout_type}
                  </div>

                  {!isRest && (
                    <div>
                      <div className="w-full bg-gray-200 h-1 overflow-hidden">
                        <div
                          className="bg-black h-1 transition-all"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <div className="text-xs text-gray-500 mt-2 font-mono">
                        {Math.round(progress)}% complete
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Stats Footer */}
      <div className="max-w-5xl mx-auto px-8 pb-12">
        <div className="border border-gray-200 p-8">
          <h3 className="text-sm tracking-wide uppercase text-gray-500 mb-8">
            Monthly Overview
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl tracking-tight text-black mb-2">
                {workoutData.filter((w) => w.exercises.length > 0).length}
              </div>
              <div className="text-xs text-gray-500 tracking-wide uppercase">
                Training Days
              </div>
            </div>
            <div>
              <div className="text-4xl tracking-tight text-black mb-2">
                {
                  Object.keys(completedExercises).filter(
                    (k) => completedExercises[k],
                  ).length
                }
              </div>
              <div className="text-xs text-gray-500 tracking-wide uppercase">
                Completed
              </div>
            </div>
            <div>
              <div className="text-4xl tracking-tight text-black mb-2">
                {workoutData.filter((w) => w.exercises.length === 0).length}
              </div>
              <div className="text-xs text-gray-500 tracking-wide uppercase">
                Rest Days
              </div>
            </div>
            <div>
              <div className="text-4xl tracking-tight text-black mb-2">
                {workoutData.reduce((sum, w) => sum + w.exercises.length, 0)}
              </div>
              <div className="text-xs text-gray-500 tracking-wide uppercase">
                Total Exercises
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutTracker;
