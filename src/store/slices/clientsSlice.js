// src/redux/clientSlice.js
import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    clients: [
        {
            id: 1,
            name: 'Saleh Mangrio',
            role: 'Client',
            email: 'saleh@example.com',
            password: ' salehPass123',
            avatar: 'SM',
            bio: 'Passionate about connecting with top freelance talent to bring innovative projects to life.',
            activeJobs: 8,
            hiredFreelancers: 24,
            totalSpent: 52300, // in USD
            proposalsReceived: 156,
            openJobs: [
                { id: 1, title: 'Mobile App Development', proposals: 12, posted: '3 days ago', color: 'indigo' },
                { id: 2, title: 'Logo Design Project', proposals: 8, posted: '1 week ago', color: 'purple' },
                { id: 3, title: 'SEO Optimization', proposals: 15, posted: '2 weeks ago', color: 'green' },
            ],
        },
        {
            id: 2,
            name: 'Bheesham Kumar',
            role: 'Client',
            email: 'bheesham@example.com',
            password: ' bheeshamPass456',
            avatar: 'BK',
            activeJobs: 5,
            bio: 'Dedicated to finding skilled freelancers who can deliver exceptional results on time and within budget.',
            hiredFreelancers: 12,
            totalSpent: 20350,
            proposalsReceived: 78,
            openJobs: [
                { id: 1, title: 'E-commerce Website', proposals: 20, posted: '5 days ago', color: 'indigo' },
                { id: 2, title: 'Brand Identity', proposals: 10, posted: '2 weeks ago', color: 'purple' },
            ],
        },
        {
            id: 3,
            name: 'Chandar Parkash',
            role: 'Client',
            email: 'chandar@example.com',
            password: ' chandarPass789',
            bio: 'Looking to collaborate with talented freelancers to achieve business goals and drive growth through innovative solutions.',
            avatar: 'CP',
            activeJobs: 7,
            hiredFreelancers: 18,
            totalSpent: 32100,
            proposalsReceived: 102,
            openJobs: [
                { id: 1, title: 'Website Redesign', proposals: 14, posted: '1 week ago', color: 'indigo' },
                { id: 2, title: 'Mobile Game Dev', proposals: 8, posted: '3 weeks ago', color: 'purple' },
            ],
        },
        {
            id: 4,
            name: 'Zeeshan Hyder',
            role: 'Client',
            email: 'zeeshan@example.com',
            password: ' zeeshanPass321',
            avatar: 'ZH',
            bio: 'Eager to engage with creative freelancers who can bring fresh ideas and perspectives to our projects.',
            activeJobs: 3,
            hiredFreelancers: 7,
            totalSpent: 15000,
            proposalsReceived: 45,
            openJobs: [
                { id: 1, title: 'Social Media Campaign', proposals: 12, posted: '2 days ago', color: 'indigo' },
            ],
        },
        {
            id: 5,
            name: 'Rimsha Latif',
            role: 'Client',
            email: 'ayesha@example.com',
            password: ' ayeshaPass654',
            bio: 'Committed to building long-term relationships with freelancers who consistently deliver high-quality work and exceed expectations.',
            avatar: 'RL',
            activeJobs: 4,
            hiredFreelancers: 9,
            totalSpent: 18800,
            proposalsReceived: 60,
            openJobs: [
                { id: 1, title: 'Content Writing', proposals: 15, posted: '1 week ago', color: 'indigo' },
                { id: 2, title: 'Graphic Design', proposals: 10, posted: '3 days ago', color: 'purple' },
            ],
        },
    ],
    currentClientId: 3, 
};

export const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        addClient: (state, action) => {
            const newClient = { id: state.clients.length + 1, ...action.payload };
            state.clients.push(newClient);
        },
        updateClient: (state, action) => {
            // payload: { id, updatedClient }
            const index = state.clients.findIndex(c => c.id === action.payload.id);
            if (index !== -1) {
                state.clients[index] = { ...state.clients[index], ...action.payload.updatedClient };
            }
        },
        deleteClient: (state, action) => {
            // payload: client id
            state.clients = state.clients.filter(c => c.id !== action.payload);
        }
    }
});
export const selectCurrentClient = (state) => {
    return state.client.clients.find(c => c.id === state.client.currentClientId);
}

export const { addClient, updateClient, deleteClient } = clientSlice.actions;
export default clientSlice.reducer;
