import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectCurrentFreelancer } from '../../store/slices/freelancerSlice';

const FreelanceDashboard = () => {
  // Redux state selectors
  const freelancer = useSelector(selectCurrentFreelancer);
  const recommendedJobs = useSelector(state => state.jobs.recommendedJobs || []);


  if (!freelancer) return <div>Loading...</div>;


  const { name, stats, recentActivity, profileCompletion, quickActions } = freelancer;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                OpenWork
              </h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for jobs, projects..."
                  className="w-full px-4 py-2.5 pl-12 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">

              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <NavLink to={'chat'} className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-indigo-500 rounded-full"></span>
              </NavLink>

              <NavLink to={'profile'} >
                <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">{name}</p>
                    <p className="text-xs text-gray-500 capitalize">Freelancer</p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer hover:shadow-lg transition-all">
                    {name[0]}
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {name}! 👋
          </h2>
          <p className="text-gray-600">Ready to find your next opportunity? Browse available projects below.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-indigo-500">
            <p className="text-sm text-gray-600 mb-1">Active Proposals</p>
            <p className="text-3xl font-bold text-gray-900">{stats?.activeProposals || 0}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
            <p className="text-sm text-gray-600 mb-1">Completed</p>
            <p className="text-3xl font-bold text-gray-900">{stats?.completed || 0}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
            <p className="text-sm text-gray-600 mb-1">Total Earnings</p>
            <p className="text-3xl font-bold text-gray-900">${stats?.totalEarnings || 0}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-pink-500">
            <p className="text-sm text-gray-600 mb-1">Rating</p>
            <p className="text-3xl font-bold text-gray-900">{stats?.rating || 0}</p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Jobs */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Recommended Jobs</h3>
                <button className="text-sm text-indigo-600 hover:text-indigo-700 font-semibold">View All →</button>
              </div>
              <div className="space-y-4">
                {recommendedJobs.map(job => (
                  <div key={job.id} className="border-2 border-gray-200 rounded-xl p-5 hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{job.title}</h4>
                        <p className="text-sm text-gray-600 mb-3">{job.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {job.skills.map(skill => (
                            <span key={skill} className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">{skill}</span>
                          ))}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>Posted {job.posted}</span>
                          <span>{job.location}</span>
                          <span>{job.salary}</span>
                        </div>
                      </div>
                      <button className="ml-4 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg">
                        Apply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* OpenOffer & Profile & Activity */}
          <div className="space-y-6">
          {/* Create OpenJob Button */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold mb-1">Create OpenOffer</h3>
                <p className="text-sm text-indigo-100">Create an open offer for clients for specific skill</p>
              </div>
              <svg className="w-12 h-12 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <NavLink to={'create-offer'} className="w-full bg-white text-indigo-600 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Post New Offer</span>
            </NavLink>
          </div>
            {/* Profile Completion */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Profile Completion</h3>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">{profileCompletion}% Complete</span>
                  <span className="text-sm font-semibold text-indigo-600">{100 - profileCompletion}% to go</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-3 rounded-full" style={{ width: `${profileCompletion}%` }}></div>
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h4 className="text-md font-semibold text-gray-900 mb-3">Recent Activity</h4>
                {recentActivity.map(a => (
                  <div key={a.id} className="flex items-center text-sm mb-2">
                    <span className={`w-2 h-2 rounded-full mr-2 bg-${a.color}-500`}></span>
                    <span>{a.text}</span>
                    <span className="ml-auto text-gray-400 text-xs">{a.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-md p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                {quickActions.map((action, idx) => (
                  <button key={idx} className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm py-3 rounded-lg font-semibold transition-all">
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelanceDashboard;
