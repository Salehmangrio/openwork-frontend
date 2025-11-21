import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    freelancers: [
        {
            id: 1,
            name: "Chander Kumar",
            email: "chander.kumar@example.com",
            password: "password123",
            bio: "Experienced web developer specializing in React and Node.js. Passionate about building scalable web applications.",
            stats: {
                activeProposals: 12,
                completed: 48,
                totalEarnings: 24500,
                rating: 4.9,
            },
            profileCompletion: 85,
            recentActivity: [
                { id: 1, text: "New message from client", color: "indigo", time: "2 hours ago" },
                { id: 2, text: "Project milestone completed", color: "green", time: "5 hours ago" },
                { id: 3, text: "Payment received", color: "purple", time: "1 day ago" },
                { id: 4, text: "New review received", color: "pink", time: "2 days ago" },
            ],
            quickActions: ["Browse Jobs", "View Messages", "Edit Profile"],
        },
        {
            id: 2,
            name: "Bilal Ahmed",
            email: "bilal.ahmed@example.com",
            password: "bilalPass789",
            bio: "Creative graphic designer with 5+ years of experience in branding and digital design. Dedicated to delivering visually compelling solutions.",
            stats: {
                activeProposals: 8,
                completed: 30,
                totalEarnings: 15000,
                rating: 4.8,
            },
            profileCompletion: 90,
            recentActivity: [
                { id: 1, text: "New project assigned", color: "indigo", time: "30 mins ago" },
                { id: 2, text: "Payment received", color: "green", time: "6 hours ago" },
            ],
            quickActions: ["Browse Jobs", "View Messages", "Edit Profile"],
        },
        {
            id: 3,
            name: "Maya Ali",
            email: "Maya.ali@example.com",
            password: "securePass456",
            bio: "Full-stack developer with expertise in Python and Django. Committed to writing clean, efficient code and delivering high-quality software solutions.",
            stats: {
                activeProposals: 5,
                completed: 20,
                totalEarnings: 12000,
                rating: 4.7,
            },
            profileCompletion: 70,
            recentActivity: [
                { id: 1, text: "Received new proposal", color: "indigo", time: "1 hour ago" },
                { id: 2, text: "Project approved", color: "green", time: "3 hours ago" },
            ],
            quickActions: ["Browse Jobs", "View Messages", "Edit Profile"],
        },
    ],
    currentFreelancerId: 1, // default selected freelancer
};

export const freelancerSlice = createSlice({
    name: 'freelancer',
    initialState,
    reducers: {
        setCurrentFreelancer: (state, action) => {
            state.currentFreelancerId = action.payload;
        },
        updateFreelancerStats: (state, action) => {
            const { freelancerId, stats } = action.payload;
            const freelancer = state.freelancers.find(f => f.id === freelancerId);
            if (freelancer) freelancer.stats = { ...freelancer.stats, ...stats };
        },
        addFreelancerActivity: (state, action) => {
            const { freelancerId, activity } = action.payload;
            const freelancer = state.freelancers.find(f => f.id === freelancerId);
            if (freelancer) freelancer.recentActivity.unshift(activity);
        },
        updateFreelancerProfile: (state, action) => {
            const { freelancerId, profile } = action.payload;
            const freelancer = state.freelancers.find(f => f.id === freelancerId);
            if (freelancer) Object.assign(freelancer, profile);
        },
        updateFreelancerPassword: (state, action) => {
            const { freelancerId, newPassword } = action.payload;
            const freelancer = state.freelancers.find(f => f.id === freelancerId);
            if (freelancer) freelancer.password = newPassword;
        },
        findFreelancerByEmail: (state, action) => {
            const { email, password } = action.payload;
            const freelancer = state.freelancers.find(f => f.email === email && f.password === password);
            // Update Current Freelancer ID if found
            if (freelancer) {
                state.currentFreelancerId = freelancer.id;
            }
            return freelancer
        },
    },
});

// Actions
export const {
    setCurrentFreelancer,
    updateFreelancerStats,
    addFreelancerActivity,
    updateFreelancerProfile,
    updateFreelancerPassword,
} = freelancerSlice.actions;

// Selector to get current freelancer
export const selectCurrentFreelancer = (state) => {
    if (!state.freelancer || !state.freelancer.freelancers) return null;
    return state.freelancer.freelancers.find(f => f.id === state.freelancer.currentFreelancerId);
};

export default freelancerSlice.reducer;
