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
      {
        name: "Calf Raises",
        sets: "3",
        reps: "15–20",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Start light, test knees",
        demo_link:
          "https://www.youtube.com/results?search_query=Calf+Raises+proper+form+short",
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
      {
        name: "Calf Raises",
        sets: "3",
        reps: "15–20",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Start light, test knees",
        demo_link:
          "https://www.youtube.com/results?search_query=Calf+Raises+proper+form+short",
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
        name: "Lying Leg Raises",
        sets: "3",
        reps: "10–12",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Lower back pressed",
        demo_link:
          "https://www.youtube.com/results?search_query=Lying+Leg+Raises+proper+form+short",
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
      {
        name: "Calf Raises",
        sets: "3",
        reps: "15–20",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Start light, test knees",
        demo_link:
          "https://www.youtube.com/results?search_query=Calf+Raises+proper+form+short",
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
        notes: "Hip circles, 90/90 hip stretch, Cat-cow, T-spine rotations, World's greatest stretch - NO deep squats (knee protection)",
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
        name: "Lying Leg Raises",
        sets: "3",
        reps: "10–12",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Lower back pressed, controlled",
        demo_link:
          "https://www.youtube.com/results?search_query=Lying+Leg+Raises+proper+form+short",
      },
      {
        name: "Calf Raises",
        sets: "3",
        reps: "15–20",
        weight: "Bodyweight",
        rest: "60 sec",
        notes: "Progress if feeling good",
        demo_link:
          "https://www.youtube.com/results?search_query=Calf+Raises+proper+form+short",
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
      {
        name: "Calf Raises",
        sets: "3",
        reps: "15–20",
        weight: "10 lbs",
        rest: "60 sec",
        notes: "Add light weight if feeling good",
        demo_link:
          "https://www.youtube.com/results?search_query=Calf+Raises+proper+form+short",
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
        notes: "Hip 90/90 stretch, Arm circles, Shoulder dislocations with band, Thread the needle, Child's pose - NO deep squats (knee protection)",
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
      {
        name: "Calf Raises",
        sets: "3",
        reps: "15–20",
        weight: "15 lbs",
        rest: "60 sec",
        notes: "Progress weight if comfortable",
        demo_link:
          "https://www.youtube.com/results?search_query=Calf+Raises+proper+form+short",
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
      {
        name: "Calf Raises",
        sets: "3",
        reps: "15–20",
        weight: "15 lbs",
        rest: "60 sec",
        notes: "Peak week - push it",
        demo_link:
          "https://www.youtube.com/results?search_query=Calf+Raises+proper+form+short",
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
        notes: "Hip 90/90 stretch, Arm circles, Shoulder dislocations with band, Thread the needle, Child's pose - NO deep squats (knee protection)",
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
      {
        name: "Calf Raises",
        sets: "3",
        reps: "15–20",
        weight: "15–20 lbs",
        rest: "60 sec",
        notes: "Maintain peak strength",
        demo_link:
          "https://www.youtube.com/results?search_query=Calf+Raises+proper+form+short",
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
      {
        name: "Calf Raises",
        sets: "3",
        reps: "15–20",
        weight: "15–20 lbs",
        rest: "60 sec",
        notes: "Final push before deload",
        demo_link:
          "https://www.youtube.com/results?search_query=Calf+Raises+proper+form+short",
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
