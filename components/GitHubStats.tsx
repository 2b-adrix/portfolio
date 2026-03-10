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
      <div className="text-center">
        <h3 className="text-2xl font-bold text-purple">{stats.followers}</h3>
        <p className="text-sm text-gray-400">Followers</p>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-purple">{stats.following}</h3>
        <p className="text-sm text-gray-400">Following</p>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-purple">{stats.public_repos}</h3>
        <p className="text-sm text-gray-400">Repositories</p>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-purple">{stats.total_stars}</h3>
        <p className="text-sm text-gray-400">Stars</p>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-purple">{stats.contributions}</h3>
        <p className="text-sm text-gray-400">Contributions</p>
      </div>
    </div>
  );
};

export default GitHubStats;