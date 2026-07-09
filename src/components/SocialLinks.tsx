import React from "react";
import { Github, Linkedin, Instagram, Youtube, Facebook, Mail, Phone, ExternalLink } from "lucide-react";
import type { Profile } from "../types/portfolio";

interface SocialLinksProps {
  socials: Profile["social"];
  size?: number;
  className?: string;
}

// Icon mapper that guarantees high-quality icons for all platforms
export const getSocialIcon = (platform: string, size: number = 20): React.ReactNode => {
  const normPlatform = platform.toLowerCase();

  switch (normPlatform) {
    case "github":
      return <Github size={size} />;
    case "linkedin":
      return <Linkedin size={size} />;
    case "instagram":
      return <Instagram size={size} />;
    case "youtube":
      return <Youtube size={size} />;
    case "facebook":
      return <Facebook size={size} />;
    case "email":
      return <Mail size={size} />;
    case "phone":
      return <Phone size={size} />;
    case "x":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      );
    case "discord":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
        </svg>
      );
    case "reddit":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
          <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.85-1.64-6.29-1.72l1.37-4.31 3.73.84c.02.94.79 1.7 1.74 1.7 1.05 0 1.9-.85 1.9-1.9s-.85-1.9-1.9-1.9c-.83 0-1.53.55-1.79 1.3l-4.14-.93c-.16-.04-.33.05-.38.22l-1.62 5.07c-2.54.04-4.84.69-6.52 1.72-.56-.76-1.46-1.24-2.42-1.24-1.65 0-3 1.35-3 3 0 1.2.7 2.23 1.72 2.72-.08.42-.12.84-.12 1.28 0 3.86 4.3 7 9.5 7s9.5-3.14 9.5-7c0-.44-.04-.86-.11-1.28 1.01-.49 1.71-1.52 1.71-2.72zm-17 1c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm10.75 4.81c-.77.77-2.21 1.19-3.75 1.19s-2.98-.42-3.75-1.19c-.15-.15-.15-.4 0-.55.15-.15.4-.15.55 0 .62.62 1.87.97 3.2.97s2.58-.35 3.2-.97c.15-.15.4-.15.55 0 .15.15.15.4 0 .55zM16 12.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5z"/>
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      );
    case "threads":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
          <path d="M12.75 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75c3.275 0 6.165-1.615 7.945-4.095a.75.75 0 1 0-1.22-.87c-1.465 2.05-3.85 3.465-6.725 3.465-4.555 0-8.25-3.695-8.25-8.25s3.695-8.25 8.25-8.25 8.25 3.695 8.25 8.25v1.125c0 .62-.505 1.125-1.125 1.125s-1.125-.505-1.125-1.125V12a6 6 0 1 0-4.045 5.675.75.75 0 1 0-.91 1.19c1.47 1.12 3.32 1.635 5.18 1.385A2.625 2.625 0 0 0 19.5 17.625V13.5c0-4.555-3.695-8.25-8.25-8.25-3.725 0-6.75 3.025-6.75 6.75s3.025 6.75 6.75 6.75c1.47 0 2.84-.475 3.965-1.285.495.77 1.255 1.355 2.16 1.535 2.08.41 4.14-.625 5.34-2.485a9.69 9.69 0 0 0 1.29-4.89c0-5.385-4.365-9.75-9.75-9.75zm-3 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"/>
        </svg>
      );
    default:
      return <ExternalLink size={size} />;
  }
};

// Returns only the social links that have non-empty URLs
export const getActiveSocials = (socials: Profile["social"]) => {
  return Object.entries(socials).filter(
    ([key, value]) => value && value.trim() !== "" && key !== "phone" && key !== "email"
  );
};

// Social Pills component (Ideal for Hero Section)
export const SocialPills: React.FC<SocialLinksProps> = ({ socials, size = 16, className = "" }) => {
  const activeSocials = getActiveSocials(socials);

  if (activeSocials.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {activeSocials.map(([platform, url]) => (
        <a
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 rounded-full bg-darkCard border border-cardBorder text-xs text-gray-400 hover:text-white hover:border-gray-500 hover:bg-black/40 transition-all duration-300"
        >
          {getSocialIcon(platform, size)}
          <span className="font-semibold tracking-wider uppercase">{platform}</span>
        </a>
      ))}
    </div>
  );
};

// Simple Icon-only row (Ideal for Footer)
export const SocialIconsRow: React.FC<SocialLinksProps> = ({ socials, size = 20, className = "" }) => {
  const activeSocials = getActiveSocials(socials);

  if (activeSocials.length === 0) return null;

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {activeSocials.map(([platform, url]) => (
        <a
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
          title={platform.toUpperCase()}
        >
          {getSocialIcon(platform, size)}
        </a>
      ))}
    </div>
  );
};
