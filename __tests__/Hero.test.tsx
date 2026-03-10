import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';

// Mock the GitHubStats component
jest.mock('../components/GitHubStats', () => {
  return function MockGitHubStats() {
    return <div data-testid="github-stats">GitHub Stats</div>;
  };
});

describe('Hero Component', () => {
  it('renders the hero section with correct content', () => {
    render(<Hero />);

    // Check if main heading is present
    expect(screen.getByText(/Crafting Innovative Android Apps/i)).toBeInTheDocument();

    // Check if badge is present
    expect(screen.getByText(/Android Developer & Cybersecurity Enthusiast/i)).toBeInTheDocument();

    // Check if CTA buttons are present
    expect(screen.getByText('View My Work')).toBeInTheDocument();
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();

    // Check if GitHub stats component is rendered
    expect(screen.getByTestId('github-stats')).toBeInTheDocument();
  });

  it('renders the subtitle with correct name', () => {
    render(<Hero />);

    expect(screen.getByText(/Aditya Mishra/i)).toBeInTheDocument();
  });
});