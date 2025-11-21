// src/redux/offerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    offers: [
        {
            id: 1,
            freelancerId: 1,
            name: 'Alex Martinez',
            title: 'Full Stack Developer',
            category: 'Web Development',
            description: 'Expert in React, Node.js, and MongoDB. 5+ years building scalable web applications.',
            skills: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
            rate: '$80/hr',
            rating: 4.9,
            completed: 127,
            avatar: 'AM'
        },
        {
            id: 2,
            freelancerId: 2,
            name: 'Emily Chen',
            title: 'UI/UX Designer',
            category: 'UX/UI Designer',
            description: 'Creating beautiful, user-centered designs. Specialized in mobile and web interfaces.',
            skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
            rate: '$65/hr',
            rating: 5.0,
            completed: 89,
            avatar: 'EC'
        },
        {
            id: 3,
            freelancerId: 3,
            name: 'Michael Brown',
            title: 'DevOps Engineer',
            category: 'DevOps',
            description: 'AWS certified with expertise in CI/CD, Docker, and Kubernetes infrastructure.',
            skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins'],
            rate: '$95/hr',
            rating: 4.8,
            completed: 64,
            avatar: 'MB'
        },
        {
            id: 4,
            freelancerId: 4,
            name: 'Sara Ali',
            title: 'Frontend Developer',
            category: 'Web Development',
            description: 'Skilled in React and Vue.js. 4 years of experience in responsive web apps.',
            skills: ['React', 'Vue.js', 'CSS', 'JavaScript'],
            rate: '$70/hr',
            rating: 4.7,
            completed: 55,
            avatar: 'SA'
        }
    ],
    valueCountByCategory: {
        'Web Development': 2,
        'UX/UI Designer': 1,
        'DevOps': 1,
    }
};

export const offerSlice = createSlice({
    name: 'offer',
    initialState,
    reducers: {
        addOffer: (state, action) => {
            // payload should include freelancerId and offer details
            const newOffer = { id: state.offers.length + 1, ...action.payload };
            state.offers.push(newOffer);
        },
        updateOffer: (state, action) => {
            // payload: { id, updatedOffer }
            const index = state.offers.findIndex(o => o.id === action.payload.id);
            if (index !== -1) state.offers[index] = { ...state.offers[index], ...action.payload.updatedOffer };
        },
        deleteOffer: (state, action) => {
            // payload: offer id
            state.offers = state.offers.filter(o => o.id !== action.payload);
        }
    }
});

export const { addOffer, updateOffer, deleteOffer } = offerSlice.actions;
export default offerSlice.reducer;
