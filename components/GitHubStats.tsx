import React, { useEffect, useState } from 'react';

interface GitHubStats {
  followers: number;
  following: number;
  public_repos: number;
  total_stars: number;
  contributions: number;
}

const GitHubStats: React.FC = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const userResponse = await fetch('https://api.github.com/users/2b-adrix');
        if (!userResponse.ok) throw new Error('Failed to fetch user data');
        const userData = await userResponse.json();

        // Fetch repositories to calculate total stars
        const reposResponse = await fetch('https://api.github.com/users/2b-adrix/repos?per_page=100');
        if (!reposResponse.ok) throw new Error('Failed to fetch repos data');
        const reposData: Array<{ stargazers_count: number }> = await reposResponse.json();
        const totalStars = reposData.reduce((acc: number, repo) => acc + repo.stargazers_count, 0);

        setStats({
          followers: userData.followers || 0,
          following: userData.following || 0,
          public_repos: userData.public_repos || 0,
          total_stars: totalStars || 0,
          contributions: 307, // Static for now
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        setError(true);
        // Set fallback data
        setStats({
          followers: 7,
          following: 11,
          public_repos: 12,
          total_stars: 2,
          contributions: 307,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="text-center py-4">
        <p className="text-gray-400 text-sm">Unable to load GitHub stats</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
      <div className="text-center group">
        <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-1">
            {stats.followers.toLocaleString()}
          </h3>
          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Followers</p>
        </div>
      </div>
      <div className="text-center group">
        <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-lg p-4 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 mb-1">
            {stats.following.toLocaleString()}
          </h3>
          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Following</p>
        </div>
      </div>
      <div className="text-center group">
        <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg p-4 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:scale-105">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-1">
            {stats.public_repos.toLocaleString()}
          </h3>
          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Repositories</p>
        </div>
      </div>
      <div className="text-center group">
        <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg p-4 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:scale-105">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-1">
            {stats.total_stars.toLocaleString()}
          </h3>
          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Stars</p>
        </div>
      </div>
      <div className="text-center group md:col-span-1 col-span-2">
        <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg p-4 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:scale-105">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-1">
            {stats.contributions.toLocaleString()}
          </h3>
          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Contributions</p>
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;