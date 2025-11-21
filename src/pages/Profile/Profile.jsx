import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { selectCurrentFreelancer } from "../../store/slices/freelancerSlice";
import { selectCurrentClient } from "../../store/slices/clientsSlice";

const ProfilePage = () => {
  const location = useLocation();
  const isFreelancer = location.pathname.includes("/freelancer");

  const freelancer = useSelector(selectCurrentFreelancer);
  const client = useSelector(selectCurrentClient);

  const user = isFreelancer ? freelancer : client;

  if (!user) {
    return (
      <div className="w-full flex justify-center items-center py-20">
        <p className="text-gray-500 text-xl">Loading Profile...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">

      {/* HEADER CARD */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold">
          {isFreelancer ? "Freelancer Profile" : "Client Profile"}
        </h1>
        <p className="text-lg opacity-90 mt-1">{user.email}</p>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT SIDE – BASIC INFO */}
        <div className="col-span-1 bg-white p-6 shadow rounded-xl space-y-4">
          <h2 className="text-xl font-semibold text-indigo-600">Basic Information</h2>

          <div>
            <p className="font-medium">Name:</p>
            <p className="text-gray-700">{user.name}</p>
          </div>

          <div>
            <p className="font-medium">Email:</p>
            <p className="text-gray-700">{user.email}</p>
          </div>

          {isFreelancer && (
            <div>
              <p className="font-medium">Profile Completion:</p>
              <p className="text-gray-700">{user.profileCompletion}%</p>
            </div>
          )}

          {!isFreelancer && (
            <>
              <div>
                <p className="font-medium">Role:</p>
                <p className="text-gray-700">{user.role}</p>
              </div>

              <div>
                <p className="font-medium">Total Spent:</p>
                <p className="text-gray-700">${user.totalSpent}</p>
              </div>
            </>
          )}
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="col-span-2 space-y-6">

          {/* FREELANCER – STATS */}
          {isFreelancer && (
            <div className="bg-white p-6 shadow rounded-xl">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4">Freelancer Stats</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard label="Active Proposals" value={user.stats.activeProposals} color="indigo" />
                <StatCard label="Completed Jobs" value={user.stats.completed} color="green" />
                <StatCard label="Total Earnings" value={`$${user.stats.totalEarnings}`} color="purple" />
                <StatCard label="Rating" value={user.stats.rating} color="pink" />
              </div>
            </div>
          )}

          {/* CLIENT – DASHBOARD STATS */}
          {!isFreelancer && (
            <div className="bg-white p-6 shadow rounded-xl">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4">Client Stats</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard label="Active Jobs" value={user.activeJobs} color="indigo" />
                <StatCard label="Freelancers Hired" value={user.hiredFreelancers} color="green" />
                <StatCard label="Total Spent" value={`$${user.totalSpent}`} color="purple" />
                <StatCard label="Proposals Received" value={user.proposalsReceived} color="pink" />
              </div>
            </div>
          )}

          <div className="">
            <div className="bg-white p-6 shadow rounded-xl">
                <h2 className="text-xl font-semibold text-indigo-600 mb-4">Bio</h2>
                <p className="text-gray-700">{user.bio || "No bio available."}</p>
            </div>
          </div>

          {/* FREELANCER – Recent Activity */}
          {isFreelancer && (
            <div className="bg-white p-6 shadow rounded-xl">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4">Recent Activity</h2>

              <div className="space-y-4">
                {user.recentActivity.map((item) => (
                  <div
                    key={item.id}
                    className={`border-l-4 pl-4 py-2 rounded bg-gray-50 border-${item.color}-500`}
                  >
                    <p className="font-medium">{item.text}</p>
                    <p className="text-sm text-gray-500">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CLIENT – Open Jobs */}
          {!isFreelancer && (
            <div className="bg-white p-6 shadow rounded-xl">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4">Open Jobs</h2>

              <div className="space-y-4">
                {user.openJobs.map((job) => (
                  <div
                    key={job.id}
                    className={`p-4 border-l-4 rounded bg-gray-50 border-${job.color}-500`}
                  >
                    <p className="font-medium text-lg">{job.title}</p>
                    <p className="text-sm text-gray-600">
                      {job.proposals} proposals • Posted {job.posted}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

// Small stat card component for reuse
const StatCard = ({ label, value, color }) => (
  <div className={`p-4 bg-${color}-50 border-l-4 border-${color}-500 rounded-lg shadow-sm`}>
    <p className="text-sm text-gray-600">{label}</p>
    <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
  </div>
);

export default ProfilePage;
