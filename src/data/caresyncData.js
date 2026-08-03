// src/data/caresyncData.js

const careSyncData = {

    title: "CareSync",

    subtitle: "Intelligent Healthcare Management Platform",

    description:
        "A modern healthcare application that helps patients manage medications, monitor health, receive timely reminders, and access emergency assistance through an intuitive mobile experience.",
   innovation: [

            {
                title: "AI Ready",
                icon: "Brain",
                description: "AI-powered health insights and smart assistance."
            },

            {
                title: "Smart Medication",
                icon: "Pill",
                description: "Smart reminders and medication tracking."
            },

            {
                title: "Emergency Ready",
                icon: "ShieldAlert",
                description: "SOS support with emergency contacts."
            },

            {
                title: "Secure & Scalable",
                icon: "Lock",
                description: "Secure cloud infrastructure with Firebase."
            }

            ],
    technologies: [
        "Flutter",
        "Firebase",
        "Firestore",
        "REST API"
    ],

    screenshots: [

{
    title: "Login",

    image: "/assets/projects/caresync/CS1.png",

    description:
        "Secure authentication powered by Firebase Authentication, allowing users to safely register and access their personal healthcare dashboard..",

    highlights: [
                    {
                    title:"Secure Authentication",
                    text:"Firebase Authentication with email and password."
                    },
                    {
                    title:"Quick Registration",
                    text:"Create an account in just a few steps."
                    },
                    {
                    title:"Protected Access",
                    text:"Only authenticated users can access health records."
                    }
                ]

},

{
    title: "Dashboard",

    image: "/assets/projects/caresync/CS2.png",

    description:
        "The central hub of CareSync, providing medication reminders, daily health insights, quick actions, and an overview of the user's health status",

    highlights: [
                {
                title:"Today's Overview",
                text:"Instant view of medications, reminders and health metrics."
                },
                {
                title:"Quick Actions",
                text:"Access Scan Rx, Sleep Tracking and SOS with one tap."
                },
                {
                title:"Medication Schedule",
                text:"Upcoming medicines with due time and reminder status."
                }
            ]

},

{
    title: "Add Medicine",

    image: "/assets/projects/caresync/CS3.png",

    description:
        "Easily add medications with dosage, frequency, reminder timings, and treatment duration to ensure consistent medication management",

    highlights: [
                    {
                    title:"Easy Medicine Entry",
                    text:"Add medicine name, dosage and timing effortlessly."
                    },
                    {
                    title:"Flexible Scheduling",
                    text:"Support for multiple reminders throughout the day."
                    },
                    {
                    title:"Custom Duration",
                    text:"Set treatment start and end dates."
                    }
                ]

},

{
    title: "My Medicines",

    image: "/assets/projects/caresync/CS4.png",

    description:
        "Manage all active medications, review treatment history, edit schedules, and keep medication records organized.",

    highlights: [
                    {
                    title:"Medicine History",
                    text:"View all active and completed medications."
                    },
                    {
                    title:"Smart Search",
                    text:"Quickly find medicines using search and filters."
                    },
                    {
                    title:"One-Tap Management",
                    text:"Edit or remove medicines anytime."
                    }
                ]

},

{
    title: "Profile",

    image: "/assets/projects/caresync/CS5.png",

    description:
        "Personalize account information, notification preferences, and application settings while maintaining secure access.",

    highlights: [
                    {
                    title:"Personal Information",
                    text:"Manage account details securely."
                    },
                    {
                    title:"Health Preferences",
                    text:"Customize reminders and notification settings."
                    },
                    {
                    title:"Account Security",
                    text:"Update password and manage authentication."
                    }
                ]
},

{
    title: "Emergency SOS",

    image: "/assets/projects/caresync/CS6.png",

    description:
        "Provides quick access to emergency assistance and important contacts, enabling faster response during critical situations",

    
    highlights: [
                    {
                    title:"Instant SOS",
                    text:"Trigger emergency assistance in a single tap."
                    },
                    {
                    title:"Emergency Contacts",
                    text:"Quick access to saved family members and caregivers."
                    },
                    {
                    title:"Location Ready",
                    text:"Prepared for future real-time location sharing."
                    }
    ]

}

],

    features: [

{
    title: "Medication Reminders",
    icon: "Pill",
    description: "Receive smart reminders with customizable schedules."
},

{
    title: "Medicine Management",
    icon: "PackageOpen",
    description: "Add, edit and organize medicines with ease."
},

{
    title: "Health Monitoring",
    icon: "HeartPulse",
    description: "Track health records and monitor daily wellness."
},

{
    title: "Emergency Assistance",
    icon: "ShieldAlert",
    description: "Instant SOS access for critical situations."
},

{
    title: "Patient Profiles",
    icon: "UserRound",
    description: "Securely manage personal healthcare information."
},

{
    title: "Cloud Synchronization",
    icon: "Cloud",
    description: "Keep your healthcare data synchronized."

}

],
   roadmap: [

{
    title: "AI Health Insights",
    status: "Development",
    description:
        "AI-powered health insights and medication analytics."
},

{
    title: "AI Health Assistant",
    status: "Development",
    description:
        "Personal AI assistant for medication guidance."
},

{
    title: "Medical Report Analyzer",
    status: "Planned",
    description:
        "Extract key health metrics from uploaded reports."
},

{
    title: "Caregiver Dashboard",
    status: "Planned",
    description:
        "Remote monitoring for caregivers and family members."
},

{
    title: "Doctor Appointment Booking",
    status: "Research",
    description:
        "Book doctor appointments with smart reminders."
},

{
    title: "Wearable Integration",
    status: "Research",
    description:
        "Connect smart devices for continuous health monitoring."
}

]

};

export default careSyncData;